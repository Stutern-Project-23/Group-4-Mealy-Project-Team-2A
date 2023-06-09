import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  width: 383px;
  height: 443px;
  background: #fff;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  padding: 4rem 3rem;
  text-align: center;
`;

const ModalContent = styled.div`
  button {
    padding: 15px 50px;
    background: #fa5a00;
    border: none;
    border-radius: 12px;
    color: #fff;
  }
`;

const Logout = ({ showModal, setShowModal }) => {
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
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h2 className="font-semibold text-3xl pb-8">
                  Logout of Mealy?
                </h2>
                <h3 className="pb-16 font-medium">
                  Are you sure you want to logout of mealy? You can always log
                  back in at any time!
                </h3>

                <button>
                  <NavLink to="/">Logout</NavLink>
                </button>
                <p
                  onClick={() => setShowModal((prev) => !prev)}
                  className="cursor-pointer pt-8 font-light"
                >
                  Cancel
                </p>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Logout;
