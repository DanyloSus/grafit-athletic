import store from "@/lib/redux/store";
import React, { ReactNode } from "react";

import { Provider as ProviderRedux } from "react-redux";

type ChildrenProps = {
  children: ReactNode;
};

const Provider = ({ children }: ChildrenProps) => {
  return <ProviderRedux store={store}>{children}</ProviderRedux>;
};

export default Provider;
