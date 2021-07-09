import React from "react";
import "./Login.css";
import Signup from "./Signup";

function handleClick() {
  let toggle = document.querySelector(".popup-actual-login");
  toggle.classList.remove("show");
  toggle.classList.add("hide");
}

function handleSignupClick() {
  handleClick();
  let x = document.querySelector(".popup-actual-signup");
  x.classList.remove("hide");
  x.classList.add("show");
}

function Login() {
  return (
    <div class="popup-actual popup-actual-login">
      <img
        className="cross"
        src="/images/cross.png"
        onClick={handleClick}
      ></img>
      <form className="form">
        <div className="form-element">
          <label for="username">UserName:</label>
          <input type="text" id="username" placeholder="Enter Username"></input>
        </div>
        <div className="form-element">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="password"></input>
        </div>
        <input className="form-element" type="submit"></input>
        <input
          className="form-element"
          onClick={() => {
            handleSignupClick();
          }}
          type="button"
          value="Signup"
        ></input>
      </form>
    </div>
  );
}

export default Login;
