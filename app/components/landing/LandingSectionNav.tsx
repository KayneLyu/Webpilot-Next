'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { List, X } from 'lucide-react'

import type { LandingContent } from '@/lib/landing'

/**
 * In-page navigation for the long landing page.
 *
 * Desktop keeps a slim tab against the right edge and opens a floating panel
 * beside it; below 1366px the same panel becomes a right-hand drawer. A scroll
 * spy highlights the section currently under the reading position, and the
 * thin bar on the tab doubles as a reading-progress indicator.
 */
export default function LandingSectionNav({ content }: { content: LandingContent['nav'] }) {
    const items = content.items
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(items[0]?.id ?? 'top')
    const [progress, setProgress] = useState(0)
    const tabRef = useRef<HTMLButtonElement>(null)

    // Scroll spy + reading progress. Runs on scroll, resize and layout changes
    // (lazy images change the document height as they load).
    useEffect(() => {
        let frame = 0

        const update = () => {
            frame = 0
            const marker = window.scrollY + Math.min(window.innerHeight * 0.3, 240)
            let current = items[0]?.id ?? 'top'

            for (const item of items) {
                const element = document.getElementById(item.id)
                if (!element) continue
                const top = element.getBoundingClientRect().top + window.scrollY
                if (top <= marker) current = item.id
            }

            const scrollable = document.documentElement.scrollHeight - window.innerHeight
            if (scrollable > 0 && window.scrollY >= scrollable - 8) {
                current = items[items.length - 1]?.id ?? current
            }

            setActive(current)
            setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0)
        }

        const onScroll = () => {
            if (frame) return
            frame = window.requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        window.addEventListener('load', update)

        const observer =
            typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onScroll) : null
        if (observer) observer.observe(document.body)

        return () => {
            if (frame) window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            window.removeEventListener('load', update)
            observer?.disconnect()
        }
    }, [items])

    // Escape closes the panel; on phones/tablets the drawer locks page scroll.
    useEffect(() => {
        if (!open) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }
        const isMobile = window.matchMedia('(max-width: 1365px)').matches
        const previousOverflow = document.body.style.overflow

        document.addEventListener('keydown', onKeyDown)
        if (isMobile) document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            if (isMobile) document.body.style.overflow = previousOverflow
        }
    }, [open])

    const close = () => {
        setOpen(false)
        // Returning focus to the tab keeps keyboard users oriented.
        window.requestAnimationFrame(() => tabRef.current?.focus({ preventScroll: true }))
    }

    const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault()
        setActive(id)
        setOpen(false)

        // Keep the current query string (gclid / UTMs) and only change the
        // hash, so the URL stays shareable without losing ad attribution.
        window.history.replaceState(
            null,
            '',
            `${window.location.pathname}${window.location.search}${id === 'top' ? '' : `#${id}`}`
        )

        // Wait one frame for the mobile scroll lock to be released before the
        // smooth scroll starts.
        window.requestAnimationFrame(() => {
            if (id === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    }

    const activeIndex = Math.max(0, items.findIndex((item) => item.id === active))

    return (
        <>
            {/* Collapsed tab, always reachable on every viewport. */}
            <button
                ref={tabRef}
                type='button'
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls='section-nav-panel'
                aria-label={content.trigger}
                title={content.trigger}
                className={`group fixed right-0 top-1/2 z-40 flex w-8 -translate-y-1/2 flex-col items-center gap-2 overflow-hidden rounded-l-lg border border-r-0 border-white/10 bg-[#0a0a36] py-4 text-white shadow-[0_10px_30px_rgba(10,10,54,0.28)] transition-colors hover:bg-[#1c1e8c] min-[1366px]:w-11 min-[1366px]:rounded-l-xl ${
                    open ? 'bg-[#1c1e8c]' : ''
                }`}
            >
                <span className='pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-white/10' aria-hidden='true'>
                    <span className='block w-full bg-[#5ec8ff]' style={{ height: `${progress}%` }} />
                </span>
                <List size={15} aria-hidden='true' />
                <span className='font-[family-name:var(--font-geist-mono)] text-[9px] tracking-[0.12em] text-[#5ec8ff]'>
                    {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className='hidden text-[8px] uppercase tracking-[0.22em] text-white/55 [writing-mode:vertical-rl] min-[1366px]:block'>
                    {content.title}
                </span>
            </button>

            {open && (
                <>
                    <button
                        type='button'
                        tabIndex={-1}
                        aria-label={content.close}
                        onClick={close}
                        className='fixed inset-0 z-50 cursor-default bg-[#0a0a36]/45 backdrop-blur-[2px] min-[1366px]:hidden'
                    />

                    <aside
                        id='section-nav-panel'
                        aria-labelledby='section-nav-title'
                        className='fixed inset-y-0 right-0 z-[60] flex w-[86vw] max-w-[320px] flex-col overflow-hidden bg-[#f4f1ec] shadow-[0_24px_80px_rgba(10,10,54,0.35)] min-[1366px]:inset-y-auto min-[1366px]:top-1/2 min-[1366px]:right-14 min-[1366px]:max-h-[82vh] min-[1366px]:w-[300px] min-[1366px]:-translate-y-1/2 min-[1366px]:rounded-2xl min-[1366px]:border min-[1366px]:border-[#0a0a36]/12'
                    >
                        <div className='relative shrink-0 bg-[#0a0a36] px-5 pb-5 pt-5 text-white'>
                            <p className='font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.22em] text-[#5ec8ff]'>
                                {content.subtitle}
                            </p>
                            <h2
                                id='section-nav-title'
                                className='mt-1.5 pr-10 text-[20px] font-semibold leading-[1.2] tracking-[-0.01em]'
                            >
                                {content.title}
                            </h2>
                            <button
                                type='button'
                                onClick={close}
                                aria-label={content.close}
                                autoFocus
                                className='absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/15 hover:text-white focus-visible:bg-white/15 focus-visible:text-white focus-visible:outline-none'
                            >
                                <X size={17} aria-hidden='true' />
                            </button>
                            <div className='absolute inset-x-0 bottom-0 h-[2px] bg-white/10' aria-hidden='true'>
                                <div className='h-full bg-[#5ec8ff]' style={{ width: `${progress}%` }} />
                            </div>
                        </div>

                        <nav
                            aria-label={content.title}
                            className='min-h-0 flex-1 overflow-y-auto overscroll-contain'
                        >
                            <ol className='py-2'>
                                {items.map((item, index) => {
                                    const isActive = item.id === active
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={(event) => go(event, item.id)}
                                                aria-current={isActive ? 'location' : undefined}
                                                className={`group flex items-center gap-3 border-l-2 py-3 pl-4 pr-5 transition-colors ${
                                                    isActive
                                                        ? 'border-[#0270c2] bg-white'
                                                        : 'border-transparent hover:bg-white/70'
                                                }`}
                                            >
                                                <span
                                                    className={`font-[family-name:var(--font-geist-mono)] text-[10px] ${
                                                        isActive ? 'text-[#0270c2]' : 'text-[#0a0a36]/35'
                                                    }`}
                                                >
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span
                                                    className={`text-[13px] leading-[1.35] ${
                                                        isActive
                                                            ? 'font-semibold text-[#0a0a36]'
                                                            : 'font-medium text-[#0a0a36]/65 group-hover:text-[#0a0a36]'
                                                    }`}
                                                >
                                                    {item.label}
                                                </span>
                                                <span
                                                    className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full ${
                                                        isActive
                                                            ? 'bg-[#0270c2]'
                                                            : 'bg-transparent group-hover:bg-[#0a0a36]/25'
                                                    }`}
                                                    aria-hidden='true'
                                                />
                                            </a>
                                        </li>
                                    )
                                })}
                            </ol>
                        </nav>

                        <div className='flex shrink-0 items-center justify-between border-t border-[#0a0a36]/10 px-5 py-3 font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.16em] text-[#0a0a36]/45'>
                            <span>
                                {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                            </span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                    </aside>
                </>
            )}
        </>
    )
}
