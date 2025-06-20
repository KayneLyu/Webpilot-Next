'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from "@/components/ui/button"
import SectionTittle from '@/components/common/Section-title';
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function OfferSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const t = useTranslations('home')
    return (
        <>
            <div className="relative">
                <div className="absolute top-0 left-0 z-10">
                    <SectionTittle text={t("service")}/>
                </div>

                <div>
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet="/images/offer_pc.webp"
                        />
                        <source
                            media="(max-width: 1023px)"
                            srcSet="/images/offer_m.webp"
                        />
                        <img
                            src="/images/offer_m.webp"
                            alt="solutions"
                            className="w-full object-cover filter brightness-50"
                        />
                    </picture>
                </div>

                <div ref={ref} className="absolute  w-[90%] top-1/6 md:top-1/4 text-size22 left-1/10 md:left-1/8 text-gray-200 md:w-[80%] lg:w-[45%] lg:text-[40px] md:text-[30px]">
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                        className="text-start leading-9 md:leading-[80px] font-[family-name:var(--font-Recursive)]">
                        {t("offer")}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                    >
                        <Button className="mt-5" variant="secondary" size={"lg"}>
                            <Link href="/">{t("more")} +</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
