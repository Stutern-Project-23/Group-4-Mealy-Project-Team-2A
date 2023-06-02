import React from "react";
import Header from "../../components/landingPage/Header";
import Hero from "../../components/landingPage/Hero";
import Footer from "../../components/Footer";
import MealContainer from "../../components/landingPage/MealContainer";


const LandingPage = () => {
  return (
   <div className="w-full h-full bg-gray-100">
     <Header />
      <Hero />
      <div className="">
<MealContainer className="my-4"/>
      </div>
      <Footer />
   </div>
  );
};

export default LandingPage;
