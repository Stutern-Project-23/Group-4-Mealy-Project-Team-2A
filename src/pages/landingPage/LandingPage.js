import React from "react";
import Header from "../../components/landingPage/Header";
import Hero from "../../components/landingPage/Hero";
import FavoriteOrder from "../../components/landingPage/FavoriteOrder";
import DiscountSection from "../../components/landingPage/DiscountSection";
import Features from "../../components/landingPage/Features";
import OrderMeal from "../../components/landingPage/OrderMeal";
import MealContainer from "../../components/landingPage/MealContainer";
import Footer from "../../components/landingPage/Footer";
import Layout from "../../components/Layout";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FavoriteOrder />
        <DiscountSection />
        <Features />
        <OrderMeal />
        <MealContainer />
      </Layout>
    </>
  );
};

export default LandingPage;
