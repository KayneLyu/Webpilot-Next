'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

/**
 * The visible "line footage" control. It sits in the hero copy instead of
 * floating over the background, so it is always in the first screen — including
 * phones, where the video file itself is only loaded after a tap.
 */
export default function HeroVideoTrigger({
    src,
    poster,
    alt,
    caption,
    playLabel,
    closeLabel,
}: {
    src: string
    poster: string
    alt: string
    caption: string
    playLabel: string
    closeLabel: string
}) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) return
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [open])

    return (
        <>
            <button
                type='button'
                onClick={() => setOpen(true)}
                aria-label={playLabel}
                className='group mt-10 flex cursor-pointer items-center gap-2.5 text-left'
            >
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5 transition-colors group-hover:border-white/60 group-hover:bg-white/15'>
                    <span
                        className='ml-0.5 block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white/85 transition-colors group-hover:border-l-white'
                        aria-hidden='true'
                    />
                </span>
                <span className='text-[10.5px] uppercase tracking-[0.16em] text-white/50 transition-colors group-hover:text-white/80'>
                    {caption}
                </span>
            </button>

            {open &&
                createPortal(
                    <div
                        role='dialog'
                        aria-modal='true'
                        aria-label={alt}
                        className='fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4'
                        onClick={() => setOpen(false)}
                    >
                        <button
                            type='button'
                            onClick={() => setOpen(false)}
                            aria-label={closeLabel}
                            className='absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10'
                            autoFocus
                        >
                            <X size={20} aria-hidden='true' />
                        </button>
                        <video
                            src={src}
                            poster={poster}
                            controls
                            autoPlay
                            playsInline
                            className='max-h-[82vh] w-full max-w-4xl bg-black'
                            onClick={(event) => event.stopPropagation()}
                        />
                    </div>,
                    document.body
                )}
        </>
    )
}
