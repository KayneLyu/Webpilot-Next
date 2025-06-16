import Image from "next/image";
import { useTranslations } from 'next-intl'
export default function ProductSection() {
    return (
        <>
            <div className="bg-black">
                <div>
                    <h1 className="h1-tittle text-white"
                    ><span className="h1-span bg-5">Products</span></h1>
                </div>

                <ul>
                    <li>
                        <Image
                            src="/images/solution.png"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto"
                        />
                    </li>
                    <li>
                        <Image
                            src="/images/solution.png"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto"
                        />
                    </li>
                    <li>
                        <Image
                            src="/images/solution.png"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto"
                        />
                    </li><li>
                        <Image
                            src="/images/solution.png"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto"
                        />
                    </li><li>
                        <Image
                            src="/images/solution.png"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto"
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}
