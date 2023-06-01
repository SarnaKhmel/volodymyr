import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="l-body">
      <Header />
      <div className={css.block}> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
