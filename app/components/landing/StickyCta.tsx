import type { LandingContent } from '@/lib/landing'
import { whatsappHref } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * Mobile-only action bar. On phones the form is several screens away; this
 * keeps a quote and a WhatsApp chat one thumb-tap from anywhere on the page.
 */
export default function StickyCta({ content }: { content: LandingContent['sticky'] }) {
    return (
        <div className='fixed inset-x-0 bottom-0 z-50 border-t border-[#0a0a36]/10 bg-[#f4f1ec]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden'>
            <div className='flex gap-2.5'>
                <a
                    href={whatsappHref}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-1 items-center justify-center gap-2 whitespace-nowrap bg-[#0f7a40] px-3 py-3.5 text-[14px] font-semibold text-white'
                >
                    <WhatsAppIcon className='h-[18px] w-[18px]' />
                    {content.whatsapp}
                </a>
                <a
                    href='#quote'
                    className='flex flex-[1.4] items-center justify-center gap-2 whitespace-nowrap bg-[#0270c2] px-3 py-3.5 text-[14px] font-semibold text-white'
                >
                    {content.quote}
                </a>
            </div>
        </div>
    )
}
