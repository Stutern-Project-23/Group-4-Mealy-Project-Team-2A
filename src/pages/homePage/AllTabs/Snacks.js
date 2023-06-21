import React from "react";
import tasteeImg from "../../../assets/homePage/tasteeImg.svg";
import FullRating from '../../../assets/homePage/Fullrating.svg'
import NoRating from '../../../assets/homePage/norating.svg'
import arrow from '../../../assets/homePage/arrow.svg'
 
const All = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="All">
        <ul className="flex flex-row justify-between items-center mt-12">
            <li className="bg-white p-2">
                <img src={tasteeImg} alt="food"  />
                <h3 className="font-bold text-xl mt-2 bg-white tracking-wide">
                    Snacks
                  </h3>
                  <div className="flex flex-row gap-1 mt-3 bg-white">
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={NoRating} alt="no ratings" className="w-5 bg-white"/>
                    <p className="text-xs bg-white text-[#32324D] ">Reviews (220)</p>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-4">
                    <p className="text-sm pr-4 bg-white text-xs text-[#32324D]">
                      Snacks
                    </p>
                    <a href="#" className="mt-3 w-10">
                      <img src={arrow} alt="more info" />
                    </a>
                  </div>
            </li>
            <li className="bg-white p-2">
                <img src={tasteeImg} alt="food"  />
                <h3 className="font-bold text-xl mt-2 bg-white tracking-wide">
                    Snacks
                  </h3>
                  <div className="flex flex-row gap-1 mt-3 bg-white">
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={NoRating} alt="no ratings" className="w-5 bg-white"/>
                    <p className="text-xs bg-white text-[#32324D] ">Reviews (220)</p>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-4">
                    <p className="text-sm pr-4 bg-white text-xs text-[#32324D]">
                      Snacks
                    </p>
                    <a href="#" className="mt-3 w-10">
                      <img src={arrow} alt="more info" />
                    </a>
                  </div>
            </li>
            <li className="bg-white p-2">
                <img src={tasteeImg} alt="food"  />
                <h3 className="font-bold text-xl mt-2 bg-white tracking-wide">
                    Snacks
                  </h3>
                  <div className="flex flex-row gap-1 mt-3 bg-white">
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={FullRating} alt="full ratings" className="w-5 bg-white"/>
                    <img src={NoRating} alt="no ratings" className="w-5 bg-white"/>
                    <p className="text-xs bg-white text-[#32324D] ">Reviews (220)</p>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-4">
                    <p className="text-sm pr-4 bg-white text-xs text-[#32324D]">
                      Snacks
                    </p>
                    <a href="#" className="mt-3 w-10">
                      <img src={arrow} alt="more info" />
                    </a>
                  </div>
            </li>
        </ul>
     { children }
   </div>
   : null
 );
};
 
export default All;