import React from "react";
import Header from "../../components/landingPage/Header";
import Hero from "../../components/landingPage/Hero";
import FavoriteOrder from "../../components/landingPage/FavoriteOrder";
import DiscountSection from "../../components/landingPage/DiscountSection";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <FavoriteOrder />
      <DiscountSection />
    </>
  );
};

export default LandingPage;
