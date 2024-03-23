import React, { ChangeEvent } from "react";

type CustomTextFieldProps = {
  label: string;
  value: string;
  error: boolean;
  helperText: string;
  type: "password" | "text";
  name: string;
  disabled: boolean;
  onChange: (e: any) => void;
};

const CustomTextField = (props: CustomTextFieldProps) => {
  return (
    <div className="flex relative flex-col w-full">
      <p
        className="px-6 translate-y-1/2"
        style={{
          color: props.error ? "#FFD1D1" : "",
        }}
      >
        {props.label}
      </p>
      <input
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        name={props.name}
        className="px-6 py-4 border border-grey bg-black rounded-lg"
        style={{
          backgroundColor: props.error ? "#2E1C1C" : "",
          color: props.error ? "#FFD1D1" : "white",
        }}
        onChange={(e) => props.onChange(e)}
      />
      {props.error ? (
        <p className="text-errorText px-6">{props.helperText}</p>
      ) : null}
    </div>
  );
};

export default CustomTextField;
