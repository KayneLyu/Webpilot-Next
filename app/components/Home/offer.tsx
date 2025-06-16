import Image from "next/image";
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function OfferSection() {
    return (
        <>
            <div className="relative">
                <div className="absolute top-0 left-0 z-10">
                    <h1 className="h1-tittle text-white"
                    ><span className="h1-span bg-5">What We Offer</span></h1>
                </div>

                <div>
                    <Image
                        src="/images/offer_m.webp"
                        alt="solution"
                        width={1500}
                        height={1000}
                        className="filter brightness-40 m-auto w-full md:w-400 h-auto"
                    />
                </div>

                <div className="absolute  w-85 top-25 text-size22 left-6 text-gray-200">
                    <p className="text-start leading-9 font-[family-name:var(--font-Recursive)]">
                        We specialize in intelligent plastic film equipment, offering integrated solutions for thickness measurement, air ring control, and automation.
                    </p>
                </div>

                <div className="absolute w-full text-center bottom-15 ">
                    <Button variant="outline" size={"lg"}>
                        <Link href="/">Learn More +</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}
