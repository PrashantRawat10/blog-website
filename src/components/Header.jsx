// import { div } from "prelude-ls";
import React from "react";
import "./Header.css";
import Topic from "./Topic";
import Login from "./Login";
import "./Login.css";

function Header() {
  return (
    <div id="header-container">
      <div id="logo" className="header-elements">
        <img src="/images/logo1.png" alt="logo" />
      </div>

      <ul id="header-navbar-mid" className="header-elements header-list">
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </ul>

      <ul id="header-navbar-right" className="header-elements header-list">
        <li
          className="pick"
          onClick={() => {
            let x = document.querySelector(".popup-actual");
            x.classList.remove("hide");
            x.classList.add("show");
          }}
        >
          login
        </li>
        <li>signup</li>
        <li>settings</li>
        <li>notifications</li>
      </ul>

      <Login></Login>

      <div id="topic">
        <Topic />
        {/* {Topic()} */}
      </div>
    </div>
  );
}

export default Header;
