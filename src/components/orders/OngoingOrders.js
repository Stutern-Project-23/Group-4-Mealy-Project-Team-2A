import React from "react";
import { data } from "../../pages/accountsettings/orders/OrdersData";
const OngoingOrders = () => {
  return (
    <div className="border-2 border-solid border-grey-600 rounded-3xl pt-5 mt-10 lg:mt-16">
      <h2 className="font-bold ml-5">Ongoing Orders</h2>
      {/* <div className="grid gap-y-4 mr-24 gap-x-28 grid-cols-2 mt-8 mb-10"> */}
      <div className="flex flex-wrap  h-[265px] overflow-scroll xl:mr-20 gap-x-16 gap-y-4 mt-3 mb-3 pt-3">
        {data.slice(0, 5).map((item) => {
          return (
            <>
              <div
                className="flex w-full xl:max-w-[43%] gap-x-3 ml-5 mr-2"
                style={{
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  padding: "15px 15px 7px 15px",
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

export default OngoingOrders;
