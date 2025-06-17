import Link from "next/link"
import Navigation from '@/components/navigation/nav';
import Logo from '@/assets/images/logo/logo.webp';
import Image from "next/image";

export function Header() {

  return (
    <header className="sticky w-full border-b bg-white shadow-md">
      <div className="h-14 md:h-19 container mx-auto flex items-center justify-between px-4 ">
        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            src={Logo}
            alt="JJSK logo"
            style={{
              width: 'auto',
            }}
            className="h-10  md:h-15"
          />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}
