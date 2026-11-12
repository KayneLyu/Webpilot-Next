'use client'

import { useState } from 'react'
import CaseModal from './dialog'
import Image from 'next/image';
import { useTranslations } from 'next-intl'
export default function CaseList({ cases }: { cases: string[] }) {
    const [selected, setSelected] = useState<null | string>(null)
    const t = useTranslations('use')
    return (
        <div className='px-5'>
            <div >
                <div className='w-full cursor-pointer mx-auto max-w-180 mb-10' onClick={() => setSelected('/honor/company.png')}>
                    <Image
                        src="/honor/company.png"
                        alt="automatic air ring company"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain " />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {cases.map((item, index) => (
                    <div key={index} onClick={() => setSelected(item)} className="cursor-pointer">
                        <div className='full  relative cursor-pointer '>
                            <div className='w-full'>
                                <Image
                                    src={item}
                                    alt="automatic air ring company"
                                    width={200}
                                    height={200}
                                    className="w-full h-auto object-contain " />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selected && (
                <CaseModal
                    item={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    )
}
