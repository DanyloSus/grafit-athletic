//import from libraries
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//internal imports
import { authOptions } from "@/modules/next-auth/authOptions";
import Header from "@/ui/header/Header";
import Main from "@/components/landings/Main";
import AboutUs from "@/components/landings/AboutUs";
import Services from "@/components/landings/Services/Services";
import Reviews from "@/components/landings/Reviews/Reviews";
import Prices from "@/components/landings/Prices/Prices";
import Footer from "@/ui/Footer";

const Landing = async () => {
  const session = await getServerSession(authOptions); //get session

  if (session) redirect("/signed/trainers"); //if user signed then redirect

  return (
    <>
      <Header />
      <div>
        <Main />
        <AboutUs />
        <Services />
        <Reviews />
        <Prices />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
