'use client'

import { useState } from 'react'
import CaseModal from '@/components/common/CaseModal'
import Image from 'next/image';
import { CirclePlay } from "lucide-react"
import { useTranslations } from 'next-intl'
export default function CaseList({ cases }: { cases: ICaseList[] }) {
  const [selected, setSelected] = useState<null | ICaseList>(null)
  const t = useTranslations('use')
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map(item => (
          <div key={item.id} onClick={() => setSelected(item)} className="cursor-pointer">
            <div className='full group  relative cursor-pointer rounded-2xl overflow-hidden'>
              <div className='w-full h-100 group-hover:scale-115 transition duration-300 ease-in-out'>
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover " />
                ) : (
                  <div className='w-full h-full'>
                    <Image
                      src={item.poster!}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover filter brightness-60" />
                    <div className='absolute left-0 top-0 flex justify-center items-center w-full h-full '>
                      <CirclePlay size={60} color='#fff' />
                    </div>
                  </div>
                )}
              </div>
              <div className='flex justify-center items-end case-info text-white absolute bottom-0 left-0  w-full h-[40%]  transition-all duration-300 ease-in'>
                <p className='px-3 mb-5 text-2xl transition-all duration-300 ease-in'>{t(item.title)}</p>
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
    </>
  )
}
