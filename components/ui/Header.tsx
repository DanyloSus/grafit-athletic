import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-pcy px-pcx bg-black w-lvw flex items-center justify-between fixed top-0 left-0 shadow-sm z-10">
      <div className="flex gap-3 items-center">
        <Image src="./icons/Logo.svg" alt="logo" width={72} height={72} />
        <div>
          <h3 className="text-[2.5625rem] uppercase">GRAFIT</h3>
          <p className="uppercase tracking-[1.1875rem] text-base">Athletic</p>
        </div>
      </div>
      <nav className="flex gap-[1.125rem]">
        <p>Про нас</p>
        <p>Послуги</p>
        <p>Відгуки</p>
        <p>Ціни</p>
      </nav>
    </header>
  );
};

export default Header;
