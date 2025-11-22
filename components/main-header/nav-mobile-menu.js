"use client";

import { useState } from "react";
import classes from "./nav-mobile-menu.module.css";

const NavMobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((p) => !p);
  };

  return (
    <>
      <div className={classes.topnav}>
        <div id="myLinks" style={{ display: open ? "block" : "none" }}>
          <a href="/meals">Browse Meals</a>
          <a href="/community">Foodies Community</a>
        </div>
      </div>
      <button className={classes.icon} onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </button>
    </>
  );
};

export default NavMobileMenu;
