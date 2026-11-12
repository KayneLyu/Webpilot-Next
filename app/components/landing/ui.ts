/**
 * Shared landing-page styles.
 *
 * The page uses one saturated blue for actions and a navy for ink. The action
 * blue is darker than the brand's #0382E0 on purpose: white text on #0382E0 is
 * only ~3.6:1, while #0270C2 clears WCAG AA (4.5:1) at button text sizes.
 */
const FOCUS =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ec8ff] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

/** Primary action on light and dark backgrounds. */
export const btnPrimary =
    `inline-flex items-center justify-center gap-2.5 bg-[#0270c2] px-6 py-3.5 text-[15px] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#025a9c] ${FOCUS}`

/** Secondary action on a dark background. */
export const btnOnDark =
    `inline-flex items-center justify-center gap-2.5 border border-white/25 bg-white/[0.06] px-6 py-3.5 text-[15px] font-semibold leading-none text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/[0.12] ${FOCUS}`

export const sectionWrap =
    'mx-auto w-[min(calc(100%-2.5rem),1240px)] md:w-[min(calc(100%-5rem),1240px)]'
