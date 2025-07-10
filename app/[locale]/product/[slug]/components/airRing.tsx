import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import { useTranslations } from 'next-intl'

const airRing = [
    {
        model: "JJDF-38 (FL)",
        type: "fl",
        control: "38",
        match: "ø180-320",
        isCounterFlow: "optional",
        E: "ø160",
        A: "1475",
        B: "1475",
        C: "1655",
        D: "200",
    },
    {
        model: "JJDF-48 (FL)",
        type: "fl",
        control: "48",
        match: "ø350-450",
        isCounterFlow: "optional",
        E: "ø200",
        A: "1655",
        B: "1655",
        C: "1745",
        D: "200",
    },
    {
        model: "JJDF-64 (FL)",
        type: "fl",
        control: "64",
        match: "ø500-800",
        isCounterFlow: "optional",
        E: "ø250",
        A: "1955",
        B: "1955",
        C: "1965",
        D: "200",
    },
    {
        model: "JJDF-64 (FW)",
        type: "fw",
        control: "64",
        match: "ø180-450",
        isCounterFlow: "optional",
        E: "ø200",
        A: "1655",
        B: "1655",
        C: "1745",
        D: "200",
    },
    {
        model: "JJDF-96 (FW)",
        type: "fw",
        control: "96",
        match: "ø500-800",
        isCounterFlow: "optional",
        E: "ø250",
        A: "1955",
        B: "1955",
        C: "1965",
        D: "200",
    },

]

export default function TableDemo() {
    const t = useTranslations()
    return (
        <div>
            <div className="px-5 md:px-0">
                <h1 className="text-left text-[20px] font-semibold">{t("info.detail")}</h1>
                <p className="indent-two-chars my-10 text-[16px] md:text-[18px]">
                    {t("info.more")}
                </p>
            </div>
            <Table className="border-[2px]">
                <TableHeader>
                    <TableRow className="text-semibold bg-6/70 hover:bg-6 text-white text-[18px]">
                        <TableHead className="w-[150px]">
                            {t("info.model")}
                        </TableHead>
                        <TableHead >
                            {t("info.type")}
                        </TableHead>
                        <TableHead >
                            {t("info.unit")}
                        </TableHead>
                        <TableHead>
                            {t("info.size")}
                        </TableHead>
                        <TableHead>
                            {t("info.counterFlow")}
                        </TableHead>
                        <TableHead>A</TableHead>
                        <TableHead>B</TableHead>
                        <TableHead>C</TableHead>
                        <TableHead>D</TableHead>
                        <TableHead>E</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-[16px]">
                    {airRing.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.model}</TableCell>
                            <TableCell>{t(`info.${item.type}`)}</TableCell>
                            <TableCell>{item.control}</TableCell>
                            <TableCell>{item.match}</TableCell>
                            <TableCell>{t(`info.${item.isCounterFlow}`)}</TableCell>
                            <TableCell>{item.E}</TableCell>
                            <TableCell>{item.A}</TableCell>
                            <TableCell>{item.B}</TableCell>
                            <TableCell>{item.C}</TableCell>
                            <TableCell>{item.D}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

            <div>
                <Image
                    src="/products/air_ring_size.png"
                    width={1200}
                    height={1000}
                    alt="auto air ring"
                    className="max-h-[600px] w-auto mx-auto mt-10"
                />
            </div>
        </div>
    )
}
