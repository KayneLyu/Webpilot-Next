'use client'
import { motion, useInView } from 'motion/react';
import { useTranslations } from 'next-intl'

export default function Slogans() {
    const slogans = [
        "s1", "s2", "s3", "s4"
    ]
    const t = useTranslations('slogan')

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2, // 每个子项依次延迟 0.2 秒
            },
        },
    }

    const itemVariants = {
        hidden: {
            width: 0,
            opacity: 0,
        },
        show: {
            width: '100%',
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
    }
    return (
        <>
            <div className="md:hidden">
                <motion.ul
                    initial="hidden"
                    variants={containerVariants}
                    animate="show"
                    className='bg-black'
                >
                    {slogans.map((slogan, index) => (
                        <motion.li key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.5 }}
                            className={ `${index ===3 ? '' : 'border-b-[3px] border-black'} flex items-center bg-7 h-21 overflow-hidden` }
                        >
                            <div className='bg-6 w-[8px] h-[60%] ml-5 rounded-2xl'></div>
                            <p className="ml-3 text-white text-start text-[22px] text-nowrap font-[family-name:var(--font-Roboto)]">{t(slogan)}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </>
    )
}