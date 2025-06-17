'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface AnimatedTitleProps {
    text: string;
    textColor?: string; // h1 文本颜色
    spanBgColor?: string; // span 背景颜色
}

export default function AnimatedTitle({
    text,
    textColor = 'text-white',
    spanBgColor = 'bg-5',
}: AnimatedTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className='overflow-hidden ml-l10 md:ml-l12'>
            <motion.h1
                className={`h1-title ${textColor}`}
                initial={{ opacity: 0,y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <span className={`h1-span inline-block ${spanBgColor}`}>
                    {text}
                </span>
            </motion.h1>
        </div>
    );
}
