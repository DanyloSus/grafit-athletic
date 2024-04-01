//hooks needs SSR
"use client";

//import from libraries
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

//internal imports
import { Store } from "@/modules/redux/store";
import { changeMenuState } from "@/modules/redux/hamMenu/features/hamSlice";

const HamButton = () => {
  //get state of mobile menu
  const hamState = useSelector((state: Store) => state.ham);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        //functional to close mobile menu
        dispatch(changeMenuState());
      }}
    >
      {hamState ? ( //if active
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
