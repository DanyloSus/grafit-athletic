import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-t-grey w-lvw h-[25.375rem] flex justify-between items-center px-pcx bg-black z-50 relative">
      <div className="flex flex-col gap-[2.1875rem]">
        <div className="flex gap-[0.9375rem] items-center">
          <Image
            src="./icons/mail.svg"
            alt="mail image"
            width={24}
            height={24}
          />
          <p>grafit@athletic.ua</p>
        </div>
        <div className="flex gap-[0.9375rem] items-center">
          <Image
            src="./icons/call.svg"
            alt="call image"
            width={24}
            height={24}
          />
          <p>+38-555-058-47-93</p>
        </div>
      </div>
      <div className="flex flex-col gap-[2.1875rem]  ">
        <div className="flex gap-[0.9375rem] items-center justify-end">
          <p>Коблевська вулиця, 39</p>
          <Image
            src="./icons/location_on.svg"
            alt="location image"
            width={24}
            height={24}
          />
        </div>
        <div className="flex gap-[0.9375rem] items-center justify-end">
          <p>Михайла Грушевського, 15а</p>
          <Image
            src="./icons/location_on.svg"
            alt="location image"
            width={24}
            height={24}
          />
        </div>
        <div className="flex gap-[0.9375rem] items-center justify-end">
          <p>Михайлівська вулиця, 44в</p>
          <Image
            src="./icons/location_on.svg"
            alt="location image"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
