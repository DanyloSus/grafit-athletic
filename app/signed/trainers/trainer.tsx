import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

type TrainerElementProps = {
  bg: string;
  img: string;
  name: string;
  text: string;
};

const TrainerElement = (props: TrainerElementProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center overflow-visible max-lg:w-[397.51px]">
        <Image
          src={`/${props.bg}.jpg`}
          alt={`Задній фон ${props.name}`}
          width={223}
          height={223}
          className="sm:w-[397.51px] sm:h-[397.51px] lg:w-[223px] lg:h-[223px] rounded-full object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover "
          style={{ width: "397.51px" }}
        />
        <Image
          src={`/${props.bg}.png`}
          alt={props.name}
          width={223}
          height={349.2}
          className="sm:h-[619.92px] lg:h-[349.2px] object-cover relative z-3 overflow-visible"
        />
      </div>
      <div className="mt-10 mb-10 gap-3 flex flex-col items-center justify-center text-center">
        <h3 className="sm:text-[46px] lg:text-[40px]">{props.name}</h3>
        <p className="text-grey max-w-[380px] text max-lg:text-[40px] max-lg:font-bold max-lg:leading-[48px]">
          {props.text}
        </p>
      </div>
      <Button
        text="Записатися"
        type="outline"
        isWhite
        link="/signed/contactUs"
        icon={<Image src="/04.svg" alt="arrow right" width={32} height={24} />}
      />
    </div>
  );
};

export default TrainerElement;
