import React from "react";
import { Data } from "../HomePageData";
import tasteeImg from "../../../assets/homePage/tasteeImg.svg";
import NoRating from "../../../assets/homePage/norating.svg";
import FullRating from "../../../assets/homePage/Fullrating.svg"
import arrow from "../../../assets/homePage/arrow.svg";
 
const All = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="All">
        <ul className="grid grid-rows-5 grid-flow-col gap-4 mt-12 ">
        {Data.map((card) => {
              return (
                <li key={card.id} className="bg-white p-3">
                  <img src={tasteeImg} alt="food" className="bg-white p-0.2" />
                  <h3 className="font-bold text-xl mt-2 bg-white tracking-wide">
                    {card.label}
                  </h3>
                  <div className="flex flex-row gap-1 mt-1 bg-white">
                    <img src={FullRating} alt="full ratings" className="w-3 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-3 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-3 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-3 bg-white"/>
                    <img src={NoRating} alt="no ratings" className="w-3 bg-white"/>
                    <p className="text-xs bg-white text-[#32324D] ">Reviews (220)</p>
                  </div>
                  <div className="flex flex-row mt-4">
                    <p className="text-sm pr-4 bg-white text-xs text-[#32324D]">
                      {card.description}
                    </p>
                    <a href="#" className="mt-3 w-10">
                      <img src={arrow} alt="more info" />
                    </a>
                  </div>
                </li>
                 );
                })}
        </ul>
     { children }
   </div>
   : null
 );
};
 
export default All;