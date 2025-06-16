import Image from "next/image";
import { useTranslations } from 'next-intl'
export default function ProductSection() {
    return (
        <>
            <div className="bg-black/90">
                <div>
                    <h1 className="h1-tittle text-white"
                    ><span className="h1-span bg-5">Products</span></h1>
                </div>

                <ul>
                    <li className="px-10 mt-10">
                        <Image
                            src="/images/profile_control.jpg"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto rounded-lg"
                        />
                        <p className="font-semibold font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">Profile control</p>
                    </li>
                    <li className="px-10 mt-10">
                        <Image
                            src="/images/lift_profile_control.jpg"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto rounded-lg"
                        />
                        <p className="font-semibold font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">Lift profile control</p>
                    </li>
                    <li className="px-10 mt-10">
                        <Image
                            src="/images/gauge.jpg"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto rounded-lg"
                        />
                        <p className="font-semibold font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">Profile measurement</p>
                    </li>
                    <li className="px-10 mt-10">
                        <Image
                            src="/images/ring_gauge.jpg"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto rounded-lg"
                        />
                        <p className="font-semibold font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">Profile measurement</p>
                    </li>
                    <li className="px-10 mt-10">
                        <Image
                            src="/images/dosing.jpg"
                            alt="solution"
                            width={1500}
                            height={1000}
                            className="m-auto w-full md:w-400 h-auto rounded-lg"
                        />
                        <p className="font-semibold font-[family-name:var(--font-Public-Sans)] text-white text-center my-5">Dosing</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
