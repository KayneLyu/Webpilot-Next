import Link from "next/link"
import Navigation from '@/components/navigation/nav';
import Logo from '@/assets/images/logo/logo.webp';
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white fixed top-0 z-11 w-full border-b shadow-md">
      <div className=" max-w-main mx-auto h-15 md:h-[120px]  flex items-center justify-between pl-4 ">
        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            src={Logo}
            alt="JJSK logo"
            style={{
              width: 'auto',
            }}
            className="h-11  md:h-22"
          />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
