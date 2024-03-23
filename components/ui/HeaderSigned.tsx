import Image from "next/image";
import React from "react";
import SignedLink from "./SignedLink";

const HeaderSigned = () => {
  return (
    <header className="py-pcy px-pcx bg-black w-lvw flex items-center justify-between fixed top-0 left-0 shadow-sm z-50">
      <div className="flex gap-3 items-center">
        <Image src="/icons/Logo.svg" alt="logo" width={72} height={72} />
        <div>
          <h3 className="text-[2.5625rem] uppercase">GRAFIT</h3>
          <p className="uppercase tracking-[1.1875rem] text-base">Athletic</p>
        </div>
      </div>
      <nav className="flex gap-[1.125rem] items-center">
        <SignedLink link="/signed/trainers">Тренери</SignedLink>
        <SignedLink link="/signed/products">Спортивні товари</SignedLink>
        <SignedLink link="/signed/contactUs">Зв&apos;язатися з нами</SignedLink>
        <SignedLink link="/">
          <Image
            src="/icons/User.svg"
            alt="logo"
            width={52}
            height={52}
            className="w-[52px] h-[52px]"
          />
        </SignedLink>
      </nav>
    </header>
  );
};

export default HeaderSigned;
