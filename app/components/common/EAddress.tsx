"use client"
import { Mail } from "lucide-react"

export default function Email({
    variant = false
}) {
    const mailtoLink = `mailto:sales@jinjiutech.com`;
    if(variant) {
        return (
            <a href={mailtoLink} className="block w-[36px] rounded-[50%] p-[6px] border-[1px] border-4">
                {/* <a href={mailtoLink} className=" cursor-pointer  border-4 font-bold"> */}
                    <Mail size={22} color="#1C1E87"/>
                {/* </a> */}
            </a>
        )
    }

    return (
        <>
            <div>
                <a href={mailtoLink} className="cursor-pointer underline font-bold">sales@jinjiutech.com</a>
            </div>
        </>
    )
}
