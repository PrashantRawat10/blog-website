import React from "react";
import "./Login.css";

function Signup() {
  return (
    <div className="popup-actual signup">
      <img
        className="cross"
        src="/images/cross.png"
        onClick={() => {
          let toggle = document.querySelector(".signup");
          toggle.classList.remove("show");
          toggle.classList.add("hide");
        }}
        alt=""
      ></img>
      <form className="form">
        <div className="form-element">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email"></input>
        </div>
        <div className="form-element">
          <label for="confirm-email">Confirm Email:</label>
          <input
            type="email"
            id="confirm-email"
            placeholder="confirm email"
          ></input>
        </div>
        <div className="form-element">
          <label for="password-signup">Password :</label>
          <input
            type="password"
            id="password-signup"
            placeholder="password"
          ></input>
        </div>

        <input className="form-element" type="submit"></input>
      </form>
    </div>
  );
}

export default Signup;
