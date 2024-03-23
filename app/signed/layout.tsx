import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React, { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
