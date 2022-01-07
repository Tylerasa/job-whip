import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";
import Floater from "./Floater";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="content">
        <Navbar />
        {children}
        <Floater />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
