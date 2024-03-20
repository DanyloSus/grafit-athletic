import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Main = () => {
  return (
    <div className="flex h-lvh w-lvw items-center px-pcx">
      <Image
        src="/images/BG_Main.jpg"
        alt="black and white background image of dumbbell"
        width={1816}
        height={1024}
        className="h-[1024px] w-[1816px] object-cover fixed top-0 left-0 -z-10"
      />
      <div className="flex flex-col items-start gap-[3.625rem] w-[712px]">
        <h1 className="text-[102.46px] leading-[100px]">
          Ви з<br />
          Grafit
          <br />
          Athletic!
        </h1>
        <p>
          Відкрийте нові горизонти з нашим фітнес-центром. Приєднуйтесь сьогодні
          та досягайте більше!
        </p>
        <Button
          text="Почати"
          isWhite
          type="solid"
          icon={
            <Image
              src="./icons/04.svg"
              alt="arrow right"
              width={32}
              height={24}
            />
          }
        />
      </div>
    </div>
  );
};

export default Main;
