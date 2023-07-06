import React, { useState } from "react";
import "../../pages/accountsettings/LeftNav.css";
import Layout from "../../components/LayoutAlt";
import Profile from "./profile/Profile";
import Orders from "./orders/Orders";
import Payments from "./payments/Payments";
import DeleteAccount from "./deleteAccount/DeleteAccount";
import Logout from "./logout/Logout";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag, BiLogOut } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const NavLayout = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showModal, setShowModal] = useState(false);
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1 - Profile
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2 - Orders
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab3 - Payments
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    // update the state to tab4 - DeleteAccounts
    setActiveTab("tab4");
  };

  const openLogoutModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Layout>
        <div className="mx-4 lg:mx-12 pt-28">
          <h2 className="font-semibold text-xl lg:text-2xl">
            Account Settings
          </h2>
          <div className="border-2 border-solid border-grey-600 pt-6 pl-0 lg:pl-4 rounded-3xl mt-6 lg:mt-10 flex flex-col lg:flex-row ">
            <div className="leftNavTabs">
              <ul className="hidden border-r border-r-solid border-r-[#32324D80] pr-6 h-full pt-4 lg:flex flex-col gap-y-2.5 text-sm ">
                <li
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={handleTab1}
                >
                  My Profile
                </li>
                <li
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={handleTab2}
                >
                  Orders
                </li>
                <li
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={handleTab3}
                >
                  Payments
                </li>
                <li onClick={openLogoutModal}>Logout</li>
                <li
                  className={activeTab === "tab4" ? "active" : ""}
                  onClick={handleTab4}
                >
                  Delete Account
                </li>
              </ul>
              <ul className="flex justify-center gap-x-3 items-center lg:hidden flex-row border-b">
                <li
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={handleTab1}
                >
                  <CgProfile size={24} />
                </li>

                <li
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={handleTab2}
                >
                  <BiShoppingBag size={24} />
                </li>
                <li
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={handleTab3}
                >
                  <MdPayment size={24} />
                </li>
                <li onClick={openLogoutModal}>
                  <BiLogOut size={24} />
                </li>
                <li
                  className={activeTab === "tab4" ? "active" : ""}
                  onClick={handleTab4}
                >
                  <AiOutlineDelete size={24} />
                </li>
              </ul>
            </div>
            <div className="outlet px-2 lg:px-24 w-full">
              {activeTab === "tab1" && <Profile />}
              {activeTab === "tab2" && <Orders />}
              {activeTab === "tab3" && <Payments />}
              {activeTab === "tab4" && <DeleteAccount />}
            </div>
          </div>
          <div>
            <Logout showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NavLayout;
