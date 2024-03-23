"use client";

import useReveal from "@/lib/hooks/useReveal";
import React, { useEffect } from "react";
import PriceBlock from "./PriceBlock";

const Prices = () => {
  useEffect(() => {
    window.addEventListener("scroll", useReveal); // add to a scroll a reveal function

    return () => {
      window.removeEventListener("scroll", useReveal); // clean up
    };
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center bg-black relative z-[3] gap-9"
      id="prices"
    >
      <h2>Ціни</h2>
      <div className="flex items-center justify-center w-full">
        <PriceBlock title="1 місяць" price={900} />
        <PriceBlock isHot title="3 місяць" price={2400} />
        <PriceBlock title="6 місяць" price={4500} />
        <PriceBlock title="12 місяць" price={8000} />
      </div>
    </section>
  );
};

export default Prices;
