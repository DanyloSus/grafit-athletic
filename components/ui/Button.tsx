"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type ButtonProps = {
  text: string;
  type: "outline" | "solid" | "text";
  isSmall?: boolean;
  isWhite?: boolean;
  icon?: ReactNode;
  link?: string;
  isSubmit?: boolean;
};

const Button = (props: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-5 font-bold"
      type={props.isSubmit ? "submit" : "button"}
      style={{
        background: props.type === "solid" ? "hsla(80,59%,39%,100%)" : "",
        border:
          props.type === "outline" ? "8px solid hsla(80,59%,39%,100%)" : "",
        padding: props.isSmall ? "7.5px 15px" : "10px 20px",
        fontSize: props.isSmall ? "25px" : "33px",
      }}
      onClick={() => {
        if (props.link) {
          router.replace(props.link);
        }
      }}
    >
      <p
        style={{
          color: props.isWhite ? "white" : "hsla(48,10%,10%,100%)",
        }}
      >
        {props.text}
      </p>
      <div
        style={{
          filter: `invert(${props.isWhite ? 0 : 100}%)`,
        }}
      >
        {props.icon ? props.icon : null}
      </div>
    </button>
  );
};

export default Button;
