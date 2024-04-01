//SSR because of hooks
"use client";

//import from libraries
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

//props for the active link
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
          //check is link active
          pathname === props.link ? "3px solid hsla(80,59%,39%,100%)" : "",
      }}
      onClick={() => {
        //go to another page
        router.replace(props.link);
      }}
    >
      {props.children}
    </p>
  );
};

export default SignedLink;
