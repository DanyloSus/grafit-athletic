//SSR because of hooks
"use client";

//import from libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

//internal imports
import { Store } from "@/modules/redux/store";
import { changeMenuState } from "@/modules/redux/hamMenu/features/hamSlice";
import Button from "../buttons/Button";

const MobileMenuSigned = () => {
  //get state of mobile menu
  const hamState = useSelector((state: Store) => state.ham);
  const dispatch = useDispatch();

  //get user's info
  const { data: session } = useSession();

  //functional to close mobile menu
  const closeMenu = () => {
    dispatch(changeMenuState());
  };

  return (
    <>
      {/* Needs for exit animation */}
      <AnimatePresence>
        {hamState ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            className="fixed top-0 left-0 overflow-y-auto w-screen h-screen z-40 bg-black pt-[150px] pb-[60px] flex flex-col items-center gap-[39px] font-dela md:hidden"
          >
            <Link
              href="#"
              className="flex flex-col gap-2 items-center"
              onClick={() => {
                signOut().finally(() => closeMenu());
              }}
            >
              <Image
                src="/User.svg"
                alt="logo"
                width={66.5}
                height={66.5}
                className="w-[66.5px] h-[66.5px]"
              />
              <h4 className="text-2xl">{session?.user.username}</h4>
            </Link>
            <div onClick={closeMenu}>
              <Button
                text="Тренери"
                type="outline"
                link="/signed/trainers"
                icon={
                  <Image
                    src="/02.svg"
                    alt="Рука допомоги"
                    width={32}
                    height={24}
                    className="w-[32px] h-[24px]"
                  />
                }
                isWhite
                anotherWay
                isSmall
              />
            </div>
            <div onClick={closeMenu}>
              <Button
                text="Товари"
                type="outline"
                link="/signed/products"
                icon={
                  <Image
                    src="/03.svg"
                    alt="Магазин"
                    width={27}
                    height={24}
                    className="w-[27px] h-[24px]"
                  />
                }
                isWhite
                anotherWay
                isSmall
              />
            </div>
            <div onClick={closeMenu}>
              <Button
                text="Зв'язатися"
                type="outline"
                link="/signed/contactUs"
                icon={
                  <Image
                    src="/01.svg"
                    alt="Дзвінок"
                    width={27}
                    height={24}
                    className="w-[27px] h-[24px]"
                  />
                }
                isWhite
                anotherWay
                isSmall
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MobileMenuSigned;
