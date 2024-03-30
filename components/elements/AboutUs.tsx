import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div
        className="sticky left-0 top-[50px] lg:top-0 w-lvw lg:w-[50vw] h-[133px] sm:h-[281px] lg:h-lvh bg-black z-[2] lg:z-[1] lg:border-b border-b-grey"
        id="about-us"
      >
        <Image
          src="/aboutUs.jpg"
          alt="man and woman in a gym"
          width={708}
          height={1024}
          className=" opacity-50  object-cover w-lvw lg:w-full  h-[133px] sm:h-[281px] lg:h-lvh max-lg:object-top"
        />
        <h2 className="absolute top-0 flex items-center justify-center w-lvw lg:w-full h-[133px] sm:h-[281px] lg:h-lvh left-0">
          Про нас
        </h2>
      </div>
      <div className="absolute top-[200vh] right-0 w-lvw border-b-2 border-b-grey z-40 h-1 hidden lg:block" />
      <section className="lg:absolute lg:-translate-y-full bg-black max-sm:min-h-[405px] max-lg:min-h-[509px]">
        <div className="lg:w-[50vw] h-auto lg:h-lvh lg:absolute right-0 top-0  flex lg:items-center lg:pr-pcx lg:pl-[22px] max-lg:text-center max-sm:max-w-[281px] max-sm:mx-auto">
          <p className="sm:text-2xl">
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
