import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="pt-[89px] sm:pt-28 relative max-sm:min-h-full max-lg:min-h-screen w-screen overflow-hidden">
      <div className=" lg:max-w-[780px] h-full flex flex-col sm:gap-10 relative z-10 max-lg:justify-between">
        <div className="flex flex-col gap-10">
          <h2 className="max-sm:text-center leading-[50px] sm:leading-[100px] lg:leading-[60px] max-sm:max-w-full max-lg:max-w-[780px]">
            Зв’язатися з нами
          </h2>
          <div className="flex flex-col-reverse sm:flex-row-reverse lg:flex-col justify-between max-sm:items-start max-lg:items-center max-sm:gap-[23px] lg:gap-10">
            <div className="flex flex-col gap-[15px] max-sm:gap-[8px] lg:gap-10">
              <div className="flex gap-[0.9375rem] items-center lg:justify-start max-lg:flex-row-reverse max-sm:flex-row">
                <Image
                  src="/location_on.svg"
                  alt="location image"
                  width={24}
                  height={24}
                />
                <a href="https://www.google.com.ua/maps/place/%D0%9A%D0%BE%D0%B1%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+39,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4846037,30.726163,17z/data=!3m1!4b1!4m6!3m5!1s0x40c631943a34cd8f:0x4877c489f26b0a6!8m2!3d46.4846!4d30.7287379!16s%2Fg%2F1tcvglmc?hl=ru&entry=ttu">
                  Коблевська вулиця, 39
                </a>
              </div>
              <div className="flex gap-[0.9375rem] items-center justify-start max-lg:flex-row-reverse max-sm:flex-row">
                <Image
                  src="/location_on.svg"
                  alt="location image"
                  width={24}
                  height={24}
                />
                <a href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%B0+%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+15%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4800313,30.6882854,17z/data=!3m1!4b1!4m6!3m5!1s0x40c631f8c33842d9:0x39fbd91a8cba0260!8m2!3d46.4800276!4d30.6908603!16s%2Fg%2F11cpfd1dtx?hl=ru&entry=ttu">
                  Михайла Грушевського, 15а
                </a>
              </div>
              <div className="flex gap-[0.9375rem] items-center justify-start max-lg:flex-row-reverse max-sm:flex-row">
                <Image
                  src="/location_on.svg"
                  alt="location image"
                  width={24}
                  height={24}
                />
                <a href="https://www.google.com.ua/maps/place/%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+44%D0%B2,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4625651,30.7082495,17z/data=!3m1!4b1!4m6!3m5!1s0x40c6322538aa9615:0xc4909f0a984bda87!8m2!3d46.4625614!4d30.7108244!16s%2Fg%2F11qg5hn3jd?hl=ru&entry=ttu">
                  Михайлівська вулиця, 44в
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[35px] max-sm:gap-[13px] lg:gap-10">
              <div className="flex gap-[0.9375rem] items-center">
                <Image
                  src="/mail.svg"
                  alt="mail image"
                  width={24}
                  height={24}
                />
                <a href="mailto:grafit@athletic.ua">grafit@athletic.ua</a>
              </div>
              <div className="flex gap-[0.9375rem] items-center">
                <Image
                  src="/call.svg"
                  alt="call image"
                  width={24}
                  height={24}
                />
                <a href="tel:+385550584793">+38-555-058-47-93</a>
              </div>
            </div>
          </div>
        </div>
        <iframe
          width="577"
          height="430"
          className="rounded-lg max-sm:mt-4 max-sm:mb-0 max-lg:mb-[167px] max-w-[272px] max-sm:h-[201px] sm:max-w-[577px] w-full"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D0%BE%D0%B1%D0%BB%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,%2039,%20%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,%20%D0%9E%D0%B4%D0%B5%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%2065023+(Grafit%20Athletic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          suppressHydrationWarning
        ></iframe>
      </div>
      <div className="fixed right-0 top-0 translate-x-1/2 left-[210px] hidden sm:block">
        <Image
          src="/contact.png"
          width={1511 / 1.5}
          height={1024 / 1.5}
          alt="Contact bg"
          className="relative max-lg:translate-y-[40%] max-lg:-translate-x-1/2 right-[-209px] lg:right-[109px] h-lvh min-w-[1511px] object-cover object-left z-10 max-lg:overflow-visible"
        />
        <div className="relative h-lvh bg-[#BDC3C7] w-1/2 -translate-y-full z-[5] translate-x-1/2 left-32 max-lg:hidden" />
        <Image
          src="/contact.jpg"
          width={1511}
          height={1024}
          alt="Contact bg"
          className="relative max-lg:-translate-y-[45%] bottom-[150px] max-lg:-translate-x-1/2 left-[250px] lg:left-[100px] h-lvh w-[1511px] object-cover object-left -translate-y-[200%]"
        />
      </div>
      <Image
        src="/contact.png"
        width={500}
        height={500}
        alt="Contact bg"
        className="absolute bottom-0 z-10 right-0 translate-x-1/2 translate-y-1/4 h-[278px] overflow-visible object-cover sm:hidden"
      />
    </section>
  );
};

export default Page;
