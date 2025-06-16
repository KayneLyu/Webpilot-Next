import Image from "next/image";
import { useTranslations } from 'next-intl'
export default function SolutionSection() {
    return (
        <>
            <div>
                <div> 
                    <h1 className="h1-tittle text-white"
                    ><span className="h1-span bg-5">Solutions</span></h1>
                </div>

                <div className="mt-10">
                    <Image
                        src="/images/solution.png"
                        alt="solution"
                        width={1500}
                        height={1000}
                        className="m-auto w-full md:w-400 h-auto"
                    />
                </div>
            </div>
        </>
    )
}
