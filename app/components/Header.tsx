import Link from "next/link"
import Navigation from '@/components/navigation/nav';
import Logo from '@/assets/images/logo/logo.webp';
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 z-11 w-full border-b bg-white shadow-md">
      <div className="md:w-main mx-auto h-15 md:h-19  flex items-center justify-between pl-4 ">
        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            src={Logo}
            alt="JJSK logo"
            style={{
              width: 'auto',
            }}
            className="h-11  md:h-15"
          />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
