"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
import { AlignJustify } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
    SheetDescription
} from "../ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu"
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { cn } from "@/lib/utils" // shadcn 提供的合并类名工具
import LanguageComponent from '@/components/common/Language';
import EmailAddress from '@/components/common/EAddress';
export default function Navigation() {
    const t = useTranslations('nav')
    const pathname = usePathname()
    const locale = useLocale()
    // 去掉语言前缀后的路径
    const logicalPath = pathname.replace(`/${locale}`, '') || '/'
    const navItems = [
        { name: "home", href: "/" },
        { name: "about", href: "/about" },
        { name: "product", href: "/product" },
        { name: "case", href: "/case" },
        { name: "news", href: "/news" },
        { name: "contact", href: "/contact" },
    ]

    const [open, setOpen] = useState(false)


    return (
        <>
            {/* 桌面导航 */}
            <nav className="hidden md:block  ">
                <div className="flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <div>
                                <div className="my-3 flex justify-end">
                                    <div className="ml-10">
                                        <EmailAddress variant={true} />
                                    </div>
                                    <div>
                                        <LanguageComponent />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    {navItems.map((item) => {
                                        const isActive =
                                            item.href === '/'
                                                ? logicalPath === '/'
                                                : logicalPath.startsWith(item.href)

                                        return (
                                            <NavigationMenuItem key={item.href} >
                                                <NavigationMenuLink asChild className={cn(
                                                    "transition-colors",
                                                    isActive
                                                        ? "bg-accent text-primary font-semibold"
                                                        : "text-muted-foreground"
                                                )}  >
                                                    <Link href={item.href} locale={locale} className=" uppercase font-semibold font-[family-name:var(--font-Roboto-Condensed)] text-[18px] py-2 px-2"> {t(`${item.name}`)}</Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        )
                                    }
                                    )}
                                </div>

                            </div>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
            </nav>

            {/* 移动端菜单按钮 */}
            <div className="flex items-center md:hidden h-full">
                <LanguageComponent />
                <EmailAddress variant={true} />
                <div className="h-full w-16 ">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <div className="h-full w-full flex justify-center items-center">
                                <AlignJustify color="#1C1E87" size={34} className="text-primary" />
                            </div>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-9 w-[250px]">
                            <SheetHeader>
                                <SheetTitle className="text-lg font-semibold text-3">{t('menu')}</SheetTitle>
                                <SheetDescription></SheetDescription>
                            </SheetHeader>
                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } },
                                    hidden: {},
                                }}
                                className="space-y-4">
                                {navItems.map((item) => (
                                    <motion.li
                                        variants={{
                                            hidden: { opacity: 0, x: -80 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        transition={{ duration: 0.5 }}
                                        key={item.href}
                                        className="font-[family-name:var(--font-Roboto-Condensed)]  mb-0 w-full h-14 pl-4 flex items-center border-b border-8" >
                                        <Link
                                            href={item.href}
                                            locale={locale}
                                            className="uppercase block w-full text-[18px] text-3 hover:text-primary"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t(item.name)}
                                        </Link>
                                    </motion.li>
                                ))}
                                {/* <motion.li
                                    variants={{
                                        hidden: { opacity: 0, x: -80 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-0 w-full flex items-center border-b border-8" >
                                    <LangSwitcher />
                                </motion.li> */}
                            </motion.ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div >
        </>
    )
}
