import React from "react";
import { data } from "../../pages/landingPage/CarouselData";
import carrouselArrow from "../../assets/carrouselArrow.svg";

const FavoriteOrderCarousel = () => {
  return (
    <>
      <div className="slider relative flex w-full h-full overflow-x-scroll scroll-smooth">
        <div
          className="hidden bg-[black] ml-1 mt-14 opacity-70 absolute z-10 w-[32px] h-[32px] rounded-[100%] flex items-center justify-center"
          // style={{ border: "2px solid red" }}
        >
          <img src={carrouselArrow} className="rotate-180" />
        </div>
        {data.map((item) => (
          <div className="h-[160px] w-[119px] mr-2 text-white  cursor-pointer hover:scale-105 ease-in-out duration-300 flex shrink-0 ">
            <img
              src={item.bgimg}
              className=" h-full object-cover relative rounded "
            />
            <div
              className="absolute z-10 top-[78px] ml-2"
              // style={{ border: "2px solid yellow" }}
            >
              <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
                {item.title}
              </p>
              <div className="flex justify-between gap-x-8 items-center  ">
                <p className="font-extrabold" style={{ fontSize: "10px" }}>
                  {item.subtitle}
                </p>
                <div className="bg-white p-1 rounded-full">
                  <img src={item.icon} className="h-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className=" cursor-pointer hover:opacity-100 bg-[black] ml-[1350px] mt-14 opacity-70 absolute z-10  w-[32px] h-[32px] rounded-[100%] flex items-center justify-center"
          // style={{ border: "2px solid red" }}
        >
          <img src={carrouselArrow} className="" />
        </div>
      </div>
      {/* 
        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white "
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid red",
            width: "145px",
            height: "170px",
          }}
          className="h-32 pt-20 px-2 text-white cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <p className="font-bold w-16 mt-7" style={{ fontSize: "9px" }}>
            Green Curry Spicies
          </p>
          <div className="flex justify-between items-center">
            <p className="font-extrabold" style={{ fontSize: "11px" }}>
              IDR 30K
            </p>
            <div className="bg-white p-2 rounded-full">
              <img src={Icon} className="h-3" />
            </div>
          </div>
        </div> */}
    </>
  );
};

export default FavoriteOrderCarousel;
