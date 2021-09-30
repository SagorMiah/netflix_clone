import React, { useState, useEffect } from "react";
import "../css/nav.css";
import { useHistory } from "react-router";

const Nav = () => {
  const [handle, setHandle] = useState(false);
  const history = useHistory();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHandle(true);
    } else {
      setHandle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`nav ${handle && "nav__showBackground"}`}>
      <div className="nav__logo">
        <img
          onClick={() => history.push("/")}
          src="/images/logo.png"
          alt="logo"
        />
      </div>
      <div className="nav__avatar">
        <img
          onClick={() => history.push("/profile")}
          src="/images/download.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
