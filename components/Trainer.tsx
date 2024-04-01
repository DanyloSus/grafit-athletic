//import from libraries
import React from "react";
import Image from "next/image";

//internal imports
import Button from "@/ui/buttons/Button";

//trainer's props
type TrainerElementProps = {
  bg: string;
  img: string;
  name: string;
  text: string;
};

const TrainerElement = (props: TrainerElementProps) => {
  return (
    <div className="flex flex-col items-center max-lg:gap-[15px] gap-3">
      <div className="relative flex items-center justify-center overflow-visible max-sm:max-w-[207.12px] max-lg:w-[397.51px]">
        <Image
          src={`/${props.bg}.jpg`}
          alt={`Задній фон ${props.name}`}
          width={223}
          height={223}
          className="max-sm:max-w-[207.12px] max-sm:max-h-[207.12px] sm:w-[397.51px] sm:h-[397.51px] lg:w-[223px] lg:h-[223px] rounded-full object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover "
        />
        <Image
          src={`/${props.bg}.png`}
          alt={props.name}
          width={223}
          height={349.2}
          className="h-[323px]
           sm:h-[619.92px] lg:h-[349.2px] object-cover relative z-3 overflow-visible"
        />
      </div>
      <h3 className="text-[36px] sm:text-[46px] lg:text-[40px] text-center">
        {props.name}
      </h3>
      <p className="text-grey max-w-[291px] sm:max-w-[380px] text lg:text-base sm:text-[40px] sm:font-bold lg:font-medium max-lg:sm:leading-[48px] text-center">
        {props.text}
      </p>
      <div className="sm:block hidden">
        <Button
          text="Записатися"
          type="outline"
          isWhite
          link="/signed/contactUs"
          icon={
            <Image src="/04.svg" alt="arrow right" width={32} height={24} />
          }
        />
      </div>
      <div className="sm:hidden block">
        <Button
          text="Записатися"
          type="solid"
          isWhite
          isSmall
          link="/signed/contactUs"
          icon={
            <Image src="/04.svg" alt="arrow right" width={32} height={24} />
          }
        />
      </div>
    </div>
  );
};

export default TrainerElement;
