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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full">
          <div className="h-full flex items-center">
            <Image src="/i18n.svg" alt="lang"
              aria-hidden
              width={20}
              height={1}
              className="h-10  md:h-15"
            />

          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p>中文</p>
          <p>English</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
