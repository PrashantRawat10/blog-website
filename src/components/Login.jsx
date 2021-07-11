import React from "react";
import "./Login.css";

function Login(props) {
  function handleClick() {
    let toggle = document.querySelector(".login");
    toggle.style.visibility = "hidden";
  }

  function handleSignupClick() {
    handleClick();
    let x = document.querySelector(".signup");
    x.style.visibility = "visible";
  }

  return (
    <div
      style={props.show ? { visibility: "visible" } : { visibility: "hidden" }}
      class="popup-actual login"
    >
      <img
        className="cross"
        src="/images/cross.png"
        onClick={handleClick}
        alt="cross"
      ></img>
      <form className="form">
        <div className="form-element">
          <label for="username">UserName:</label>
          <input type="text" id="username" placeholder="Enter Username"></input>
        </div>
        <div className="form-element">
          <label for="password-login">Password:</label>
          <input
            type="password"
            id="password-login"
            placeholder="password"
          ></input>
        </div>

        <div className="form-element small">
          <div>
            <label for="rememeber">Remember me</label>
            <input type="checkbox" id="rememeber"></input>
          </div>

          <input type="button" value="forgot password"></input>
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
