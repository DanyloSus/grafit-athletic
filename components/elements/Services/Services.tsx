"use client";

import React, { useState } from "react";
import NavBar from "./NavBar";
import Service from "./Service";

const Services = () => {
  const [page, setPage] = useState(0);

  const setNewPage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section
      className="bg-black relative z-[3] flex items-center justify-center"
      id="services"
    >
      <h2 className="absolute top-[75px] left-1/2 -translate-x-1/2">Послуги</h2>
      <Service page={page} />
      <NavBar page={page} setNewPage={setNewPage} />
    </section>
  );
};

export default Services;
