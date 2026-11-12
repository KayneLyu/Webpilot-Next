import Image from 'next/image'

/**
 * Hero background media: a still poster on phones (fast LCP), the muted loop on
 * desktop. Playback controls live in HeroVideoTrigger, not here.
 */
export default function HeroMedia({
    src,
    poster,
    alt,
}: {
    src: string
    poster: string
    alt: string
}) {
    return (
        <>
            <Image src={poster} alt='' fill priority sizes='100vw' className='object-cover md:hidden' />
            <video
                className='hidden h-full w-full object-cover md:block'
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                poster={poster}
                aria-label={alt}
                tabIndex={-1}
            >
                <source src={src} type='video/mp4' />
            </video>
        </>
    )
}
