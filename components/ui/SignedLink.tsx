"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type SignedLinkProps = {
  children: ReactNode;
  link: string;
};

const SignedLink = (props: SignedLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <p
      className=" max-lg:text-[22px] cursor-pointer"
      style={{
        borderBottom:
          pathname === props.link ? "3px solid hsla(80,59%,39%,100%)" : "",
      }}
      onClick={() => {
        router.replace(props.link);
      }}
    >
      {props.children}
    </p>
  );
};

export default SignedLink;
