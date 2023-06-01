import React from "react";

import css from "../CSS/Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/user" className={css.link}>
        User API
      </Link>
      <Link to="/todo" className={css.link}>
        ToDo
      </Link>
      <Link to="/about" className={css.link}>
        About
      </Link>
    </div>
  );
};

export default Header;
