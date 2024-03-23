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
      className="border-b-green cursor-pointer"
      style={{
        borderBottom: pathname === props.link ? "1px solid" : "",
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
