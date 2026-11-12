'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useForm, type Control, type FieldPath } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Toaster, toast } from 'sonner'
import { ArrowRight, Check, Loader2, Mail, ShieldCheck } from 'lucide-react'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useFormField,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import type { LandingContent, LandingLocale } from '@/lib/landing'
import { mailtoHref, siteContact, whatsappHref } from '@/lib/site'
import SectionHeading from './SectionHeading'
import { sectionWrap } from './ui'
import { WhatsAppIcon } from './WhatsAppIcon'

type FormValues = {
    name: string
    company: string
    email: string
    phone: string
    country: string
    material: string
    width: string
    layers: string
    die: string
    deviation: string
    target: string
    output: string
    message: string
    checked: boolean
    website: string
}

const FIELD =
    'h-11 w-full rounded-none border-[#0a0a36]/15 bg-[#faf9f6] px-3 text-[13.5px] text-[#0a0a36] shadow-none placeholder:text-[#0a0a36]/40 focus-visible:border-[#0270c2] focus-visible:ring-2 focus-visible:ring-[#0270c2]/15'

type AnalyticsWindow = Window & {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
}

/**
 * 09 —Quote form.
 *
 * Only the contact fields are required; line parameters are optional so a
 * visitor who does not know their die diameter can still convert. The GCLID
 * and UTM values are forwarded with the lead so offline conversions can be
 * imported back into Google Ads.
 */
export default function QuoteForm({
    content,
    locale,
}: {
    content: LandingContent['form']
    locale: LandingLocale
}) {
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [serverError, setServerError] = useState('')
    const panelRef = useRef<HTMLDivElement>(null)

    const schema = z.object({
        name: z.string().trim().min(1, content.validation.required).max(120),
        company: z.string().trim().max(160),
        email: z.string().trim().min(1, content.validation.required).email(content.validation.email).max(200),
        phone: z.string().trim().min(3, content.validation.required).max(60),
        country: z.string().trim().max(80),
        material: z.string().trim().max(80),
        width: z.string().trim().max(40),
        layers: z.string().trim().max(20),
        die: z.string().trim().max(40),
        deviation: z.string().trim().max(40),
        target: z.string().trim().max(40),
        output: z.string().trim().max(40),
        message: z.string().trim().max(3000),
        checked: z.boolean().refine((value) => value, { message: content.validation.consent }),
        website: z.string().max(200),
    })

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            country: '',
            material: '',
            width: '',
            layers: '',
            die: '',
            deviation: '',
            target: '',
            output: '',
            message: '',
            checked: false,
            website: '',
        },
    })

    async function onSubmit(data: FormValues) {
        if (loading) return
        setLoading(true)
        setServerError('')

        const params = new URLSearchParams(window.location.search)
        const payload = {
            ...data,
            locale,
            gclid: params.get('gclid') ?? '',
            utmSource: params.get('utm_source') ?? '',
            utmMedium: params.get('utm_medium') ?? '',
            utmCampaign: params.get('utm_campaign') ?? '',
            landingUrl: window.location.href,
        }

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const result = (await response.json().catch(() => null)) as
                | { success?: boolean; error?: string }
                | null

            if (!response.ok || !result?.success) {
                throw new Error(result?.error || content.error)
            }

            // Conversion hooks for whatever tag the account adds later. Nothing
            // is loaded here; the events are simply available on window.
            const w = window as AnalyticsWindow
            w.dataLayer?.push({ event: 'quote_submitted', form: 'lp_automatic_air_ring', locale })
            w.gtag?.('event', 'generate_lead', { form: 'lp_automatic_air_ring', locale })

            setSent(true)
            form.reset()
            requestAnimationFrame(() => {
                panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            })
        } catch (error) {
            const message = error instanceof Error && error.message ? error.message : content.error
            setServerError(message)
            toast.error(content.error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id='quote' className='scroll-mt-24 bg-[#07072a] py-16 md:py-28'>
            <Toaster position='top-center' />
            <div className={sectionWrap}>
                <SectionHeading {...content} inverted />

                <div className='mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-14'>
                    <div className='order-2 lg:order-1 lg:col-span-5'>
                        <ol className='space-y-7'>
                            {content.next.map((step, index) => (
                                <li key={step.title} className='flex gap-4'>
                                    <span className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#5ec8ff]/35 font-[family-name:var(--font-geist-mono)] text-[10.5px] text-[#5ec8ff]'>
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h3 className='text-[15px] font-semibold text-white'>{step.title}</h3>
                                        <p className='mt-1.5 text-[12.5px] leading-[1.7] text-white/70'>{step.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className='mt-10 border-t border-white/12 pt-6'>
                            <p className='font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.22em] text-white/40'>
                                {content.contactTitle}
                            </p>
                            <div className='mt-4 flex flex-col gap-2.5 text-[13px]'>
                                <a
                                    href={whatsappHref}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-2.5 text-white/80 transition-colors hover:text-white'
                                >
                                    <WhatsAppIcon className='h-4 w-4' />
                                    {siteContact.whatsapp.label}
                                </a>
                                <a
                                    href={mailtoHref}
                                    className='flex items-center gap-2.5 text-white/80 transition-colors hover:text-white'
                                >
                                    <Mail size={14} aria-hidden='true' />
                                    {siteContact.email}
                                </a>
                            </div>
                            <p className='mt-6 flex items-start gap-2 text-[11px] leading-[1.6] text-white/50'>
                                <ShieldCheck size={13} className='mt-0.5 shrink-0' aria-hidden='true' />
                                {content.privacyNote}
                            </p>
                        </div>
                    </div>

                    <div className='order-1 lg:order-2 lg:col-span-7' ref={panelRef}>
                        <div className='bg-white p-5 sm:p-7 md:p-8' aria-live='polite'>
                            {sent ? (
                                <div className='flex min-h-[480px] flex-col items-start justify-center pb-20 pt-8 md:pb-8'>
                                    <span className='flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf5ee] text-[#0f6b3c]'>
                                        <Check size={24} aria-hidden='true' />
                                    </span>
                                    <h3 className='mt-6 text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0a0a36]'>
                                        {content.successTitle}
                                    </h3>
                                    <p className='mt-3 max-w-md text-[13.5px] leading-[1.75] text-[#0a0a36]/65'>
                                        {content.successBody}
                                    </p>
                                    <a
                                        href={whatsappHref}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='mt-7 inline-flex items-center gap-2 bg-[#0f7a40] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#0b6434]'
                                    >
                                        <WhatsAppIcon className='h-4 w-4' />
                                        {content.successCta}
                                    </a>
                                    <button
                                        type='button'
                                        onClick={() => setSent(false)}
                                        className='mt-4 cursor-pointer border-b border-[#0a0a36]/25 pb-0.5 text-[12px] font-medium text-[#0a0a36]/55 transition-colors hover:border-[#0a0a36]/60 hover:text-[#0a0a36]'
                                    >
                                        {content.successAgain}
                                    </button>
                                </div>
                            ) : (
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className='relative'>
                                        <div className='pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden' aria-hidden='true'>
                                            <label htmlFor='quote-website'>Website</label>
                                            <input id='quote-website' tabIndex={-1} autoComplete='off' {...form.register('website')} />
                                        </div>

                                        <p className='font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#0a0a36]/45'>
                                            {content.contactTitle}
                                        </p>

                                        <div className='mt-4 grid gap-x-4 gap-y-5 sm:grid-cols-2'>
                                            <TextField control={form.control} name='name' label={content.labels.name} placeholder={content.placeholders.name} required autoComplete='name' />
                                            <TextField control={form.control} name='company' label={content.labels.company} placeholder={content.placeholders.company} autoComplete='organization' />
                                            <TextField control={form.control} name='email' label={content.labels.email} placeholder={content.placeholders.email} type='email' required autoComplete='email' />
                                            <TextField control={form.control} name='phone' label={content.labels.phone} placeholder={content.placeholders.phone} type='tel' required autoComplete='tel' />
                                            <TextField control={form.control} name='country' label={content.labels.country} placeholder={content.placeholders.country} autoComplete='country-name' />
                                            <SelectField control={form.control} name='material' label={content.labels.material} options={content.materials} placeholder={content.selectPlaceholder} />
                                        </div>

                                        <p className='mt-8 border-t border-[#0a0a36]/10 pt-6 font-[family-name:var(--font-geist-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#0a0a36]/45'>
                                            {content.lineTitle}
                                        </p>

                                        <div className='mt-4 grid gap-x-4 gap-y-5 sm:grid-cols-2'>
                                            <TextField control={form.control} name='width' label={content.labels.width} placeholder={content.placeholders.width} inputMode='numeric' />
                                            <TextField control={form.control} name='die' label={content.labels.die} placeholder={content.placeholders.die} inputMode='numeric' />
                                            <SelectField control={form.control} name='layers' label={content.labels.layers} options={content.layers} placeholder={content.selectPlaceholder} />
                                            <TextField control={form.control} name='deviation' label={content.labels.deviation} placeholder={content.placeholders.deviation} inputMode='decimal' />
                                            <TextField control={form.control} name='target' label={content.labels.target} placeholder={content.placeholders.target} inputMode='decimal' />
                                            <TextField control={form.control} name='output' label={content.labels.output} placeholder={content.placeholders.output} inputMode='numeric' />

                                            <div className='sm:col-span-2'>
                                                <FormField
                                                    control={form.control}
                                                    name='message'
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className='text-[11px] tracking-[0.06em] text-[#0a0a36]/60'>
                                                                {content.labels.message}
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    {...field}
                                                                    rows={4}
                                                                    placeholder={content.placeholders.message}
                                                                    className={`${FIELD} h-auto min-h-[96px] resize-y py-2.5`}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className='text-[11px]' />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name='checked'
                                            render={({ field }) => (
                                                <FormItem className='mt-6'>
                                                    <div className='flex items-start gap-3'>
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                                className='mt-0.5 border-[#0a0a36]/25 data-[state=checked]:border-[#0270c2] data-[state=checked]:bg-[#0270c2] data-[state=checked]:text-white'
                                                            />
                                                        </FormControl>
                                                        <ConsentText content={content} locale={locale} />
                                                    </div>
                                                    <FormMessage className='pl-7 text-[11px]' />
                                                </FormItem>
                                            )}
                                        />

                                        {serverError && (
                                            <p
                                                role='alert'
                                                className='mt-5 border border-[#b42318]/20 bg-[#fef3f2] px-3 py-2.5 text-[11.5px] leading-[1.6] text-[#b42318]'
                                            >
                                                {serverError}
                                            </p>
                                        )}

                                        <div className='mt-6 flex flex-col gap-3 border-t border-[#0a0a36]/10 pt-5 sm:flex-row sm:items-center sm:justify-between'>
                                            <p className='max-w-[230px] text-[10px] leading-[1.55] text-[#0a0a36]/40'>
                                                {content.privacyNote}
                                            </p>
                                            <button
                                                type='submit'
                                                disabled={loading}
                                                className='inline-flex cursor-pointer items-center justify-center gap-2.5 bg-[#0270c2] px-5 py-3.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#025a9c] disabled:cursor-not-allowed disabled:opacity-60'
                                            >
                                                {loading ? (
                                                    <Loader2 className='h-4 w-4 animate-spin' aria-hidden='true' />
                                                ) : (
                                                    <ArrowRight className='h-4 w-4' aria-hidden='true' />
                                                )}
                                                {loading ? content.submitting : content.submit}
                                            </button>
                                        </div>
                                    </form>
                                </Form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ConsentText({ content, locale }: { content: LandingContent['form']; locale: LandingLocale }) {
    const { formItemId } = useFormField()

    return (
        <p className='text-[11.5px] leading-[1.6] text-[#0a0a36]/60'>
            <label htmlFor={formItemId} className='cursor-pointer'>
                {content.consentBefore}
            </label>
            <Link
                href={`/${locale}/privacy-policy`}
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-[#0a0a36]/30 underline-offset-2 hover:text-[#0270c2]'
            >
                {content.consentLink}
            </Link>
            <label htmlFor={formItemId} className='cursor-pointer'>
                {content.consentAfter}
            </label>
        </p>
    )
}

type StringFieldPath = Exclude<FieldPath<FormValues>, 'checked'>

function TextField({
    control,
    name,
    label,
    placeholder,
    type = 'text',
    required = false,
    autoComplete,
    inputMode,
}: {
    control: Control<FormValues>
    name: StringFieldPath
    label: string
    placeholder: string
    type?: string
    required?: boolean
    autoComplete?: string
    inputMode?: 'numeric' | 'decimal' | 'text'
}) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-[11px] tracking-[0.06em] text-[#0a0a36]/60'>
                        {label}
                        {required && <span className='ml-0.5 text-[#b42318]'>*</span>}
                    </FormLabel>
                    <FormControl>
                        <Input
                            name={field.name}
                            ref={field.ref}
                            onBlur={field.onBlur}
                            onChange={field.onChange}
                            value={typeof field.value === 'string' ? field.value : ''}
                            type={type}
                            placeholder={placeholder}
                            autoComplete={autoComplete}
                            inputMode={inputMode}
                            aria-required={required}
                            className={FIELD}
                        />
                    </FormControl>
                    <FormMessage className='text-[11px]' />
                </FormItem>
            )}
        />
    )
}

function SelectField({
    control,
    name,
    label,
    options,
    placeholder,
}: {
    control: Control<FormValues>
    name: StringFieldPath
    label: string
    options: string[]
    placeholder: string
}) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-[11px] tracking-[0.06em] text-[#0a0a36]/60'>{label}</FormLabel>
                    <FormControl>
                        <select
                            name={field.name}
                            ref={field.ref}
                            onBlur={field.onBlur}
                            onChange={field.onChange}
                            value={typeof field.value === 'string' ? field.value : ''}
                            className={`${FIELD} appearance-auto pr-2`}
                        >
                            <option value=''>{placeholder}</option>
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </FormControl>
                    <FormMessage className='text-[11px]' />
                </FormItem>
            )}
        />
    )
}
