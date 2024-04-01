//import from libraries
import React, { ReactNode } from "react";

//internal imports
import HeaderSigned from "@/ui/header/HeaderSigned";
import Footer from "@/ui/Footer";

type ChildrenProps = {
  children: ReactNode;
};

//layout for signed pages
const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <HeaderSigned />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
