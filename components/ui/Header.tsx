import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="my mx sm:py-ty sm:px-tx lg:py-pcy lg:px-pcx bg-black w-lvw flex items-center justify-between fixed top-0 left-0 shadow-sm z-50">
      <Link href="#main" className="flex gap-3 items-center">
        <Image
          src="/Logo.svg"
          alt="logo"
          width={72}
          height={72}
          className="sm:w-[57.16px] sm:h-[57.16px] lg:w-[72px] lg:h-[72px]"
        />
        <div>
          <h3 className="sm:text-[32.54px] lg:text-[41px] uppercase">GRAFIT</h3>
          <p className="uppercase sm:tracking-[15.2px] lg:tracking-[19px] max-lg:text-[12.7px] text-base">
            Athletic
          </p>
        </div>
      </Link>
      <nav className="flex sm:gap-[32px] lg:gap-[18px] max-lg:text-[32px]">
        <Link href="#about-us">Про нас</Link>
        <Link href="#services">Послуги</Link>
        <Link href="#reviews">Відгуки</Link>
        <Link href="#prices">Ціни</Link>
      </nav>
    </header>
  );
};

export default Header;
