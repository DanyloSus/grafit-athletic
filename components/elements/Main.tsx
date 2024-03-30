import React from "react";
import Image from "next/image";
import StartButton from "../ui/StartButton";

const Main = () => {
  return (
    <section className="flex items-center" id="main">
      <Image
        src="/BG_Main.jpg"
        alt="black and white background image of dumbbell"
        width={1816}
        height={1024}
        className="h-lvh w-[1816px] object-cover fixed top-0 left-0 -z-[1]"
      />
      <div className="flex flex-col lg:items-start items-center gap-[58px] lg:max-w-[712px] w-full relative z-[1] ">
        <h1 className="text-[102.46px] leading-[100px] hidden lg:block">
          Ви з<br />
          Grafit
          <br />
          Athletic!
        </h1>
        <h1 className="text-[80px] leading-[100px] lg:hidden block text-center">
          Ви з<br />
          Grafit Athletic!
        </h1>
        <p className="lg:text-[21.74px] text-[32px] w-[712px] lg:w-auto max-lg:text-center max-lg:font-bold max-lg:leading-[40px] tracking-wide">
          Відкрийте нові горизонти з нашим фітнес-центром. Приєднуйтесь сьогодні
          та досягайте більше!
        </p>
        <StartButton />
      </div>
    </section>
  );
};

export default Main;
