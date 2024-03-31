import React, { ReactNode } from "react";

type FormsWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormsWrapper = (props: FormsWrapperProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col py-20 max-sm:h-screen max-sm:w-screen sm:max-w-[905px] lg:max-w-[820px] w-full px-8 items-center justify-center gap-2 border border-grey rounded-lg">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default FormsWrapper;
