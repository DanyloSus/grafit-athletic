"use client";

import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuState } from "@/lib/redux/hamMenu/features/hamSlice";
import { Store } from "@/lib/redux/store";

const HamButton = () => {
  const dispatch = useDispatch();
  const hamState = useSelector((state: Store) => state.ham);

  return (
    <button
      onClick={() => {
        console.log("Change menu state");

        dispatch(changeMenuState());
      }}
    >
      {hamState ? (
        <Image
          src="/close.svg"
          alt="Close hamburger"
          width={31.5}
          height={21}
          className="md:hidden w-[24.5px] h-[24.5px]"
        />
      ) : (
        <Image
          src="/menu.svg"
          alt="Hamburger icon"
          width={31.5}
          height={21}
          className="md:hidden sm:w-10 sm:h-10"
        />
      )}
    </button>
  );
};

export default HamButton;
