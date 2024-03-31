"use client";

import { changeMenuState } from "@/lib/redux/hamMenu/features/hamSlice";
import { Store } from "@/lib/redux/store";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = () => {
  const hamState = useSelector((state: Store) => state.ham);
  const dispatch = useDispatch();

  console.log("MM created");

  const closeMenu = () => {
    dispatch(changeMenuState());
  };

  return (
    <>
      <AnimatePresence>
        {hamState ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            className="fixed top-0 left-0 overflow-y-auto w-screen h-screen z-30 bg-black pt-[150px] pb-[60px] flex flex-col items-center gap-[30px] font-dela"
          >
            <Link href="#about-us" className="text-5xl" onClick={closeMenu}>
              Про нас
            </Link>
            <Link href="#services" className="text-5xl" onClick={closeMenu}>
              Послуги
            </Link>
            <Link href="#reviews" className="text-5xl" onClick={closeMenu}>
              Відгуки
            </Link>
            <Link href="#prices" className="text-5xl" onClick={closeMenu}>
              Ціни
            </Link>
            <Button
              text={"Логін"}
              isSmall
              isWhite
              link="/login"
              type="solid"
              icon={
                <Image
                  src="./04.svg"
                  alt="arrow right"
                  width={32}
                  height={24}
                  className="w-[20.48px] h-[15.36px] sm:w-8 sm:h-6"
                />
              }
            />
            <Button
              text={"Реєстрація"}
              isSmall
              isWhite
              link="/login"
              type="outline"
              icon={
                <Image
                  src="./04.svg"
                  alt="arrow right"
                  width={32}
                  height={24}
                  className="w-[20.48px] h-[15.36px] sm:w-8 sm:h-6"
                />
              }
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
