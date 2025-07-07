'use client';

import { useEffect, useState } from 'react';

function getChromeVersion(): number | null {
    if (typeof navigator === 'undefined') return null;
    const ua = navigator.userAgent;
    const match = ua.match(/Chrom(?:e|ium)\/(\d+)\./);
    return match ? parseInt(match[1], 10) : null;
}

export default function BrowserCheck() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const version = getChromeVersion();
        if (version && version < 111) {
            setShow(true);
        }
    }, []);

    if (!show) return null;

    return (
        <div style={{ color: "#fff", position: 'fixed', width: '100vw', height: '100vh', background: "#000000CC", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
            <div>
                <h2 style={{ textAlign: "center", marginTop: "10vh", fontSize: "34px" }}>浏览器版本过低</h2>
                <p style={{ lineHeight: "60px", textAlign: "center", marginTop: "40px", fontSize: "30px" }}>
                    当前浏览器版本较低，可能无法正常浏览本站内容。<br />
                    建议您使用最新版 夸克、 Chrome、Edge 或其他现代浏览器访问本网站。
                </p>
                <div style={{ textAlign: "center"}}>
                    <button
                        style={{ cursor:"pointer", marginTop:"20px",  border:"none", padding: "10px 20px", borderRadius: "8px", textAlign: "center",  fontSize: "26px" }}
                        onClick={() => setShow(false)}
                    >
                        我知道了
                    </button>
                </div>
                <div style={{ marginTop:"50px", textAlign: "center", fontSize: "18px" }}>
                    <p style={{fontSize: "22px"}}>咨询自动风环系统</p>
                    <p>+86 186 0769 1396</p>
                    <p>+86 0769-22991396</p>

                    <p>sales@jinjiutech.com</p>
                    <p>www.jinjiutech.com</p>
                    <p>东莞市金久自动化科技有限公司</p>
                    <p></p>
                </div>
                
            </div>
        </div>
    );
}
