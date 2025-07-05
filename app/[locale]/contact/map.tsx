'use client'
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function MapContact() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);
    const t = useTranslations();

    useEffect(() => {
        let map: any;

        async function loadMap() {
            if (typeof window === 'undefined') return;
            const AMapLoader = (await import('@amap/amap-jsapi-loader')).default;
            AMapLoader.load({
                key: '304d08b1edca59c3c1f022a9063f0e67',
                version: '2.0',
                plugins: ['AMap.Marker'],
            })
                .then((AMap) => {
                    if (mapContainer.current) {
                        map = new AMap.Map(mapContainer.current, {
                            viewMode: '2D',
                            zoom: 15,
                            center: [113.697378, 23.02478],
                        });
                        mapRef.current = map;

                        const circle = new AMap.Circle({
                            center: new AMap.LngLat("113.696936", "23.02385"),
                            radius: 20,
                            strokeColor: "#FF0012",
                            strokeOpacity: 1,
                            strokeWeight: 3,
                            fillColor: "#FF0012",
                            fillOpacity: 1,
                        });

                        const marker = new AMap.Marker({
                            content: `<div style="
                                        background: white;
                                        border: 1px solid #ccc;
                                        border-radius: 8px;
                                        padding: 5px 10px;
                                        font-size: 14px;
                                        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                                        white-space: nowrap;
                                        ">
                🚩                       ${t('company.name')}
                                     </div>`,
                            position: [113.696936, 23.02385],
                            offset: new AMap.Pixel(-80, 10),
                        });

                        map.add([circle, marker]);
                    }
                })
                .catch((e) => {
                    console.error('加载高德地图失败', e);
                });
        }

        loadMap();

        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);

    return (
        <div
            ref={mapContainer}
            className='w-full h-[500px] md:h-[650px]'
            style={{  border: '1px solid #ccc' }}
        />
    );
}
