'use client'

import { useEffect } from 'react'

/**
 * Keep <html lang> in sync with the active locale.
 *
 * The real <html> element lives in the root layout, which is outside the
 * [locale] segment and is not re-rendered on a client-side language switch.
 * SSR sets the initial value correctly; this effect updates it when the visitor
 * changes language without a full page load.
 */
export default function LocaleHtmlLang({ locale }: { locale: string }) {
    useEffect(() => {
        document.documentElement.lang = locale
    }, [locale])

    return null
}
