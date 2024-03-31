import Image from "next/image";
import React from "react";
import SignedLink from "./SignedLink";
import HamButton from "./HamButton";
import ClientPortal from "@/components/wrappers/Portal";
import MobileMenuSigned from "../MobileMenuSigned";

const HeaderSigned = () => {
  return (
    <header className="py-my px-mx sm:py-ty sm:px-tx lg:py-pcy lg:px-pcx bg-black w-lvw flex items-center justify-between fixed top-0 left-0 shadow-xl z-50">
      <div className="flex gap-3 items-center">
        <Image
          src="/Logo.svg"
          alt="logo"
          width={72}
          height={72}
          className="w-[54.44px] h-[54.44px] sm:w-[57.16px] sm:h-[57.16px] lg:w-[72px] lg:h-[72px]"
        />
        <div>
          <h3 className="text-[30.99px] sm:text-[32.54px] lg:text-[41px] uppercase max-sm:-mb-2">
            GRAFIT
          </h3>
          <p className="uppercase tracking-[14.44px] sm:tracking-[15.2px] lg:tracking-[19px] max-lg:text-[12.7px] max-sm:text-[12.1px] text-base">
            Athletic
          </p>
        </div>
      </div>
      <nav className="sm:gap-[22px] lg:gap-[18px] hidden md:flex items-center text-center">
        <SignedLink link="/signed/trainers">Тренери</SignedLink>
        <div className="lg:block hidden">
          <SignedLink link="/signed/products">Спортивні товари</SignedLink>
        </div>
        <div className="lg:block hidden">
          <SignedLink link="/signed/contactUs">
            Зв&apos;язатися з нами
          </SignedLink>
        </div>
        <div className="lg:hidden block">
          <SignedLink link="/signed/products">Товари</SignedLink>
        </div>
        <div className="lg:hidden block">
          <SignedLink link="/signed/contactUs">Зв&apos;язатися</SignedLink>
        </div>
        <SignedLink link="/">
          <Image
            src="/User.svg"
            alt="logo"
            width={52}
            height={52}
            className="w-[52px] h-[52px]"
          />
        </SignedLink>
      </nav>
      <div className="md:hidden">
        <HamButton />
      </div>
      <ClientPortal>
        <MobileMenuSigned />
      </ClientPortal>
    </header>
  );
};

export default HeaderSigned;
