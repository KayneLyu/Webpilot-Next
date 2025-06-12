"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
    SheetDescription
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navItems = [
    { name: "首页", href: "/" },
    { name: "公司介绍", href: "/about" },
    { name: "产品中心", href: "/products" },
    { name: "新闻资讯", href: "/news" },
    { name: "联系我们", href: "/contact" },
]

export function Navigation() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* 桌面导航 */}
            <nav className="hidden md:block">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <NavigationMenuLink asChild>
                                    <Link href={item.href}>{item.name}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button aria-label="打开菜单" className="transition duration-300 ease-in-ou">
                            <Menu size={26} className="text-primary" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[250px]">
                        <SheetHeader>
                            <SheetTitle className="text-lg font-semibold text-primary">导航菜单</SheetTitle>
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
                                    className="mb-0 w-full h-14 pl-4 flex items-center border-b border-b-neutral-100" >
                                    <Link
                                        href={item.href}
                                        className="block w-full text-base text-gray-700 hover:text-primary"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
