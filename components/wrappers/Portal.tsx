//hooks need SSR
"use client";

//import from libraries
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

//portal's children
type ClientPortalInterface = {
  children: ReactNode;
};

const ClientPortal = ({ children }: ClientPortalInterface) => {
  //state to check is elemenent "menu" exists
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  var menuRoot;

  if (domReady) {
    menuRoot = document.getElementById("menu");
  }

  return domReady ? createPortal(children, menuRoot!) : null;
};
export default ClientPortal;
