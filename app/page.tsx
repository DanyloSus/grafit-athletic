import AboutUs from "@/components/elements/AboutUs";
import Main from "@/components/elements/Main";
import Prices from "@/components/elements/Prices/Prices";
import Reviews from "@/components/elements/Reviews/Reviews";
import Services from "@/components/elements/Services/Services";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

const Landing = () => {
  return (
    <>
      <Header />
      <div>
        <Main />
        {/* <AboutUs />
        <Services />
        <Reviews />
        <Prices /> */}
      </div>
      <Footer />
    </>
  );
};

export default Landing;
