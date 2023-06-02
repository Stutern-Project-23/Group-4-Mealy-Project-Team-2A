import React from "react";
import Header from "../../components/landingPage/Header";
import Hero from "../../components/landingPage/Hero";
import FavoriteOrder from "../../components/landingPage/FavoriteOrder";
import DiscountSection from "../../components/landingPage/DiscountSection";

import Footer from "../../components/Footer";
import MealContainer from "../../components/landingPage/MealContainer";


const LandingPage = () => {
  return (
   <div className="w-full h-full bg-gray-100">
     <Header />
      <Hero />
      <FavoriteOrder />
      <DiscountSection />
    </>
      <div className="">
<MealContainer className="my-4"/>
      </div>
      <Footer />
   </div>

  );
};

export default LandingPage;
