//provider needs
"use client";

//import from libraries
import React, { ReactNode } from "react";
import { Provider as ProviderRedux } from "react-redux";

//internal imports
import store from "@/modules/redux/store";

//provider's children
type ChildrenProps = {
  children: ReactNode;
};

const Provider = ({ children }: ChildrenProps) => {
  return <ProviderRedux store={store}>{children}</ProviderRedux>;
};

export default Provider;
