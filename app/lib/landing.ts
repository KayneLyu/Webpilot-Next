/**
 * Content for the Google Ads landing page.
 *
 * Kept as a typed module instead of `messages/*.json` because this page is
 * long-form and highly structured (case metrics, spec tables, FAQ, form
 * options). One object per locale keeps every section in sync and lets the
 * page metadata read the same copy the page renders.
 *
 * Only locales listed in LP_LOCALES are published. Other locales return 404
 * from the landing layout, so a campaign never lands on a half-translated page.
 */

export const LP_LOCALES = ['en', 'zh'] as const
export type LandingLocale = (typeof LP_LOCALES)[number]

export const LANDING_PATH = '/lp/automatic-air-ring'

export function isLandingLocale(locale: string): locale is LandingLocale {
    return (LP_LOCALES as readonly string[]).includes(locale)
}

type Stat = { value: string; label: string }
type Cta = { label: string; href: string }
type SectionHead = { index: string; kicker: string; title: string; subtitle: string }

export type LandingContent = {
    meta: {
        title: string
        description: string
        keywords: string[]
    }
    header: {
        quote: string
        call: string
        switchTo: string
        switchLabel: string
        mainSite: string
    }
    hero: {
        eyebrow: string
        titleBefore: string
        titleAccent: string
        titleAfter: string
        description: string
        primary: Cta
        secondary: Cta
        link: Cta
        micro: string[]
        stats: Stat[]
        videoCaption: string
        videoAlt: string
        playLabel: string
        closeLabel: string
    }
    pains: SectionHead & {
        items: { tag: string; title: string; body: string; metric: string; metricLabel: string }[]
        footnote: string
    }
    loop: SectionHead & {
        badge: string
        steps: { tag: string; title: string; body: string; spec: string }[]
        chart: {
            title: string
            manualLabel: string
            closedLabel: string
            caption: string
        }
        note: string
    }
    products: SectionHead & {
        items: {
            tag: string
            name: string
            body: string
            specs: string[]
            image: string
            imageAlt: string
            href: string
            cta: string
        }[]
        note: string
    }
    cases: SectionHead & {
        featured: {
            tag: string
            title: string
            body: string
            metrics: { label: string; before: string; after: string; delta: string }[]
            params: { label: string; value: string }[]
            photo: string
            photoAlt: string
            photoCaption: string
            note: string
        }
        mini: { tag: string; title: string; result: string; image: string; imageAlt: string }[]
        tableHead: { metric: string; before: string; after: string; change: string }
        disclaimer: string
        cta: Cta
    }
    advantages: SectionHead & {
        items: { title: string; body: string; metric: string; metricLabel: string }[]
    }
    specs: SectionHead & {
        fit: { label: string; value: string }[]
        table: { caption: string; hint: string; columns: string[]; rows: string[][] }
        note: string
        cta: Cta
    }
    faq: SectionHead & {
        items: { q: string; a: string }[]
        note: string
        aside: { title: string; body: string; whatsapp: string; email: string }
    }
    final: {
        index: string
        kicker: string
        title: string
        body: string
        primary: Cta
        secondary: Cta
        emailLabel: string
        phoneLabel: string
        micro: string
    }
    form: SectionHead & {
        contactTitle: string
        lineTitle: string
        labels: {
            name: string
            company: string
            email: string
            phone: string
            country: string
            material: string
            width: string
            layers: string
            die: string
            deviation: string
            target: string
            output: string
            message: string
        }
        placeholders: {
            name: string
            company: string
            email: string
            phone: string
            country: string
            width: string
            die: string
            deviation: string
            target: string
            output: string
            message: string
        }
        selectPlaceholder: string
        materials: string[]
        layers: string[]
        consentBefore: string
        consentLink: string
        consentAfter: string
        submit: string
        submitting: string
        successTitle: string
        successBody: string
        successCta: string
        successAgain: string
        nextTitle: string
        next: { title: string; body: string }[]
        privacyNote: string
        error: string
        validation: { required: string; email: string; consent: string }
    }
    footer: {
        tagline: string
        company: string
        address: string
        emailLabel: string
        phoneLabel: string
        whatsappLabel: string
        mainSite: string
        caseLabel: string
        linksLabel: string
        privacy: string
        copyright: string
        backToTop: string
    }
    sticky: { quote: string; whatsapp: string }
}

const en: LandingContent = {
    meta: {
        title: 'Automatic Air Ring for Blown Film | Closed-Loop Thickness Control',
        description:
            'Retrofit your blown film line with a JINJIU automatic air ring, online thickness gauge and closed-loop controller. Hold ±2–4% thickness deviation and cut resin waste by 15–25%. Request a free line assessment.',
        keywords: [
            'automatic air ring',
            'auto air ring for blown film',
            'blown film thickness control',
            'air ring retrofit',
            'online thickness gauge',
            'film thickness uniformity',
            'JINJIU Automation',
        ],
    },
    header: {
        quote: 'Get a quote',
        call: 'Call sales',
        switchTo: '中文',
        switchLabel: 'Switch to Chinese',
        mainSite: 'Main website',
    },
    hero: {
        eyebrow: 'Automatic air ring · Blown film thickness control',
        titleBefore: 'The automatic air ring that holds film thickness to ',
        titleAccent: '±2–5%',
        titleAfter: '.',
        description:
            'Close the loop between your thickness gauge and your air ring — on the line you already run. JINJIU measures the full bubble, corrects every zone, and stops your team from running film thick just to stay in spec.',
        primary: { label: 'Get a free line assessment', href: '#quote' },
        secondary: { label: 'Chat on WhatsApp', href: 'whatsapp' },
        link: { label: 'See how the loop works', href: '#loop' },
        micro: ['Reply within 24 hours', '1–2 day retrofit', '1,000+ lines worldwide'],
        stats: [
            { value: '±2–5%', label: 'thickness deviation at 2σ' },
            { value: '15–25%', label: 'raw material saved' },
            { value: '10–20%', label: 'higher output' },
            { value: '1,000+', label: 'lines running worldwide' },
        ],
        videoCaption: 'Line footage — JINJIU automatic air ring and controller.',
        videoAlt: 'JINJIU automatic air ring running on a blown film line',
        playLabel: 'Play the line video',
        closeLabel: 'Close video',
    },
    pains: {
        index: '02',
        kicker: 'The cost of variation',
        title: 'Thickness variation is a cost, not a defect.',
        subtitle:
            'Three symptoms show up on almost every line we audit. They share one root cause: the control loop is still open.',
        items: [
            {
                tag: 'Gauge drift',
                title: 'The profile keeps moving',
                body: 'Cooling air, die temperature, screw speed and ambient conditions all push thickness around. By the time an operator spots the trend, hundreds of metres are already off target.',
                metric: '±6–10%',
                metricLabel: 'typical deviation without closed-loop control',
            },
            {
                tag: 'Manual correction',
                title: 'Someone has to chase the bubble',
                body: 'Hand valves and heater zones are adjusted by feel. The result depends on the shift, the operator and how busy the line is — and it rarely holds overnight.',
                metric: 'Shift to shift',
                metricLabel: 'the variation your customer sees',
            },
            {
                tag: 'Resin waste',
                title: 'Running thick feels safe',
                body: 'When variation is high, the safest setting is extra thickness. That resin leaves the plant as scrap, overweight rolls, or a lower yield per tonne.',
                metric: '5–15%',
                metricLabel: 'resin lost to over-thick film',
            },
        ],
        footnote:
            'If two of these sound familiar, a closed-loop retrofit usually pays for itself before the next maintenance window.',
    },
    loop: {
        index: '03',
        kicker: 'Closed-loop control',
        title: 'Measure. Decide. Correct. Every revolution.',
        subtitle:
            'A gauge on its own only tells you what went wrong. The value is in the loop that acts on it — in under a second.',
        badge: 'Loop active',
        steps: [
            {
                tag: 'Measure',
                title: 'The gauge reads the whole bubble',
                body: 'A traversing or rotary gauge scans the film circumference and sends a complete thickness profile to the controller — not a single point sample.',
                spec: '0.1 µm resolution · non-contact',
            },
            {
                tag: 'Decide',
                title: 'The controller maps the profile',
                body: 'Proprietary algorithms compare the live profile with your target, assign corrections to individual air zones, and avoid overshooting the next scan.',
                spec: '< 1 s update · self-learning',
            },
            {
                tag: 'Correct',
                title: 'The air ring adjusts itself',
                body: 'Motor-driven flaps change air volume — or air temperature — zone by zone. No heater lag, no hand valves, no operator guesswork.',
                spec: '38–96 zones · volume or temperature',
            },
        ],
        chart: {
            title: 'Same line, same resin, same target',
            manualLabel: 'Manual control',
            closedLabel: 'JINJIU closed loop',
            caption:
                'Illustrative profile from a 5-layer line. Actual results depend on die, resin and line condition.',
        },
        note: 'When the bubble drifts, the controller re-calculates and the air ring follows. The loop does not wait for the next shift.',
    },
    products: {
        index: '04',
        kicker: 'The system',
        title: 'One loop, three parts — matched by one supplier.',
        subtitle:
            'Retrofit the full set or start with the gap in your line. Every component is built to talk to the others.',
        items: [
            {
                tag: 'Actuator',
                name: 'Automatic air ring',
                body: 'Multi-zone air volume or air temperature control with motor-driven flaps and a patented valve design. This is the part that changes the film.',
                specs: ['38 / 48 / 64 / 96 zones', 'Bubble ø180–800 mm', 'Air volume or temperature'],
                image: '/products/automatic_air_ring.png',
                imageAlt: 'JINJIU automatic air ring for blown film',
                href: '/product/automatic_air_ring',
                cta: 'Air ring details',
            },
            {
                tag: 'Sensor',
                name: 'Cross-direction thickness gauge',
                body: 'Traverses the full film width on a rigid beam and streams a real-time profile to the controller. Non-contact, with an X-ray option for demanding structures.',
                specs: ['Full-width traverse', 'Optical or X-ray', '0.1 µm resolution'],
                image: '/products/Cross-Direction_Scanning_Thickness_Gauge.png',
                imageAlt: 'Cross-direction scanning thickness gauge for blown film',
                href: '/product/Cross-Direction_Scanning_Thickness_Gauge',
                cta: 'Gauge details',
            },
            {
                tag: 'Sensor',
                name: 'Rotary thickness gauge',
                body: 'A ring-scanning head follows the bubble circumference. Compact, easy to mount, and a good fit for lines with limited headroom.',
                specs: ['360° ring scan', 'Compact mount', 'Real-time feedback'],
                image: '/products/rotary_thickness_gauge.png',
                imageAlt: 'Rotary ring-scanning thickness gauge for blown film',
                href: '/product/rotary_thickness_gauge',
                cta: 'Gauge details',
            },
        ],
        note: 'Controller and HMI are included with every loop. Gravimetric dosing and loss-in-weight feeding can join the same system.',
    },
    cases: {
        index: '05',
        kicker: 'Representative projects',
        title: 'From ±8% to ±3% on the same line.',
        subtitle:
            'These are retrofits, not new lines. Customer names are omitted; the line data and results are representative of JINJIU retrofit projects.',
        featured: {
            tag: 'Project 01 · 5-layer co-extrusion · Vietnam',
            title: 'A 5-layer line that could not hold 45 µm',
            body: 'The line ran a 45 µm structure at 480 kg/h. Manual air control left the profile at ±7.8%, so operators ran 48 µm to stay in spec. After the retrofit the same line holds ±2.6% — at the original target, and faster.',
            metrics: [
                { label: 'Thickness deviation (2σ)', before: '±7.8%', after: '±2.6%', delta: '−67%' },
                { label: 'Average gauge', before: '48.0 µm', after: '45.4 µm', delta: '−5.4%' },
                { label: 'Scrap rate', before: '9.2%', after: '3.1%', delta: '−6.1 pts' },
                { label: 'Output', before: '480 kg/h', after: '545 kg/h', delta: '+13.5%' },
            ],
            params: [
                { label: 'Structure', value: '5-layer LDPE / LLDPE' },
                { label: 'Film width', value: '1,600 mm' },
                { label: 'Die diameter', value: 'ø400 mm' },
                { label: 'Target gauge', value: '45 µm' },
                { label: 'Line', value: 'Existing, installed 2016' },
            ],
            photo: '/case/automatic_air_ring_1.webp',
            photoAlt: 'Automatic air ring installed on a 5-layer blown film line',
            photoCaption: "Air ring and controller fitted to the customer's existing die.",
            note: 'No die or extruder changes. Installed during a scheduled 36-hour shutdown.',
        },
        mini: [
            {
                tag: 'Project 02 · 3-layer agricultural film · Indonesia',
                title: '2,000 mm width, ±8.5% → ±3.2%',
                result: 'Waste 11.0% → 4.5% · output +11%',
                image: '/case/air_ring2.webp',
                imageAlt: 'Automatic air ring on a 3-layer agricultural film line',
            },
            {
                tag: 'Project 03 · Single-layer shrink film · Türkiye',
                title: '25 µm thin film, ±6.9% → ±2.4%',
                result: 'Scrap 7.5% → 2.8% · output +9%',
                image: '/case/air_ring3.webp',
                imageAlt: 'Air ring retrofit on a single-layer shrink film line',
            },
        ],
        tableHead: { metric: 'Metric', before: 'Before', after: 'After', change: 'Change' },
        disclaimer:
            'Representative results from JINJIU retrofit projects. Performance depends on die, resin, cooling and line condition — we will confirm expected results for your line before you order.',
        cta: { label: 'See more case studies', href: '/case' },
    },
    advantages: {
        index: '06',
        kicker: 'Why JINJIU',
        title: 'Built for your line, not for a catalogue.',
        subtitle:
            'A retrofit has to fit what is already on your floor. That is where most projects fail — and where we spend most of our engineering time.',
        items: [
            {
                title: 'Custom-fit mechanical design',
                body: 'Adapters for your die diameter, bubble size and existing IBC. We survey the line before quoting, not after the PO.',
                metric: 'On-site',
                metricLabel: 'line survey before quote',
            },
            {
                title: 'In-house R&D and manufacturing',
                body: 'Control valves, firmware and algorithms are developed in-house, so a fix does not wait for a third-party supplier.',
                metric: '10+',
                metricLabel: 'years focused on blown film',
            },
            {
                title: 'Installation without a rebuild',
                body: 'Most retrofits are commissioned in one to two days during planned downtime. Your die and extruder stay untouched.',
                metric: '1–2',
                metricLabel: 'days on site, typical',
            },
            {
                title: 'Service after start-up',
                body: 'Remote diagnostics, spare parts and operator training. We answer within 24 hours, in English or Chinese.',
                metric: '24 h',
                metricLabel: 'response target',
            },
        ],
    },
    specs: {
        index: '07',
        kicker: 'Fit and specification',
        title: 'Will it fit your line?',
        subtitle: 'Send us these numbers and we can confirm fit — usually the same day.',
        fit: [
            { label: 'Raw material', value: 'LDPE, LLDPE, HDPE, mLLDPE, EVA, PP, PA / EVOH co-extrusion' },
            { label: 'Die diameter', value: 'ø180–800 mm (air ring size 38–96)' },
            { label: 'Film width', value: '400–3,000 mm, line dependent' },
            { label: 'Layers', value: '1–7' },
            { label: 'Film thickness', value: '10–250 µm' },
            { label: 'Measurement', value: 'Non-contact, optical or X-ray, 0.1 µm resolution' },
            { label: 'Control', value: 'Air volume (FL) or air temperature (FW), 38–96 zones' },
        ],
        table: {
            caption: 'Air ring models',
            hint: 'Swipe to see all columns',
            columns: ['Model', 'Control', 'Zones', 'Bubble Ø (mm)', 'Counter-flow'],
            rows: [
                ['JJDF-38 (FL)', 'Air volume', '38', 'ø180–320', 'Optional'],
                ['JJDF-48 (FL)', 'Air volume', '48', 'ø350–450', 'Optional'],
                ['JJDF-64 (FL)', 'Air volume', '64', 'ø500–800', 'Optional'],
                ['JJDF-64 (FW)', 'Air temperature', '64', 'ø180–450', 'Optional'],
                ['JJDF-96 (FW)', 'Air temperature', '96', 'ø500–800', 'Optional'],
            ],
        },
        note: 'Counter-flow device optional. Dimension drawings (A–E) and custom flange adapters are available on request.',
        cta: {
            label: 'Not sure which model? Send your die diameter and film width.',
            href: '#quote',
        },
    },
    faq: {
        index: '08',
        kicker: 'Questions',
        title: 'Answers before you talk to sales.',
        subtitle: 'The things buyers ask us most often, in the order they usually ask them.',
        items: [
            {
                q: 'Will it work with my existing blown film line?',
                a: 'Yes, if the line has a conventional air ring and clearance around the die. We retrofit machines from most manufacturers, including lines older than ten years. Send photos of the die area and we will confirm clearance before you commit.',
            },
            {
                q: 'Do I need to replace my die, extruder or IBC?',
                a: 'No. The air ring replaces or sits on the existing air ring, and the gauge mounts on the bubble or above the die. If you run an IBC, we coordinate both controllers instead of letting them fight each other.',
            },
            {
                q: 'How long does installation take?',
                a: 'Most projects are installed and commissioned in one to two days during planned downtime. Larger or multi-layer lines can need three to four days. Adapters are prepared in advance so the line is open for the shortest possible time.',
            },
            {
                q: 'What is the delivery time?',
                a: 'Air rings and gauges are built to order, and custom adapters or flange work add time. We confirm the lead time in writing with the quote and schedule commissioning once the equipment arrives, so the shut-down is planned around your production calendar.',
            },
            {
                q: 'What does a system cost?',
                a: 'Every quote is built around your line: bubble size, number of zones, gauge type and whether dosing is included. We do not publish a list price, because an undersized system costs more than the right one. Send your parameters for an itemised quote.',
            },
            {
                q: 'What data do you need to quote?',
                a: 'Die diameter, film width, number of layers, raw material, target thickness, output and current thickness deviation. Photos of the die and air ring help. If you do not know the deviation, we can start from a film sample.',
            },
            {
                q: 'Can it work with gravimetric dosing?',
                a: 'Yes. The controller can take dosing data and keep thickness and meter weight in one loop. Many customers add dosing after the air ring, on the same interface.',
            },
            {
                q: 'What about training and after-sales?',
                a: 'Commissioning includes operator training and a recipe handover. After start-up we support remote diagnostics, spare parts and on-site visits. Our team replies in English or Chinese within 24 hours.',
            },
        ],
        note: 'Another question? Email or message us — we answer for your line, not from a script.',
        aside: {
            title: 'Still deciding?',
            body: 'Send a photo of your die area and your current deviation. We will tell you whether a retrofit is worth it — even if the answer is no.',
            whatsapp: 'Ask on WhatsApp',
            email: 'Email engineering',
        },
    },
    form: {
        index: '09',
        kicker: 'Line assessment',
        title: 'Tell us about your line.',
        subtitle:
            'Send the key parameters and we will come back with a fit check, a model recommendation and a budget range — not a generic brochure.',
        contactTitle: 'Your contact',
        lineTitle: 'Your line',
        labels: {
            name: 'Name',
            company: 'Company',
            email: 'Email',
            phone: 'Phone / WhatsApp',
            country: 'Country',
            material: 'Raw material',
            width: 'Film width (mm)',
            layers: 'Layers',
            die: 'Die diameter (mm)',
            deviation: 'Current deviation (%)',
            target: 'Target thickness (µm)',
            output: 'Output (kg/h)',
            message: 'Anything else?',
        },
        placeholders: {
            name: 'Your name',
            company: 'Company name',
            email: 'you@company.com',
            phone: '+00 000 000 0000',
            country: 'Country / region',
            width: 'e.g. 1600',
            die: 'e.g. 400',
            deviation: 'e.g. 7.8',
            target: 'e.g. 45',
            output: 'e.g. 480',
            message: 'Target thickness, line brand, IBC, timeline…',
        },
        selectPlaceholder: 'Select',
        materials: ['LDPE', 'LLDPE', 'HDPE', 'mLLDPE', 'EVA', 'PP', 'PA / EVOH', 'Recycled / blends', 'Other'],
        layers: ['1', '2', '3', '4', '5', '6', '7'],
        consentBefore: 'I agree to the ',
        consentLink: 'Privacy Policy',
        consentAfter: ' and allow JINJIU to contact me about this inquiry.',
        submit: 'Request my line assessment',
        submitting: 'Sending…',
        successTitle: 'Request received.',
        successBody:
            'We will review your line data and reply within one business day. If you need an answer sooner, message us on WhatsApp.',
        successCta: 'Chat on WhatsApp',
        successAgain: 'Send another request',
        nextTitle: 'What happens next',
        next: [
            { title: 'Fit check', body: 'We check die, bubble and available space against your photos.' },
            {
                title: 'System sizing',
                body: 'We size the air ring, zones and gauge — and confirm expected deviation.',
            },
            {
                title: 'Itemised quote',
                body: 'You receive a quote with scope, lead time and installation plan.',
            },
        ],
        privacyNote: 'Your data is used only to answer this inquiry. No newsletter, no resale.',
        error: 'Something went wrong. Please try again, or email sales@jinjiutech.com.',
        validation: {
            required: 'Required',
            email: 'Enter a valid email',
            consent: 'Please accept the Privacy Policy to continue.',
        },
    },
    final: {
        index: '10',
        kicker: 'Next step',
        title: 'Your line is already telling you where the resin goes.',
        body: 'Send us the line data. We will show you what closed-loop control can hold — and what it can save.',
        primary: { label: 'Get a free line assessment', href: '#quote' },
        secondary: { label: 'WhatsApp us', href: 'whatsapp' },
        emailLabel: 'Or email',
        phoneLabel: 'Call',
        micro: 'No obligation · Reply within 24 hours · English or Chinese',
    },
    footer: {
        tagline: 'Closed-loop thickness control for blown film.',
        company: 'Dongguan Jinjiu Automation Technology Co., Ltd.',
        address:
            'No. 8 Hefeng Industrial Zone, Xingu Chong Management Area, Wanjiang District, Dongguan, Guangdong, China',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        whatsappLabel: 'WhatsApp',
        mainSite: 'Main website',
        caseLabel: 'Case studies',
        linksLabel: 'Links',
        privacy: 'Privacy Policy',
        copyright: '© {year} Dongguan Jinjiu Automation Technology Co., Ltd. All rights reserved.',
        backToTop: 'Back to top',
    },
    sticky: { quote: 'Free line assessment', whatsapp: 'WhatsApp' },
}

const zh: LandingContent = {
    meta: {
        title: '吹膜自动风环｜闭环厚度控制｜金久自动化',
        description:
            '为现有吹膜线加装金久自动风环、在线测厚仪与闭环控制系统：厚度偏差稳定在 ±2–4%，原料节省 15–25%，产能提升 10–20%。提交参数，免费评估产线。',
        keywords: [
            '吹膜自动风环',
            '自动风环',
            '吹膜厚度控制',
            '在线测厚仪',
            '风环改造',
            '薄膜厚度均匀性',
            '金久自动化',
        ],
    },
    header: {
        quote: '获取报价',
        call: '销售咨询',
        switchTo: 'EN',
        switchLabel: '切换到英文',
        mainSite: '返回官网',
    },
    hero: {
        eyebrow: '自动风环 · 吹膜厚度闭环控制',
        titleBefore: '把薄膜厚度稳定在 ',
        titleAccent: '±2–5%',
        titleAfter: ' 的自动风环',
        description:
            '在你现有的吹膜线上，打通测厚仪与风环之间的闭环：金久实时扫描整个膜泡，逐个风区自动修正，让操作工不必再靠“做厚一点”来保合格。',
        primary: { label: '免费评估我的产线', href: '#quote' },
        secondary: { label: 'WhatsApp 咨询', href: 'whatsapp' },
        link: { label: '看看闭环怎么工作', href: '#loop' },
        micro: ['24 小时内回复', '1–2 天完成改造', '全球 1,000+ 条产线'],
        stats: [
            { value: '±2–5%', label: '厚度偏差（2σ）' },
            { value: '15–25%', label: '原料节省' },
            { value: '10–20%', label: '产能提升' },
            { value: '1,000+', label: '全球运行产线' },
        ],
        videoCaption: '现场实拍：金久自动风环与控制系统。',
        videoAlt: '金久自动风环在吹膜产线上运行',
        playLabel: '播放现场视频',
        closeLabel: '关闭视频',
    },
    pains: {
        index: '02',
        kicker: '波动的代价',
        title: '厚度波动是成本，不是“正常现象”。',
        subtitle: '我们看过的产线里，问题几乎都逃不出这三种表现。根因只有一个：控制回路还没有闭上。',
        items: [
            {
                tag: '厚度漂移',
                title: '厚度曲线一直在跑',
                body: '冷却风、模头温度、螺杆转速、车间环境都会推动厚度变化。等操作工从屏幕上看出趋势，往往已经跑掉了几百米。',
                metric: '±6–10%',
                metricLabel: '未上闭环控制的常见偏差',
            },
            {
                tag: '人工调节',
                title: '总有人在追着膜泡跑',
                body: '手动阀和加热区全凭经验调。结果取决于班次、操作工，以及这条线当时忙不忙——夜班很难稳住。',
                metric: '班次之间',
                metricLabel: '客户能看到的一致性差异',
            },
            {
                tag: '原料浪费',
                title: '“做厚一点”最保险',
                body: '波动大时，最安全的设定就是多放一点厚度。多出来的树脂变成废料、超重卷，或者更低的吨料产出。',
                metric: '5–15%',
                metricLabel: '因偏厚流失的原料',
            },
        ],
        footnote: '如果其中两条说中了，闭环改造通常在下一次停机检修前就能回本。',
    },
    loop: {
        index: '03',
        kicker: '闭环控制原理',
        title: '测、算、调，每一圈都在发生。',
        subtitle: '单靠测厚仪，只能告诉你“已经偏了”。真正的价值在于回路——在 1 秒内完成修正。',
        badge: '闭环运行中',
        steps: [
            {
                tag: '测量',
                title: '测厚仪读取整个膜泡',
                body: '横扫或环扫测厚仪沿薄膜周向扫描，把完整的厚度曲线送给控制器，而不是一个点。',
                spec: '0.1 µm 分辨率 · 非接触',
            },
            {
                tag: '计算',
                title: '控制器把曲线分配到风区',
                body: '自研算法将实时曲线与目标值比对，把修正量分配到各个风区，并避免下一次扫描过冲。',
                spec: '＜1 秒更新 · 自学习',
            },
            {
                tag: '执行',
                title: '风环自动完成调节',
                body: '电机驱动风门，逐区改变风量（或风温）。没有加热滞后，没有手动阀，也不靠操作工猜。',
                spec: '38–96 个风区 · 风量或风温',
            },
        ],
        chart: {
            title: '同一条线，同一种料，同一个目标',
            manualLabel: '人工控制',
            closedLabel: '金久闭环',
            caption: '示意图取自 5 层产线。实际效果取决于模头、原料与产线状态。',
        },
        note: '膜泡一漂，控制器立即重算，风环随即跟上。回路不会等到下一班。',
    },
    products: {
        index: '04',
        kicker: '核心产品组合',
        title: '一个闭环，三件套，同一家供应商。',
        subtitle: '可以整套改造，也可以先补上产线最缺的那一环。每个部件都为“互相通信”而设计。',
        items: [
            {
                tag: '执行端',
                name: '自动风环',
                body: '多风区风量或风温控制，电机驱动风门，专利阀体设计。真正改变薄膜厚度的那一环。',
                specs: ['38 / 48 / 64 / 96 风区', '膜泡 ø180–800 mm', '风量或风温控制'],
                image: '/products/automatic_air_ring.png',
                imageAlt: '金久吹膜自动风环',
                href: '/product/automatic_air_ring',
                cta: '查看风环参数',
            },
            {
                tag: '检测端',
                name: '横扫测厚仪',
                body: '沿薄膜全幅宽往复扫描，把实时曲线传给控制器。非接触测量，可选 X 射线方案。',
                specs: ['全幅宽扫描', '光学或 X 射线', '0.1 µm 分辨率'],
                image: '/products/Cross-Direction_Scanning_Thickness_Gauge.png',
                imageAlt: '吹膜横扫测厚仪',
                href: '/product/Cross-Direction_Scanning_Thickness_Gauge',
                cta: '查看测厚仪参数',
            },
            {
                tag: '检测端',
                name: '环扫测厚仪',
                body: '环形扫描头跟随膜泡周向旋转，结构紧凑、安装方便，适合顶部空间有限的产线。',
                specs: ['360° 环向扫描', '紧凑安装', '实时反馈'],
                image: '/products/rotary_thickness_gauge.png',
                imageAlt: '吹膜环扫测厚仪',
                href: '/product/rotary_thickness_gauge',
                cta: '查看测厚仪参数',
            },
        ],
        note: '每个闭环都含控制器与 HMI；称重配料和失重式喂料可接入同一套系统。',
    },
    cases: {
        index: '05',
        kicker: '客户改造案例',
        title: '同一条线，从 ±8% 到 ±3%。',
        subtitle: '以下都是改造项目，不是新线。客户名称已隐去；产线参数与结果为金久项目中的代表性数据。',
        featured: {
            tag: '项目 01 · 5 层共挤 · 越南',
            title: '一条稳不住 45 µm 的 5 层线',
            body: '这条线做 45 µm 的 5 层结构，产量 480 kg/h。人工风环把厚度偏差留在 ±7.8%，操作工只能把平均厚度做到 48 µm 才敢出货。改造后同一目标下稳定在 ±2.6%，产量也上去了。',
            metrics: [
                { label: '厚度偏差（2σ）', before: '±7.8%', after: '±2.6%', delta: '−67%' },
                { label: '平均厚度', before: '48.0 µm', after: '45.4 µm', delta: '−5.4%' },
                { label: '废料率', before: '9.2%', after: '3.1%', delta: '−6.1 个百分点' },
                { label: '产量', before: '480 kg/h', after: '545 kg/h', delta: '+13.5%' },
            ],
            params: [
                { label: '结构', value: '5 层 LDPE / LLDPE' },
                { label: '幅宽', value: '1,600 mm' },
                { label: '模头直径', value: 'ø400 mm' },
                { label: '目标厚度', value: '45 µm' },
                { label: '产线', value: '2016 年投产的现有线' },
            ],
            photo: '/case/automatic_air_ring_1.webp',
            photoAlt: '安装在 5 层吹膜线上的自动风环',
            photoCaption: '风环与控制器安装在客户原有模头上。',
            note: '不改模头、不改挤出机，利用计划内的 36 小时停机完成安装。',
        },
        mini: [
            {
                tag: '项目 02 · 3 层农膜 · 印尼',
                title: '2,000 mm 幅宽，±8.5% → ±3.2%',
                result: '废料 11.0% → 4.5% · 产量 +11%',
                image: '/case/air_ring2.webp',
                imageAlt: '3 层农膜产线上的自动风环',
            },
            {
                tag: '项目 03 · 单层收缩膜 · 土耳其',
                title: '25 µm 薄膜，±6.9% → ±2.4%',
                result: '废料 7.5% → 2.8% · 产量 +9%',
                image: '/case/air_ring3.webp',
                imageAlt: '单层收缩膜产线的风环改造',
            },
        ],
        tableHead: { metric: '指标', before: '改造前', after: '改造后', change: '变化' },
        disclaimer:
            '以上为金久改造项目的代表性结果。实际表现取决于模头、原料、冷却与产线状态；下单前我们会针对你的产线确认预期。',
        cta: { label: '查看更多案例', href: '/case' },
    },
    advantages: {
        index: '06',
        kicker: '金久技术优势',
        title: '为你的产线定制，而不是卖标准品。',
        subtitle: '改造项目最难的是“装得上去”。大多数失败都发生在这里，也是我们投入工程时间最多的地方。',
        items: [
            {
                title: '定制化机械设计',
                body: '按你的模头直径、膜泡尺寸和现有 IBC 做转接件。我们先把线勘测清楚，再报价，而不是签单后才想办法。',
                metric: '现场',
                metricLabel: '报价前完成产线勘测',
            },
            {
                title: '自研自产',
                body: '控制阀、固件和算法都是自己做的。出了问题不必等第三方供应商排期。',
                metric: '10+',
                metricLabel: '年只专注吹膜',
            },
            {
                title: '不改线也能装',
                body: '大多数改造在计划停机内 1–2 天完成调试，模头和挤出机保持原样。',
                metric: '1–2',
                metricLabel: '天现场调试（典型）',
            },
            {
                title: '开机之后还在',
                body: '远程诊断、备件和操作培训。24 小时内响应，中英文都可以。',
                metric: '24 h',
                metricLabel: '响应目标',
            },
        ],
    },
    specs: {
        index: '07',
        kicker: '适配范围与技术参数',
        title: '你的产线装得上吗？',
        subtitle: '把这几个数字发给我们，通常当天就能确认。',
        fit: [
            { label: '原料', value: 'LDPE、LLDPE、HDPE、mLLDPE、EVA、PP、PA / EVOH 共挤' },
            { label: '模头直径', value: 'ø180–800 mm（风环型号 38–96）' },
            { label: '膜宽', value: '400–3,000 mm，视产线而定' },
            { label: '层数', value: '1–7 层' },
            { label: '薄膜厚度', value: '10–250 µm' },
            { label: '测量方式', value: '非接触，光学或 X 射线，0.1 µm 分辨率' },
            { label: '控制方式', value: '风量（FL）或风温（FW），38–96 个风区' },
        ],
        table: {
            caption: '自动风环型号',
            hint: '左右滑动查看完整表格',
            columns: ['型号', '控制方式', '风区数', '膜泡直径（mm）', '逆流装置'],
            rows: [
                ['JJDF-38 (FL)', '风量', '38', 'ø180–320', '可选'],
                ['JJDF-48 (FL)', '风量', '48', 'ø350–450', '可选'],
                ['JJDF-64 (FL)', '风量', '64', 'ø500–800', '可选'],
                ['JJDF-64 (FW)', '风温', '64', 'ø180–450', '可选'],
                ['JJDF-96 (FW)', '风温', '96', 'ø500–800', '可选'],
            ],
        },
        note: '逆流装置为选配；可提供 A–E 尺寸图与定制法兰转接件。',
        cta: {
            label: '不确定选哪个型号？把模头直径和膜宽发给我们。',
            href: '#quote',
        },
    },
    faq: {
        index: '08',
        kicker: '常见问题',
        title: '在联系销售之前，先把问题答完。',
        subtitle: '海外客户最常问的几件事，按他们通常提问的顺序。',
        items: [
            {
                q: '能装在我现有的吹膜线上吗？',
                a: '可以，前提是现有风环是常规结构、模头周围有安装空间。我们改造过大多数主流机型的产线，包括十年以上的老线。拍几张模头区域照片，我们会在你决定前确认空间是否够。',
            },
            {
                q: '需要换模头、挤出机或 IBC 吗？',
                a: '不需要。风环替换或叠加在原有风环上，测厚仪安装在膜泡或模头上方。如果你有 IBC，我们会让两套控制器协同，而不是互相打架。',
            },
            {
                q: '安装要多久？',
                a: '大多数项目在计划停机内 1–2 天完成安装调试；大型或多层线可能需要 3–4 天。转接件会提前做好，尽量缩短开线时间。',
            },
            {
                q: '交付周期多长？',
                a: '风环与测厚仪按订单生产，定制转接件和法兰会增加时间。交期会在报价单里书面确认；设备到厂后再安排调试，停机时间可以围绕你的生产计划来定。',
            },
            {
                q: '一套系统大概多少钱？',
                a: '报价按产线配置：膜泡尺寸、风区数量、测厚方式、是否含配料。我们没有公开价目表，因为选小了的系统比选对了更贵。把参数发来，我们给分项报价。',
            },
            {
                q: '报价需要哪些数据？',
                a: '模头直径、膜宽、层数、原料、目标厚度、产量，以及当前厚度偏差。模头和风环的照片也有帮助。如果不知道偏差，可以从一段膜样开始。',
            },
            {
                q: '能和称重配料一起用吗？',
                a: '可以。控制器可以接入配料数据，把厚度和米重放在同一个回路里。很多客户先上风环，再加配料，共用同一套界面。',
            },
            {
                q: '培训与售后怎么安排？',
                a: '调试包含操作培训和配方交接。开机后提供远程诊断、备件和上门服务，中英文 24 小时内响应。',
            },
        ],
        note: '还有别的问题？直接发邮件或 WhatsApp，我们会按你的产线回答。',
        aside: {
            title: '还在犹豫？',
            body: '发一张模头区域照片和当前偏差，我们直接告诉你值不值得改——即使答案是不值得。',
            whatsapp: 'WhatsApp 咨询',
            email: '邮件咨询工程团队',
        },
    },
    form: {
        index: '09',
        kicker: '获取定制方案',
        title: '说说你的产线。',
        subtitle: '把关键参数发来，我们回复适配判断、型号建议和预算区间，而不是一份通用画册。',
        contactTitle: '联系方式',
        lineTitle: '产线参数',
        labels: {
            name: '姓名',
            company: '公司',
            email: '邮箱',
            phone: '电话 / WhatsApp',
            country: '国家地区',
            material: '原料',
            width: '膜宽（mm）',
            layers: '层数',
            die: '模头直径（mm）',
            deviation: '当前偏差（%）',
            target: '目标厚度（µm）',
            output: '产量（kg/h）',
            message: '补充说明',
        },
        placeholders: {
            name: '你的姓名',
            company: '公司名称',
            email: 'you@company.com',
            phone: '+00 000 000 0000',
            country: '国家或地区',
            width: '如 1600',
            die: '如 400',
            deviation: '如 7.8',
            target: '如 45',
            output: '如 480',
            message: '目标厚度、设备品牌、是否有 IBC、计划时间…',
        },
        selectPlaceholder: '请选择',
        materials: ['LDPE', 'LLDPE', 'HDPE', 'mLLDPE', 'EVA', 'PP', 'PA / EVOH', '再生料 / 混配料', '其他'],
        layers: ['1', '2', '3', '4', '5', '6', '7'],
        consentBefore: '我已阅读并同意 ',
        consentLink: '隐私政策',
        consentAfter: '，并允许金久就本次询盘与我联系。',
        submit: '提交产线评估',
        submitting: '发送中…',
        successTitle: '已收到。',
        successBody: '我们会在一个工作日内查看产线数据并回复。如需更快答复，可以直接在 WhatsApp 上找我们。',
        successCta: 'WhatsApp 咨询',
        successAgain: '再提交一条',
        nextTitle: '接下来会发生什么',
        next: [
            { title: '适配判断', body: '结合照片核对模头、膜泡与安装空间。' },
            { title: '系统选型', body: '确定风环型号、风区数量与测厚方式，并确认预期偏差。' },
            { title: '分项报价', body: '给出范围、交期和安装计划。' },
        ],
        privacyNote: '你的信息只用于回复本次询盘，不会用于群发，也不会转卖。',
        error: '发送失败，请重试，或直接发邮件到 sales@jinjiutech.com。',
        validation: {
            required: '必填',
            email: '请输入有效邮箱',
            consent: '请先同意隐私政策。',
        },
    },
    final: {
        index: '10',
        kicker: '下一步',
        title: '你的产线，早就告诉了你原料从哪里流走。',
        body: '把产线数据发来，我们告诉你闭环控制能稳住多少、能省下多少。',
        primary: { label: '免费评估我的产线', href: '#quote' },
        secondary: { label: 'WhatsApp 咨询', href: 'whatsapp' },
        emailLabel: '或发邮件',
        phoneLabel: '电话',
        micro: '没有义务 · 24 小时内回复 · 中英文均可',
    },
    footer: {
        tagline: '吹膜厚度闭环控制',
        company: '东莞市金久自动化科技有限公司',
        address: '中国广东省东莞市万江街道新谷涌管理区合丰工业区 8 号',
        emailLabel: '邮箱',
        phoneLabel: '电话',
        whatsappLabel: 'WhatsApp',
        mainSite: '返回官网',
        caseLabel: '客户案例',
        linksLabel: '链接',
        privacy: '隐私政策',
        copyright: '© {year} 东莞市金久自动化科技有限公司 版权所有',
        backToTop: '回到顶部',
    },
    sticky: { quote: '免费评估', whatsapp: 'WhatsApp' },
}

const CONTENT: Record<LandingLocale, LandingContent> = { en, zh }

export function getLandingContent(locale: LandingLocale): LandingContent {
    return CONTENT[locale]
}
