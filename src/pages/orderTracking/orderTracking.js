import React from "react";
import Layout from "../../components/LayoutAlt";
import CircleProgressBar from "./circle";
import Map2 from "../../assets/map2.svg";
import Profile from "../../assets/profile.png";
import FullStar from "../../assets/fullStar.svg";
import Star from "../../assets/Star.svg";
import Call from "../../assets/call.svg";


const progressMinutes = 5;
const totalMinutes = 10;
const OrderTracking = () =>{
    return(
        <>
        <Layout>
        <div>

          <h2 className="font-bold pt-10">Your Mealy is being delivered.</h2>

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

          <div className="flex space-x-3 justify-center">
            <div className="flex space-x-4">
              <img src={Profile} alt="driver-profile" className="w-[5%]"/>

              <div className="flex flex-col">
                <div>
                  <p className="font-semibold">Fayemi Seun</p>
                </div>
                <div className="flex flex-row ">
                <img src={FullStar} alt="star-rating" className="w-[50%]"/>
                <img src={FullStar} alt="star-rating" className="w-[50%]"/>
                <img src={FullStar} alt="star-rating" className="w-[50%]"/>
                <img src={FullStar} alt="star-rating" className="w-[50%]"/>
                <img src={Star} alt="star-rating"/> 
                </div>
              </div>
            </div>

            <div>
              <img src={Call} alt="call-phone" className="w-[75%]"/>
            </div>
          </div>

        </div>
      
        </Layout>
        </>
    )
};

export default OrderTracking;