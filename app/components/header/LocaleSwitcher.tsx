import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import LangSwitcher from './LanguageSwitcher';

export default function LocaleSwitcher() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full">
          <div className="h-full flex items-center">
            <Image src="/i18n.svg" alt="lang"
              aria-hidden
              width={24}
              height={40}
              className="h-10 md:h-15 ml-4"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-black/5">
          <LangSwitcher />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
