import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-pcy px-pcx bg-black w-lvw flex items-center justify-between fixed top-0 left-0 shadow-sm z-50">
      <Link href="#main" className="flex gap-3 items-center">
        <Image src="/Logo.svg" alt="logo" width={72} height={72} />
        <div>
          <h3 className="text-[2.5625rem] uppercase">GRAFIT</h3>
          <p className="uppercase tracking-[1.1875rem] text-base">Athletic</p>
        </div>
      </Link>
      <nav className="flex gap-[1.125rem]">
        <Link href="#about-us">Про нас</Link>
        <Link href="#services">Послуги</Link>
        <Link href="#reviews">Відгуки</Link>
        <Link href="#prices">Ціни</Link>
      </nav>
    </header>
  );
};

export default Header;
