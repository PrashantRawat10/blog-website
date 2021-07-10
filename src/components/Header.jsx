// import { div } from "prelude-ls";
import React from "react";
import "./Header.css";
import Topic from "./Topic";
import Login from "./Login";
import "./Login.css";
import Signup from "./Signup";
import "./Signup.css";
import Setting from "./Setting";

function Header() {
  window.onscroll = function () {
    console.log("scroll");
    let topics = document.querySelector("#topic");
    if (
      // document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      topics.classList.add("fix-topic-top");
    } else if (
      // document.body.scrollTop < 100 ||
      document.documentElement.scrollTop < 100
    ) {
      topics.classList.remove("fix-topic-top");
    }
  };

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
            let x = document.querySelector(".login");
            let y = document.querySelector(".signup");
            y.classList.remove("show");
            x.classList.remove("hide");
            x.classList.add("show");
          }}
        >
          login
        </li>
        <li
          onClick={() => {
            let x = document.querySelector(".signup");
            let y = document.querySelector(".login");
            y.classList.remove("show");
            x.classList.remove("hide");
            x.classList.add("show");
          }}
        >
          signup
        </li>
        <li>
          <Setting></Setting>
        </li>
        <li>notifications</li>
      </ul>

      <Signup></Signup>
      <Login></Login>

      <div id="topic">
        <Topic />
      </div>
    </div>
  );
}

export default Header;
