import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export const runtime = 'nodejs'

/**
 * Structured quote requests from the Ads landing page.
 *
 * Separate from /api/contact because this payload carries line parameters and
 * ad attribution (gclid + UTMs) that need to arrive as a table, not as free
 * text. Every value is escaped before it is interpolated into the HTML email —
 * unlike the older endpoint, which interpolates raw input.
 */
const quoteSchema = z.object({
    name: z.string().trim().min(1).max(120),
    company: z.string().trim().max(160).optional().default(''),
    email: z.string().trim().email().max(200),
    phone: z.string().trim().min(3).max(60),
    country: z.string().trim().max(80).optional().default(''),
    material: z.string().trim().max(80).optional().default(''),
    width: z.string().trim().max(40).optional().default(''),
    layers: z.string().trim().max(20).optional().default(''),
    die: z.string().trim().max(40).optional().default(''),
    deviation: z.string().trim().max(40).optional().default(''),
    target: z.string().trim().max(40).optional().default(''),
    output: z.string().trim().max(40).optional().default(''),
    message: z.string().trim().max(3000).optional().default(''),
    checked: z.literal(true),
    /** Honeypot: real visitors never see or fill this. */
    website: z.string().max(200).optional().default(''),
    locale: z.string().max(8).optional().default('en'),
    gclid: z.string().trim().max(500).optional().default(''),
    utmSource: z.string().trim().max(200).optional().default(''),
    utmMedium: z.string().trim().max(200).optional().default(''),
    utmCampaign: z.string().trim().max(200).optional().default(''),
    landingUrl: z.string().trim().max(1000).optional().default(''),
})

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        switch (character) {
            case '&':
                return '&amp;'
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            default:
                return '&#39;'
        }
    })
}

export async function POST(request: Request) {
    let body: unknown
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 })
    }

    const parsed = quoteSchema.safeParse(body)
    if (!parsed.success) {
        const consentIssue = parsed.error.issues.some((issue) => issue.path[0] === 'checked')
        return NextResponse.json(
            {
                success: false,
                error: consentIssue
                    ? 'Please accept the privacy policy.'
                    : 'Please check the required fields.',
            },
            { status: 400 }
        )
    }

    const data = parsed.data

    // Silently accept honeypot submissions so bots do not learn the filter.
    if (data.website) {
        return NextResponse.json({ success: true })
    }

    const host = process.env.SMTP_HOST
    const user = process.env.SMTP_USER
    if (!host || !user) {
        console.error('Quote mail is not configured: SMTP_HOST / SMTP_USER missing')
        return NextResponse.json({ success: false, error: 'Mail is not configured' }, { status: 500 })
    }

    const rows: [string, string][] = [
        ['Name', data.name],
        ['Company', data.company],
        ['Email', data.email],
        ['Phone / WhatsApp', data.phone],
        ['Country', data.country],
        ['Raw material', data.material],
        ['Film width (mm)', data.width],
        ['Layers', data.layers],
        ['Die diameter (mm)', data.die],
        ['Current deviation (%)', data.deviation],
        ['Target thickness (µm)', data.target],
        ['Output (kg/h)', data.output],
        ['Landing page', data.locale === 'zh' ? '中文落地页' : 'English landing page'],
        ['gclid', data.gclid],
        ['UTM source', data.utmSource],
        ['UTM medium', data.utmMedium],
        ['UTM campaign', data.utmCampaign],
        ['Page URL', data.landingUrl],
    ]

    const detailRows = rows
        .filter(([, value]) => value)
        .map(
            ([label, value]) =>
                `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap;vertical-align:top">${escapeHtml(
                    label
                )}</td><td style="padding:6px 0;color:#111">${escapeHtml(value)}</td></tr>`
        )
        .join('')

    const message = data.message
        ? `<h3 style="margin:24px 0 8px;font-size:14px;color:#111">Message</h3><p style="margin:0;white-space:pre-wrap;color:#111">${escapeHtml(
              data.message
          )}</p>`
        : ''

    const subject = `Quote request — ${data.name}${data.company ? ` / ${data.company}` : ''}`.replace(
        /[\r\n]+/g,
        ' '
    )

    const transporter = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user,
            pass: process.env.SMTP_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: `"JINJIU website" <${user}>`,
            to: 'sales@jinjiutech.com',
            replyTo: data.email,
            subject: subject.slice(0, 180),
            text: [
                ...rows.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
                '',
                data.message ? `Message: ${data.message}` : '',
            ].join('\n'),
            html: `
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#111">
                    <h2 style="margin:0 0 4px;font-size:18px">New quote request</h2>
                    <p style="margin:0 0 16px;color:#666">Automatic air ring landing page</p>
                    <table style="border-collapse:collapse">${detailRows}</table>
                    ${message}
                </div>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Failed to send quote email', error)
        return NextResponse.json({ success: false, error: 'Send email failed' }, { status: 500 })
    }
}
