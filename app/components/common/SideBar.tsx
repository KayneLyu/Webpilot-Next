'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Headset, Mail, Phone, Send, X } from 'lucide-react'

import Links from '@/components/common/Links'
import { cn } from '@/lib/utils'
import { mailtoHref, siteContact, whatsappHref } from '@/lib/site'

/** Official WhatsApp glyph - lucide ships no brand icons. */
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )
}

const RAIL_BUTTON =
    'flex h-14 w-14 cursor-pointer items-center justify-center transition-colors duration-200 hover:bg-6 focus-visible:bg-6 focus-visible:outline-none'

const ROW = 'flex items-start gap-3 border-b border-[#e3e3e3] px-5 py-3'
const ROW_ICON = 'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-5/10 text-3'
const ROW_LABEL = 'block text-[11px] uppercase tracking-wide text-3/55'
const ROW_VALUE = 'block text-[14px] font-semibold text-3'

/**
 * Floating "contact us" sidebar.
 * Desktop (mouse): hovering the rail slides the panel out.
 * Touch devices: tapping the rail button opens it as a right-hand drawer.
 */
export default function SideBar() {
    const t = useTranslations('float')
    const tContact = useTranslations('contact')
    const tNav = useTranslations('nav')

    const [open, setOpen] = useState(false)
    const [hoverable, setHoverable] = useState(false)
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Desktop = a real mouse pointer. Touch / pen devices fall back to tap.
    useEffect(() => {
        const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
        const sync = () => setHoverable(mq.matches)
        sync()
        mq.addEventListener('change', sync)
        return () => mq.removeEventListener('change', sync)
    }, [])

    const close = useCallback(() => setOpen(false), [])

    const cancelClose = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current)
            closeTimer.current = null
        }
    }, [])

    // Small grace period so the pointer can cross the gap between rail and panel.
    const closeSoon = useCallback(() => {
        cancelClose()
        closeTimer.current = setTimeout(() => setOpen(false), 260)
    }, [cancelClose])

    const openNow = useCallback(() => {
        cancelClose()
        setOpen(true)
    }, [cancelClose])

    useEffect(() => cancelClose, [cancelClose])

    // Esc closes the panel.
    useEffect(() => {
        if (!open) return
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [open])

    // Keep the page behind the drawer still on touch devices.
    useEffect(() => {
        if (!open || hoverable) return
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previous
        }
    }, [open, hoverable])

    return (
        <>
            {/* Tap-anywhere backdrop - touch devices only */}
            <div
                aria-hidden="true"
                onClick={close}
                className={cn(
                    'fixed inset-0 z-40 bg-7/45 backdrop-blur-[2px] transition-opacity duration-300 md:hidden',
                    open ? 'opacity-100' : 'pointer-events-none opacity-0'
                )}
            />

            {/*
             * The rail sits in a full-height, right-anchored column so it can be
             * vertically centred without a CSS transform: a transformed ancestor
             * would become the containing block of the panel's `position: fixed`
             * and break the mobile drawer.
             */}
            <div
                className="pointer-events-none fixed inset-y-0 right-0 z-50 flex items-center"
                onMouseEnter={hoverable ? openNow : undefined}
                onMouseLeave={hoverable ? closeSoon : undefined}
            >
                <div className="pointer-events-auto relative flex items-center">
                    {/* ---------------- floating panel ---------------- */}
                    <section
                        id="contact-float-panel"
                        aria-labelledby="contact-float-title"
                        className={cn(
                            'flex flex-col overflow-hidden bg-white shadow-[0_18px_50px_rgba(10,10,54,0.22)]',
                            // shared transition
                            'transition-[opacity,transform,visibility] duration-300 ease-out',
                            // touch: full-height drawer against the right edge
                            'fixed inset-y-0 right-0 w-[86vw] max-w-[340px]',
                            // desktop: card floating left of the rail
                            'md:absolute md:inset-y-auto md:right-full md:top-1/2 md:mr-3 md:max-h-[90vh] md:w-[340px] md:-translate-y-1/2 md:rounded-2xl md:border md:border-[#e3e3e3]',
                            open
                                ? 'visible translate-x-0 opacity-100'
                                : 'invisible pointer-events-none translate-x-full opacity-0 md:translate-x-3'
                        )}
                    >
                        {/* header */}
                        <div className="relative shrink-0 bg-5 px-5 pb-3 pt-4 text-white">
                            <p className="pr-9 text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                                {t('subtitle')}
                            </p>
                            <h2 id="contact-float-title" className="mt-1 pr-9 text-[20px] font-semibold leading-7">
                                {t('title')}
                            </h2>
                            <p className="mt-1.5 text-[12.5px] leading-5 text-white/75">{t('desc')}</p>
                            <button
                                type="button"
                                onClick={close}
                                aria-label={t('close')}
                                className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white focus-visible:bg-white/15 focus-visible:text-white focus-visible:outline-none"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* scrollable body */}
                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                            {/* WhatsApp + QR */}
                            <div className="border-b border-[#e3e3e3] px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25d366] text-white">
                                        <WhatsAppIcon className="h-3.5 w-3.5" />
                                    </span>
                                    <span className="text-[14px] font-semibold text-3">WhatsApp</span>
                                </div>

                                <div className="mt-3 flex items-center gap-3">
                                    <div className="shrink-0 rounded-xl border border-[#e3e3e3] p-1.5">
                                        <Image
                                            src={siteContact.whatsapp.qr}
                                            alt={`${t('whatsapp')} QR`}
                                            width={128}
                                            height={128}
                                            className="h-[128px] w-[128px]"
                                        />
                                    </div>
                                    <div className="flex min-w-0 flex-1 flex-col items-start">
                                        <p className="text-[12px] leading-[18px] text-3/70">{t('scan')}</p>
                                        <p className="mt-1.5 text-[14px] font-semibold tracking-wide text-3">
                                            {siteContact.whatsapp.label}
                                        </p>
                                        <a
                                            href={whatsappHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-[#25d366] px-2.5 py-2 text-[12.5px] font-semibold leading-tight text-white transition-colors hover:bg-[#1da851]"
                                        >
                                            <WhatsAppIcon className="h-4 w-4 shrink-0" />
                                            <span>{t('chat')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* email */}
                            <a href={mailtoHref} className={cn(ROW, 'group transition-colors hover:bg-9')}>
                                <span className={ROW_ICON}>
                                    <Mail size={16} />
                                </span>
                                <span className="min-w-0">
                                    <span className={ROW_LABEL}>{tContact('email')}</span>
                                    <span className={cn(ROW_VALUE, 'break-all group-hover:underline')}>
                                        {siteContact.email}
                                    </span>
                                </span>
                            </a>

                            {/* mobile / WhatsApp numbers */}
                            <div className={ROW}>
                                <span className={ROW_ICON}>
                                    <Phone size={16} />
                                </span>
                                <div className="min-w-0">
                                    <span className={ROW_LABEL}>{tContact('mobile')}</span>
                                    {siteContact.mobiles.map((item) => (
                                        <a
                                            key={item.tel}
                                            href={`tel:${item.tel}`}
                                            className={cn(ROW_VALUE, 'hover:underline')}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* footer CTA */}
                        <div className="shrink-0 border-t border-[#e3e3e3] bg-9 px-5 py-4">
                            <Links
                                href="/contact"
                                onClick={close}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-6 px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-5"
                            >
                                <Send size={16} />
                                {t('inquiry')}
                            </Links>
                        </div>
                    </section>

                    {/* ---------------- rail ---------------- */}
                    <nav
                        aria-label={t('trigger')}
                        className="flex flex-col divide-y divide-white/15 overflow-hidden rounded-l-xl bg-5 text-white shadow-[0_6px_24px_rgba(10,10,54,0.28)]"
                    >
                        <button
                            type="button"
                            onClick={() => (hoverable ? openNow() : setOpen((prev) => !prev))}
                            aria-expanded={open}
                            aria-controls="contact-float-panel"
                            aria-label={t('trigger')}
                            className={cn(RAIL_BUTTON, 'relative')}
                        >
                            <Headset size={24} />
                            {!open && (
                                <span className="absolute right-2.5 top-2.5 flex h-2 w-2" aria-hidden="true">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366] opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25d366]" />
                                </span>
                            )}
                        </button>

                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className={RAIL_BUTTON}
                        >
                            <WhatsAppIcon className="h-[22px] w-[22px]" />
                        </a>

                        <a href={mailtoHref} aria-label={tContact('email')} className={RAIL_BUTTON}>
                            <Mail size={22} />
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}
