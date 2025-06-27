'use client'
import Image from 'next/image';
import Head from 'next/head';
import { useTranslations } from 'next-intl'
import Script from 'next/script'
import { useEffect } from 'react'
declare let AMap: any;

export default function ContactPage() {

  useEffect(() => {
    // 初始化地图
    if (typeof AMap !== 'undefined') {
      const map = AMap.Map('map-container', {
        zoom: 17.3,
        center: [113.697378, 23.02478] // 经度, 纬度
      })

      const marker = new AMap.Marker({
        position: [113.934, 22.533],
        title: '金久自动化科技有限公司',
      })
      map.add(marker)
    }
  }, [])
  return (
    <>
      <Head>
        {/* 动态加载高德地图的JS API */}
        <script src="https://webapi.amap.com/maps?v=2.0&key=304d08b1edca59c3c1f022a9063f0e67" />
      </Head>
      {/* <Script
        src="https://webapi.amap.com/maps?v=2.0&key=304d08b1edca59c3c1f022a9063f0e67"
        strategy="afterInteractive"
      /> */}
      <div className='w-full'>
        <section className='fixed w-full z-[-1]'>
          <Image
            alt="contact"
            src="/images/contact.webp"
            width={1500}
            height={1000}
            className='w-full object-cover h-100 md:h-200'
          />
        </section>

        <div className='w-full h-90 md:h-180'>
        </div>

        <div className='bg-9 h-500'>
          <div className='max-w-main mx-auto'>

            <div id="map-container" style={{ width: '100%', height: '400px' }} />

          </div>
        </div>
      </div>
    </>
  )
}
