// import { div } from "prelude-ls";
import React, { useState } from "react";
import "./Header.css";
import Topic from "./Topic";
import Login from "./Login";
import "./Login.css";
import Signup from "./Signup";
import "./Signup.css";
import Setting from "./Setting";
import Notes from "./Notes";

function Header() {
  const [showLogin, setLoginShow] = useState(false);
  const [showSignup, setSignupShow] = useState(false);

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
            setLoginShow(() => !showLogin);
            if (showSignup === true) setSignupShow(() => !showSignup);
          }}
        >
          login
        </li>

        <li
          onClick={() => {
            setSignupShow(() => !showSignup);
            if (showLogin === true) setLoginShow(() => !showLogin);
          }}
        >
          signup
        </li>
        <li>
          <Setting></Setting>
        </li>
        <li>notifications</li>
      </ul>

      <Login show={showLogin}></Login>
      <Signup show={showSignup}></Signup>

      <div id="topic">
        <Topic />
      </div>

      <Notes></Notes>
    </div>
  );
}

export default Header;
