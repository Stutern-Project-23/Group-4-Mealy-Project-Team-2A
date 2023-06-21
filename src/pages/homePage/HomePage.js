import React, { useState } from 'react';
import Tabs from './TabComponents/Tabs';
import categoriespic1 from "../../assets/homePage/categoriespic1.svg";
import categoriespic2 from "../../assets/homePage/categoriespic2.svg";
import categoriespic3 from "../../assets/homePage/categoriespic3.svg";
import fav1 from "../../assets/homePage/fav1.svg";
import fav2 from "../../assets/homePage/fav2.svg";
import fav3 from "../../assets/homePage/fav3.svg";
import fav4 from "../../assets/homePage/fav4.svg";
import fav5 from "../../assets/homePage/fav5.svg";
import favBlank from "../../assets/homePage/FavBlack.svg";
import avocado from "../../assets/homePage/avocado.svg";
import tasteeImg from "../../assets/homePage/tasteeImg.svg";
import NoRating from "../../assets/homePage/norating.svg";
import FullRating from "../../assets/homePage/Fullrating.svg";
import arrow from "../../assets/homePage/arrow.svg";
import { Data } from "./HomePageData.js";
import Layout from "../../components/LayoutAlt";

  const Homepage = () => {
  return (
    <Layout>
      <div className="px-12 ">
        {/* Welcome */}
        <div className="text-center mb-10">
          <h4 className="font-semibold mt-2 text-3xl">Welcome, Amara</h4>
          <p className="font-light mb-5">What would you like to eat?</p>
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-xl border-[0.5px] border-solid border-[#32324D] w-96 h-10 p-3 outline-0 placeholder:text-lg placeholder:font-base placeholder:text-[#32324D]"
          />
        </div>
        {/* Categories */}
        <p className="ml-2 text-lg tracking-wide mb-3">Categories</p>
        <div className="flex flex-row overflow-auto text-center">
          <figure className="mx-1.5">
            <img src={categoriespic1} alt="food" />
            <figcaption>Healthy</figcaption>
          </figure>
          <figure className="mx-1.5">
            <img src={categoriespic1} alt="food" />
            <figcaption>Healthy</figcaption>
          </figure>
          <figure className="mx-1.5">
            <img src={categoriespic2} alt="food" />
            <figcaption>African</figcaption>
          </figure>
          <figure className="mx-1.5">
            <img src={categoriespic2} alt="food" />
            <figcaption>African</figcaption>
          </figure>
          <figure className="mx-1.5">
            <img src={categoriespic3} alt="food" />
            <figcaption>Snacks</figcaption>
          </figure>
          <figure className="mx-1.5">
            <img src={categoriespic2} alt="food" />
            <figcaption>African</figcaption>
          </figure>
        </div>
        {/* Favorite */}
        <div className="mt-12 mb-8">
          <p className="ml-2 text-lg tracking-wide mb-3">Favorites</p>
          <div className="flex flex-row">
            <figure className="mx-1.5">
              <img src={fav4} alt="fav" />
            </figure>
            <figure className="mx-1.5">
              <img src={fav3} alt="fav" />
            </figure>
            <figure className="mx-1.5 ">
              <img src={fav2} alt="fav" />
            </figure>
            <figure className="mx-1.5">
              <img src={fav1} alt="fav" />
            </figure>
            <figure className="mx-1.5">
              <img src={fav5} alt="fav" />
            </figure>
            <figure className="mx-1.5">
              <img src={fav4} alt="fav" />
            </figure>
            <figure className="mx-1.5 ">
              <img src={favBlank} alt="fav" />
            </figure>
            <figure className="mx-1.5">
              <img src={favBlank} alt="fav" />
            </figure>
            <figure className="mx-1.5">
              <img src={favBlank} alt="fav" />
            </figure>
          </div>
        </div>
        {/* Discount */}
        <div className="w-[650px] h-[220px] bg-[#FA5A00] flex gap-x-4 justify-center items-center m-auto rounded-xl">
          <img src={avocado} alt="" className="w-32" />

          <div>
            <p className="bg-[#FA5A00] text-white font-bold text-4xl">
              50% OFF
            </p>
            <p className="bg-[#FA5A00] text-[#32324D] text-xs mb-2">
              All salad and pasta
            </p>
            <p className="text-[#FA5A00] text-sm bg-white p-[2px] text-center w-32 text-xs rounded">
              Use code Eattak50
            </p>
          </div>
        </div>
        {/* Restaurants */}
        <div>
          <p className="my-4 ml-2 text-lg tracking-wide mb-3 mt-16">
            All Restaurants
          </p>
        </div>
        <Tabs />
      </div>
    </Layout>
  );
}       

export default Homepage;
