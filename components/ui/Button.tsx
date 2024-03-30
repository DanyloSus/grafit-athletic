"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import "./button.scss";

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
      className="flex items-center gap-5 font-bold transition-all hover:scale-110 hover:bg-green"
      type={props.isSubmit ? "submit" : "button"}
      style={{
        background: props.type === "solid" ? "hsla(80,59%,39%,100%)" : "",
        outline:
          props.type === "outline" ? "8px solid hsla(80,59%,39%,100%)" : "",
        outlineOffset: "-8px",
        padding: props.isSmall ? "7.5px 15px" : "7px 15px",
        fontSize: props.isSmall ? "25.12px" : "33.49px",
      }}
      onClick={() => {
        if (props.link) {
          router.replace(props.link);
        }
      }}
    >
      <span
        style={{
          color: props.isWhite ? "white" : "hsla(48,10%,10%,100%)",
        }}
      >
        {props.text}
      </span>
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
