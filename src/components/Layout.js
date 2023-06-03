import React from "react";
import Footer from "./landingPage/Footer";
import Header from "./landingPage/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
