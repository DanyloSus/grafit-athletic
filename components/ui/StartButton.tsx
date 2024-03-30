"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import "./startButton.scss";

const StartButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-center gap-5 font-bold bg-green text-white w-[440px] lg:w-[284px] h-16 text-[33.49px] startButton transition-transform"
      onClick={() => {
        router.replace("/register/");
      }}
    >
      <p>Почати</p>
      <div className="arrow">
        <Image src="./04.svg" alt="arrow right" width={32} height={24} />
      </div>
    </button>
  );
};

export default StartButton;
