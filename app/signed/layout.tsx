import Footer from "@/components/ui/Footer";
import HeaderSigned from "@/components/ui/HeaderSigned";
import React, { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

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
