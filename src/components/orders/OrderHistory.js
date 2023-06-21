import React from "react";
import { data } from "../../pages/accountsettings/orders/OrdersData";

const OrderHistory = () => {
  return (
    <div className="border-2 border-solid border-grey-600 rounded-3xl pt-5 mt-10 lg:mt-24 mb-16">
      <h2 className="font-bold ml-5">Order History</h2>
      <div className="flex flex-wrap h-[392px] overflow-scroll gap-y-4 xl:mr-20 gap-x-16 mt-3 mb-6 pt-3">
        {data.map((item) => {
          return (
            <>
              <div
                className="flex w-full gap-x-3 xl:max-w-[43%] ml-5 mr-2"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                  padding: "15px 15px 7px 15px",
                  // margin: "5px 0 0 10px",
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
