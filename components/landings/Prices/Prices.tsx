//useEffect needs
"use client";

//import from libraries
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//internal imports
import PriceSlider from "./PriceSlider";
import PriceBlock from "./PriceBlock";
import useReveal from "@/modules/hooks/useReveal";

const Prices = () => {
  useEffect(() => {
    window.addEventListener("scroll", useReveal); // add to a scroll a reveal function

    return () => {
      window.removeEventListener("scroll", useReveal); // clean up
    };
  }, []);

  return (
    <section
      className="flex flex-col sm:items-center sm:justify-center bg-black relative z-[3] gap-9"
      id="prices"
    >
      <h2 className="max-sm:mx-auto">Ціни</h2>
      <div className="flex max-lg:flex-col flex-wrap items-center justify-center w-full reveal max-sm:hidden">
        <PriceBlock title="1 місяць" price={900} />
        <PriceBlock isHot title="3 місяці" price={2400} />
        <PriceBlock title="6 місяці" price={4500} />
        <PriceBlock title="12 місяці" price={8000} />
      </div>
      <PriceSlider />
    </section>
  );
};

export default Prices;
