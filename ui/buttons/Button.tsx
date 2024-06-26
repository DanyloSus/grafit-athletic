//router needs SSR
"use client";

//import from libraries
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

//internal imports
import "./button.scss";

//button props
type ButtonProps = {
  text: string;
  type: "outline" | "solid" | "text";
  isSmall?: boolean;
  isWhite?: boolean;
  anotherWay?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  link?: string;
  isSubmit?: boolean;
};

const Button = (props: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-5 font-bold transition-all hover:scale-110 hover:bg-green"
      disabled={props.disabled}
      type={props.isSubmit ? "submit" : "button"}
      style={{
        background: props.type === "solid" ? "hsla(80,59%,39%,100%)" : "",
        outline:
          props.type === "outline"
            ? props.isSmall
              ? "6px solid hsla(80,59%,39%,100%)"
              : "8px solid hsla(80,59%,39%,100%)"
            : "",
        outlineOffset: props.isSmall ? "-6px" : "-8px",
        padding: props.isSmall ? "7.5px 15px" : "7px 15px",
        fontSize: props.isSmall ? "25.12px" : "33.49px",
        flexDirection: props.anotherWay ? "row-reverse" : "row",
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
