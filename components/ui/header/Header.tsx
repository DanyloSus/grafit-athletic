import React from "react";
import Image from "next/image";
import Link from "next/link";
import ClientPortal from "../../wrappers/Portal";
import MobileMenu from "../MobileMenu";
import HamButton from "./HamButton";

const Header = () => {
  return (
    <header className="py-my px-mx sm:py-ty sm:px-tx lg:py-pcy lg:px-pcx bg-black w-lvw flex items-center justify-between fixed top-0 left-0 shadow-xl z-50">
      <Link
        href="#main"
        className="flex gap-[9.07px] sm:gap-[9.53px] lg:gap-3 items-center"
      >
        <Image
          src="/Logo.svg"
          alt="logo"
          width={72}
          height={72}
          className="w-[54.44px] h-[54.44px] sm:w-[57.16px] sm:h-[57.16px] lg:w-[72px] lg:h-[72px]"
        />
        <div>
          <h3 className="text-[30.99px] sm:text-[32.54px] lg:text-[41px] uppercase max-sm:mb-1">
            GRAFIT
          </h3>
          <p className="uppercase tracking-[14.44px] sm:tracking-[15.2px] lg:tracking-[19px] max-lg:text-[12.7px] max-sm:text-[12.1px] text-base">
            Athletic
          </p>
        </div>
      </Link>
      <nav className=" sm:gap-[22px] lg:gap-[18px] max-lg:text-[24px] hidden md:flex">
        <Link href="#about-us">Про нас</Link>
        <Link href="#services">Послуги</Link>
        <Link href="#reviews">Відгуки</Link>
        <Link href="#prices">Ціни</Link>
      </nav>
      <div className="md:hidden">
        <HamButton />
      </div>
      <ClientPortal>
        <MobileMenu />
      </ClientPortal>
    </header>
  );
};

export default Header;
