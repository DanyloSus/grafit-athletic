"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import "./startButton.scss";

const StartButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-center gap-5 font-bold bg-green text-white w-full max-w-[163px] sm:max-w-[440px] lg:max-w-[284px] h-[40.96px] sm:h-16 text-[21.43px] sm:text-[33.49px] startButton transition-transform"
      onClick={() => {
        router.replace("/register/");
      }}
    >
      <p>Почати</p>
      <div className="arrow">
        <Image
          src="./04.svg"
          alt="arrow right"
          width={32}
          height={24}
          className="w-[20.48px] h-[15.36px] sm:w-8 sm:h-6"
        />
      </div>
    </button>
  );
};

export default StartButton;
