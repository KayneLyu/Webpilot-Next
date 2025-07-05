// components/BackToTopButton.tsx
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={` cursor-pointer
              fixed bottom-8 right-5 md:right-10 z-50 p-3 rounded-full
              bg-5 text-white shadow-md hover:bg-gray-800
              transition-opacity duration-300
              ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            aria-label="Back to top"
        >
            <ArrowUp size={20} /> 
        </button>
    );
}
