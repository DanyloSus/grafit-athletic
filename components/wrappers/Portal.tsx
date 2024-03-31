"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ClientPortalInterface = {
  children: React.ReactNode;
};

const ClientPortal = ({ children }: ClientPortalInterface) => {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);

  const menuRoot = document.getElementById("menu");

  return domReady ? createPortal(children, menuRoot!) : null;
};
export default ClientPortal;
