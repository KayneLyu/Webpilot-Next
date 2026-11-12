import { ArrowDown, Check } from 'lucide-react'

import type { LandingContent } from '@/lib/landing'
import { whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'
import HeroMedia from './HeroMedia'
import HeroVideoTrigger from './HeroVideoTrigger'
import { btnOnDark, btnPrimary, sectionWrap } from './ui'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * 01 — Hero.
 *
 * One promise, one primary action, one proof strip. Desktop autoplays the line
 * footage; phones load only the poster and open the video from the caption
 * control, keeping the LCP light on mobile networks where most ad clicks land.
 */
export default function Hero({ content }: { content: LandingContent['hero'] }) {
    return (
        <section id='top' aria-labelledby='hero-title' className='relative isolate overflow-hidden bg-[#07072a] text-white'>
            <div className='absolute inset-0'>
                <HeroMedia
                    src='/case/automatic_air_ring_video1.mp4'
                    poster='/case/automatic_air_ring_1.webp'
                    alt={content.videoAlt}
                />
                <div className='absolute inset-0 bg-[linear-gradient(100deg,#07072a_8%,rgba(7,7,42,0.9)_46%,rgba(7,7,42,0.58)_100%)]' />
                <div className='lp-blueprint absolute inset-0 opacity-25' />
                <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07072a] to-transparent' />
            </div>

            <div className={`${sectionWrap} relative flex min-h-[600px] flex-col justify-center pb-12 pt-16 md:min-h-[620px] md:pb-10 md:pt-16`}>
                <p className='lp-rise flex items-center gap-2.5 font-[family-name:var(--font-geist-mono)] text-[10.5px] uppercase tracking-[0.24em] text-white/70 sm:text-[11.5px]'>
                    <span className='relative flex h-1.5 w-1.5'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ec8ff] opacity-75 motion-reduce:animate-none' />
                        <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5ec8ff]' />
                    </span>
                    {content.eyebrow}
                </p>

                <h1
                    id='hero-title'
                    className='lp-rise lp-rise-1 mt-6 max-w-[19ch] text-balance text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[52px] md:max-w-[18ch] md:text-[66px] xl:text-[74px]'
                >
                    {content.titleBefore}
                    <span className='text-[#5ec8ff]'>{content.titleAccent}</span>
                    {content.titleAfter}
                </h1>

                <p className='lp-rise lp-rise-2 mt-7 max-w-xl text-pretty text-[15px] leading-[1.7] text-white/70 md:text-[16.5px]'>
                    {content.description}
                </p>

                <div className='lp-rise lp-rise-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center'>
                    <a href={content.primary.href} className={btnPrimary}>
                        {content.primary.label}
                    </a>
                    <a
                        href={whatsappHref}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={cn(btnOnDark, 'border-transparent bg-[#0f7a40] hover:bg-[#0b6434]')}
                    >
                        <WhatsAppIcon className='h-[17px] w-[17px]' />
                        {content.secondary.label}
                    </a>
                </div>

                <div className='lp-rise lp-rise-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[12px] text-white/60'>
                    {content.micro.map((item) => (
                        <span key={item} className='flex items-center gap-1.5'>
                            <Check size={13} className='text-[#5ec8ff]' aria-hidden='true' />
                            {item}
                        </span>
                    ))}
                    <a
                        href={content.link.href}
                        className='flex items-center gap-1.5 text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white'
                    >
                        {content.link.label}
                        <ArrowDown size={13} aria-hidden='true' />
                    </a>
                </div>

                <HeroVideoTrigger
                    src='/case/automatic_air_ring_video1.mp4'
                    poster='/case/automatic_air_ring_1.webp'
                    alt={content.videoAlt}
                    caption={content.videoCaption}
                    playLabel={content.playLabel}
                    closeLabel={content.closeLabel}
                />
            </div>

            <div className={`${sectionWrap} relative`}>
                <dl className='grid grid-cols-2 border-t border-white/15 md:grid-cols-4'>
                    {content.stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={[
                                'py-5',
                                index % 2 === 1 ? 'border-l border-white/10 pl-5 md:pl-6' : 'pr-4',
                                index > 1 ? 'border-t border-white/10 md:border-t-0' : '',
                                index > 0 ? 'md:border-l md:border-white/10 md:pl-6' : '',
                            ].join(' ')}
                        >
                            <dt className='sr-only'>{stat.label}</dt>
                            <dd>
                                <span className='block font-[family-name:var(--font-geist-mono)] text-[26px] leading-none text-white md:text-[34px]'>
                                    {stat.value}
                                </span>
                                <span className='mt-2.5 block text-[10.5px] uppercase leading-[1.4] tracking-[0.14em] text-white/55'>
                                    {stat.label}
                                </span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
