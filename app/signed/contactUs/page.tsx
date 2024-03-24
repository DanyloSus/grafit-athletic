import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="pt-28">
      <div className="w-[50%] h-full flex flex-col gap-10 relative z-10">
        <h2 className="leading-[60px]">Зв’язатися з нами</h2>
        <div className="flex gap-[0.9375rem] items-center justify-start">
          <Image
            src="/location_on.svg"
            alt="location image"
            width={24}
            height={24}
          />
          <p>Коблевська вулиця, 39</p>
        </div>
        <div className="flex gap-[0.9375rem] items-center justify-start">
          <Image
            src="/location_on.svg"
            alt="location image"
            width={24}
            height={24}
          />
          <p>Михайла Грушевського, 15а</p>
        </div>
        <div className="flex gap-[0.9375rem] items-center justify-start">
          <Image
            src="/location_on.svg"
            alt="location image"
            width={24}
            height={24}
          />
          <p>Михайлівська вулиця, 44в</p>
        </div>
        <div className="flex gap-[0.9375rem] items-center">
          <Image src="/mail.svg" alt="mail image" width={24} height={24} />
          <p>grafit@athletic.ua</p>
        </div>
        <div className="flex gap-[0.9375rem] items-center">
          <Image src="/call.svg" alt="call image" width={24} height={24} />
          <p>+38-555-058-47-93</p>
        </div>
        <iframe
          width="577"
          height="430"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D0%BE%D0%B1%D0%BB%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,%2039,%20%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,%20%D0%9E%D0%B4%D0%B5%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%2065023+(Grafit%20Athletic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          suppressHydrationWarning
        ></iframe>
      </div>
      <div className="fixed right-0 top-0 translate-x-1/2 left-[210px]">
        <Image
          src="/images/contact.png"
          width={1511}
          height={1024}
          alt="Contact bg"
          className=" left-[210px] h-lvh w-[1511px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Page;
