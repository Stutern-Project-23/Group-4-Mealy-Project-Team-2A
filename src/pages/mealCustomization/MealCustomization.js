import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "../../assets/material-symbols_close.svg";
import SmokeyJollof from "../../assets/mealcustomization/smokeyjollof.svg";
import ColoredStar from "../../assets/mealcustomization/Star.svg";
import PlainStar from "../../assets/mealcustomization/Star2.svg";
import MealAmount from "../../components/mealcustomization/MealAmount";
import Extras from "../../components/mealcustomization/Extras";
import MainIngredientCarousel from "../../components/mealcustomization/MainIngredientCarousel";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  height: 550px;
  background: #f5f5f5;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  overflow: auto;
`;

const ModalContent = styled.div`
  button {
    padding: 5px 7px;
    background: #fa5a00;
    border: none;
    color: #fff;
  }
`;

const MealCustomization = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);
  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="sm:w-[600px] md:w-[700px] lg:w-[800px] mx-10 sm:mx-0">
              <ModalWrapper showModal={showModal}>
                <div className="px-0 sm:px-[2rem] md:px-[5rem] mt-[20%] sm:mt-0">
                  <ModalContent>
                    <img
                      src={CloseIcon}
                      onClick={() => setShowModal((prev) => !prev)}
                      className="cursor-pointer w-6 absolute right-8 top-4"
                    />
                    <div className="flex flex-col-reverse items-center sm:flex-row gap-x-14 mt-5 ">
                      <div className="w-[100%] sm:w-[50%] flex flex-col justify-between px-3 sm:px-0">
                        <img
                          src={SmokeyJollof}
                          className="w-[100%] hidden sm:block"
                        />
                        <div className="mt-3 sm:mt-0.5 flex gap-x-0.5 h-[28px] ">
                          <p className="border border-solid border-black py-1.5 lg:px-0.5 text-[10px] lg:text-xs w-[38%] text-center">
                            Main Ingredients:
                          </p>
                          <div className="w-[62%] overflow-x-scroll flex">
                            <MainIngredientCarousel />
                          </div>
                        </div>
                        <div className="flex mx-auto sm:mx-0 gap-x-5 my-3">
                          <div className="flex gap-x-0.5">
                            <img src={ColoredStar} className="w-4" />
                            <img src={ColoredStar} className="w-4" />
                            <img src={ColoredStar} className="w-4" />
                            <img src={ColoredStar} className="w-4" />
                            <img src={PlainStar} className="w-4" />
                          </div>
                          <p className="font-light">(22)</p>
                        </div>
                        <div className="flex justify-between  text-center ">
                          <div className="bg-white  text-xs w-[30%] py-1">
                            <p className="font-semibold">Size</p>
                            <p className="font-light">per portion</p>
                          </div>
                          <div className="bg-white  text-xs  w-[30%] py-1">
                            <p className="font-semibold">Calories</p>
                            <p className="font-light">350 KCal</p>
                          </div>
                          <div className="bg-white  text-xs w-[30%] py-1">
                            <p className="font-semibold">Cook time</p>
                            <p className="font-light">40 mins</p>
                          </div>
                        </div>
                        <div className="text-[14px] text-center sm:text-left mt-5 leading-4 font-normal mb-8 sm:mb-0">
                          This that, wherever comes to mind. Global village.
                          This that, wherever comes to mind. Global village This
                          that, wherever comes to mind. Global village
                        </div>
                      </div>

                      <div className="w-[100%] sm:w-[50%] flex flex-col justify-between mt-32 sm:mt-0 px-3 sm:px-0">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-xl font-semibold ">
                              Smokey Jollof
                            </p>
                            <p className="font-normal text-sm">#350.00</p>
                          </div>
                          <MealAmount />
                        </div>
                        <p className="text-xl font-semibold py-3">Extras</p>
                        <div className="mx-2 h-[230px] overflow-scroll">
                          <Extras />
                        </div>
                        <div className="flex justify-between ml-0 sm:ml-6 mt-8 p-0.5 border border-solid border-[#9898A6] bg-white rounded-xl">
                          <p className="text-[#767688] text-sm pl-2 my-auto">
                            #33, 067
                          </p>
                          <button className="text-xs font-medium rounded-lg">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </ModalContent>
                </div>
              </ModalWrapper>
            </div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default MealCustomization;
