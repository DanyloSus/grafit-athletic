//useState needs
"use client";

//import from libraries
import React, { useState } from "react";

//internal imports
import NavBar from "./NavBar";
import Service from "./Service";

const Services = () => {
  const [page, setPage] = useState(0);

  const setNewPage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section
      className="bg-black relative z-[3] flex flex-col gap-[50px] items-center max-lg:min-h-lvh py-[50px] justify-center"
      id="services"
    >
      <h2>Послуги</h2>
      <Service page={page} />
      <NavBar page={page} setNewPage={setNewPage} />
    </section>
  );
};

export default Services;
