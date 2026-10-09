/**
 * Single source of truth for the company's public contact details.
 * Update the values here and the floating sidebar (and anything else that
 * imports this file) picks them up automatically.
 */
export const siteContact = {
    /** Sales inbox — used by the header, footer, contact page and sidebar. */
    email: 'sales@jinjiutech.com',
    whatsapp: {
        /** Digits only, international format — used to build the wa.me link. */
        number: '8618607691396',
        /** What visitors actually read on screen. */
        label: '+86 186 0769 1396',
        /**
         * Static QR code image shown in the floating sidebar.
         * It encodes WhatsApp's own short link
         * https://wa.me/message/D7D3OT2EVQMEO1?src=qr — the same destination as
         * the shop's official WhatsApp QR. Generated as a 1024px PNG with the
         * QR spec's 4-module quiet zone, so it stays scannable at the 128px it
         * is rendered at. Replace the file to switch QR codes.
         */
        qr: '/images/whatsapp_qr.png',
    },
    mobiles: [
        { label: '+86 186 0769 1396', tel: '+8618607691396' },
        { label: '+86 137 1256 7398', tel: '+8613712567398' },
    ],
    tels: [
        { label: '+86 0769-22991395', tel: '+8676922991395' },
        { label: '+86 0769-22991396', tel: '+8676922991396' },
    ],
} as const

/** Opens a WhatsApp chat with the sales team. */
export const whatsappHref = `https://wa.me/${siteContact.whatsapp.number}`

/** Opens the visitor's mail client. */
export const mailtoHref = `mailto:${siteContact.email}`
