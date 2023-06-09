import React from "react";
import { data } from "../../pages/accountsettings/orders/OrdersData";

const OrderHistory = () => {
  return (
    <div className="border border-solid border-[#32324D] rounded-3xl pl-3 pt-5 mt-10 lg:mt-24 mb-16">
      <h2 className="font-bold">Order History</h2>
      <div className="flex flex-wrap h-[400px] overflow-scroll gap-y-4 xl:mr-24 gap-x-28 mt-8 mb-10">
        {data.map((item) => {
          return (
            <>
              <div
                className="flex w-full gap-x-3 xl:max-w-[43%]"
                style={{
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  padding: "15px 9px 7px 15px",
                }}
              >
                <img src={item.foodImg} />
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <p className="font-semibold">{item.restaurant}</p>
                    <p className="text-[14px]">{item.foodOrder1}</p>
                    <p className="text-[14px]">{item.foodOrder2}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">{item.status}</p>
                    <button className="bg-[#FA5A00] px-5 rounded-lg text-white text-sm">
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
