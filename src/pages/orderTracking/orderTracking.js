import React from "react";
import Layout from "../../components/LayoutAlt";
import CircleProgressBar from "./circle";
import Map2 from "../../assets/map2.svg";

const progressMinutes = 5;
const totalMinutes = 10;
const OrderTracking = () => {
  return (
    <>
      <Layout>
        <div>
          <h2 className="font-bold">Your Mealy is being delivered.</h2>
          <div className="flex justify-center">
            <img src={Map2} alt="Map" className="w-[50%]" />
          </div>
          <div className="flex justify-center my-5">
            <CircleProgressBar
              progressMinutes={progressMinutes}
              totalMinutes={totalMinutes}
              size={75}
              strokeWidth={4}
              backgroundColor="#ccc"
              progressColor="#fa5a00"
              textColor="black"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OrderTracking;
