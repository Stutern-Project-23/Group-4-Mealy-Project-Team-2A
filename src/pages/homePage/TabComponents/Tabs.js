import React, { useState } from 'react'
import TabNavItem from './TabNavItem'
import OrderAgain from '../AllTabs/OrderAgain'
import All from '../AllTabs/All'
import Starters from '../AllTabs/Starters'
import African from '../AllTabs/African'
import Drinks from '../AllTabs/Drinks'
import Salad from '../AllTabs/Salad'
import Snacks from '../AllTabs/Snacks'
import Combos from '../AllTabs/Combos'


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")

    
  return (
    <div className='tabs'>
        <ul className="flex flex-row justify-between items-center bg-white font-light text-lg px-4 py-4 mt-8"
            style={{ boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.08)" }}>
          <TabNavItem title="Order Again" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="All" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Starters" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="African" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Drinks" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Salad" id="tab6" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Combos" id="tab7" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Snacks" id="tab8" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>
        <div className='outlet'>
          <OrderAgain id="tab2" activeTab={activeTab}/>
          <All id="tab1" activeTab={activeTab}/>
          <Starters id="tab3" activeTab={activeTab}/>
          <African id="tab4" activeTab={activeTab}/>
          <Drinks  id="tab5" activeTab={activeTab}/>
          <Salad  id="tab6" activeTab={activeTab}/>
          <Combos  id="tab7" activeTab={activeTab}/>
          <Snacks id="tab8" activeTab={activeTab}/>
          
        </div>
    </div>
  )
}

export default Tabs