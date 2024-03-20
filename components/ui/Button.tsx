import React, { ReactNode } from "react";

type ButtonProps = {
  text: string;
  type: "outline" | "solid" | "text";
  isSmall?: boolean;
  isWhite?: boolean;
  icon?: ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className="flex items-center gap-5 font-bold"
      style={{
        background: props.type === "solid" ? "hsla(80,59%,39%,100%)" : "",
        border:
          props.type === "outline" ? "8px solid hsla(80,59%,39%,100%)" : "",
        color: props.isWhite ? "white" : "hsla(48,10%,10%,100%)",
        fill: props.isWhite ? "white" : "hsla(48,10%,10%,100%)",
        padding: props.isSmall ? "15px" : "20px",
        fontSize: props.isSmall ? "25px" : "33px",
      }}
    >
      <p>{props.text}</p>
      {props.icon ? props.icon : null}
    </button>
  );
};

export default Button;
