import React from "react";
 
const  OrderAgain = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="OrderAgain">
        <p className="font-light text-lg mt-12 text-center">Please order again</p>
     { children }
   </div>
   : null
 );
};
 
export default OrderAgain;