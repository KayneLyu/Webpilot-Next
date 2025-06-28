'use client'
import { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import MiniIcon from '@/assets/images/logo/mini.png';
import { useTranslations } from 'next-intl'

export default function MapContact() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null); // 保存地图实例
    const t = useTranslations()
    useEffect(() => {
        let map: any;
        if (typeof window !== "undefined") {
            AMapLoader.load({
                key: '304d08b1edca59c3c1f022a9063f0e67', // 🔑替换成你自己的
                version: '2.0',
                plugins: ['AMap.Marker'], // 如果需要更多插件在这里添加
            })
                .then((AMap) => {
                    if (mapContainer.current) {
                        map = new AMap.Map(mapContainer.current, {
                            viewMode: '2D',
                            zoom: 15,
                            center: [113.697378, 23.02478]
                        });
                        mapRef.current = map;

                        // const text = new AMap.Text({
                        //     text: '东莞金久自动化科技有限公司',
                        //     position: [113.696936, 23.02385],
                        //     style: {
                        //       background: 'white',
                        //       border: 'none',
                        //       color: '#1C1E86',
                        //       fontSize: '14px',
                        //       padding: "5px"
                        //     },
                        //     offset: new AMap.Pixel(0, -30), // 向上偏移，避免遮挡 marker
                        //   });

                        const circle = new AMap.Circle({
                            center: new AMap.LngLat("113.696936", "23.02385"), //圆心位置
                            radius: 20, //半径 单位:米
                            strokeColor: "#FF0012", //线颜色
                            strokeOpacity: 1, //线透明度
                            strokeWeight: 3, //线粗细度
                            fillColor: "#FF0012", //填充颜色
                            fillOpacity: 1, //填充透明度
                        });
                        let marker = new AMap.Marker({
                            content: `<div style="
                                        background: white;
                                        border: 1px solid #ccc;
                                        border-radius: 8px;
                                        padding: 5px 10px;
                                        font-size: 14px;
                                        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                                        white-space: nowrap;
                                      ">
                                        🚩 ${t('company.name')}
                                      </div>
                                    `,
                            position: [113.696936, 23.02385], // 位置
                            offset: new AMap.Pixel(-80, 10)
                        })
                        map.add([circle, marker]);
                    }

                })
                .catch((e) => {
                    console.error('加载高德地图失败', e);
                });
        }

        return () => {
            if (map) {
                map.destroy(); // 清理地图实例
            }
        };
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}
        />
    );
}
