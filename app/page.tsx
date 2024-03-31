import AboutUs from "@/components/elements/AboutUs";
import Main from "@/components/elements/Main";
import Prices from "@/components/elements/Prices/Prices";
import Reviews from "@/components/elements/Reviews/Reviews";
import Services from "@/components/elements/Services/Services";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/header/Header";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Landing = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/signed/trainers");

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
