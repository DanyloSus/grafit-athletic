import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div
        className="sticky left-0 top-0 w-[50vw] h-lvh bg-black z-1"
        id="about-us"
      >
        <Image
          src="/aboutUs.jpg"
          alt="man and woman in a gym"
          width={708}
          height={1024}
          className=" opacity-50  object-cover w-[50vw] h-lvh"
        />
        <h2 className="absolute top-0 flex items-center justify-center h-lvh max-w-[50vw] w-full left-0 ">
          Про нас
        </h2>
      </div>
      <section className="absolute -translate-y-full">
        <div className="w-[50vw] h-lvh absolute right-0 top-0 bg-black flex items-center pr-pcx pl-[22px]">
          <p className="text-2xl">
            Наш фітнес-центр Grafit Athletic - це не лише місце для занять
            спортом, але й цілий світ фізичного здоров&apos;я та емоційного
            благополуччя. У нашому <b>застосунку</b> ви знайдете{" "}
            <b>зручну карту</b>, щоб легко знаходити найближчі зали, оглянете{" "}
            <b>профілі наших тренерів</b>, щоб обрати того, хто найбільше
            відповідає вашим потребам, та ознайомитесь з{" "}
            <b>широким спектром послуг</b>, які ми пропонуємо. Наша мета -
            надихати вас на досягнення нових висот у <b>фітнесі</b> та
            допомагати кожному клієнту зробити{" "}
            <b>крок до кращого самопочуття та здоров&apos;я</b>.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
