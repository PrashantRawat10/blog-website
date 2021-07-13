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
      {/* <form className="form">
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
        </div> */}
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' ></input>
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"placeholder='Enter your password' ></input>
            </div>
            <div class="mb-3 form-check">
                <a href="#" id="forget">Forget Password</a>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>

            <button type="button" class="btn btn-success" 
            onClick={() => {
            handleSignupClick();
          }}>Sign up</button>

      </form>
    </div>
  );
}

export default Login;
