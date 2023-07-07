// import React from 'react'
// import Layout from "../../components/LayoutAlt"
// // import MenuListHeroImg from "../../assets/homePage/tasteeImg.svg"
// import MenuListHeroImg from "../../assets/Group 72.svg"
// //import Tabs from '../homePage/TabComponents/Tabs'
// import MenuListTab from './MenuListTab'

// const MenuList = () => {
//   return (

//         <Layout>
//             <img src={MenuListHeroImg} alt="menulistheroimage"/>
//             <div className="grid grid-cols-3 gap-3">
//                 <div className=''>
//                     <MenuListTab/>
//                 </div>
//                 <div>
//                     two
//                 </div>
//                 <div>
//                     three
//                 </div>
//             </div>
//             {/* <img src={MenuListHeroImg} alt="menulistheroimage"/> */}
//         </Layout>

//   )
// }

// export default MenuList

import React, { useState } from "react";

import TabNavItem from "../homePage/TabComponents/TabNavItem";
import Layout from "../../components/LayoutAlt";
import MenuListHeroImg from "../../assets/Group 72.svg";
import Services from "../../assets/Frame 91.svg";
import OrderAgain from "../homePage/AllTabs/OrderAgain";
import All from "../homePage/AllTabs/All";
import Starters from "../homePage/AllTabs/Starters";
import African from "../homePage/AllTabs/African";
import Drinks from "../homePage/AllTabs/Drinks";
import Salad from "../homePage/AllTabs/Salad";
import Snacks from "../homePage/AllTabs/Snacks";
import Combos from "../homePage/AllTabs/Combos";

const MenuList = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Layout>
      <div className="p-7">
        <img
          src={MenuListHeroImg}
          className="object-cover"
          alt="menulistheroimage"
        />

        <div className=" grid grid-cols-12 gap-3 mt-5 md:mt-8">
          <div className="col-span-2">
            <img src={Services} alt="services" className="m-0" />
            <ul
              className="flex flex-col  justify-between items-center bg-white font-light text-base"
              style={{ boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.08)" }}
            >
              <TabNavItem
                title="OrderAgain"
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="All"
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Starters"
                id="tab3"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="African"
                id="tab4"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Drinks"
                id="tab5"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Salad"
                id="tab6"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Combos"
                id="tab7"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Snacks"
                id="tab8"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>
          </div>

          <div className="outlet col-span-7 md:mt-[-40px] mt-[-46px] pt-0 overflow-scroll">
            <OrderAgain id="tab2" activeTab={activeTab} />
            <All id="tab1" activeTab={activeTab} />
            <Starters id="tab3" activeTab={activeTab} />
            <African id="tab4" activeTab={activeTab} />
            <Drinks id="tab5" activeTab={activeTab} />
            <Salad id="tab6" activeTab={activeTab} />
            <Combos id="tab7" activeTab={activeTab} />
            <Snacks id="tab8" activeTab={activeTab} />
          </div>

          <div className="col-span-3">
            Hi, there
            <p>
              Chrome DevTools supports WebAssembly debugging with DWARF
              information (using an extension).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenuList;
