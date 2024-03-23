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
    <div className="flex flex-col items-center reveal">
      <div className="relative flex items-center justify-center">
        <Image
          src={`/images/${props.bg}.jpg`}
          alt={`Задній фон ${props.name}`}
          width={223}
          height={223}
          className="w-[223px] h-[223px] rounded-full object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <Image
          src={`/images/${props.bg}.png`}
          alt={props.name}
          width={223}
          height={349.2}
          className="h-[349.2px] object-cover relative z-3"
        />
      </div>
      <div className="mt-10 mb-10 gap-3 flex flex-col items-center justify-center">
        <h3 className="text-[40px]">{props.name}</h3>
        <p className="text-grey w-[380px] text text-center">{props.text}</p>
      </div>
      <Button
        text="Записатися"
        type="outline"
        isWhite
        icon={
          <Image src="/icons/04.svg" alt="arrow right" width={32} height={24} />
        }
      />
    </div>
  );
};

export default TrainerElement;
