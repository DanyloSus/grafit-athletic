import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  text: string;
  type: "outline" | "solid" | "text";
  isSmall?: boolean;
  isWhite?: boolean;
  icon?: ReactNode;
  link?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.link ? props.link : "/register"}>
      <button
        className="flex items-center gap-5 font-bold"
        style={{
          background: props.type === "solid" ? "hsla(80,59%,39%,100%)" : "",
          border:
            props.type === "outline" ? "8px solid hsla(80,59%,39%,100%)" : "",
          padding: props.isSmall ? "15px" : "20px",
          fontSize: props.isSmall ? "25px" : "33px",
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
    </Link>
  );
};

export default Button;
