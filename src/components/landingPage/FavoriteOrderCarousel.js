import { useState, useRef, useEffect } from "react";

// Data
import { data } from "../../pages/landingPage/CarouselData";

const FavoriteOrderCarousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mt-6 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="bg-black text-white  w-[36px] h-[36px] my-auto rounded-[100%] text-center opacity-75 hover:opacity-100 disabled:invisible disabled:cursor-not-allowed z-10 p-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-16 -ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="bg-black text-white w-[36px] h-[36px] my-auto rounded-[100%] text-center opacity-75 hover:opacity-100 disabled:invisible disabled:cursor-not-allowed z-10 p-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-16 -ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((item) => {
            return (
              <div
                className="carousel-item text-white relative mr-2 h-40 w-32 snap-start cursor-pointer"
                // style={{ border: "2px solid red" }}
              >
                <div
                  className="h-full w-full rounded  aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${item.bgimg || ""})` }}
                ></div>
                <div
                  className="absolute z-10 top-[78px] ml-2"
                  // style={{ border: "2px solid yellow" }}
                >
                  <p
                    className="font-bold w-16 mt-7"
                    style={{ fontSize: "9px" }}
                  >
                    {item.title}
                  </p>
                  <div className="flex justify-between gap-x-12 items-center  ">
                    <p className="font-extrabold" style={{ fontSize: "9px" }}>
                      {item.subtitle}
                    </p>
                    <div className="bg-white p-1 rounded-full">
                      <img src={item.icon} className="h-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavoriteOrderCarousel;
