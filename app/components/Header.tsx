"use client"
import { useState } from "react"
// import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">公司LOGO</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/">首页</Link>
          <Link href="/about">关于我们</Link>
          <Link href="/products">产品</Link>
          <Link href="/contact">联系</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {/* {open ? <X /> : <Menu />} */}
        </button>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
          <Link href="/" className="block">首页</Link>
          <Link href="/about" className="block">关于我们</Link>
          <Link href="/products" className="block">产品</Link>
          <Link href="/contact" className="block">联系</Link>
        </div>
      )}
    </header>
  )
}
