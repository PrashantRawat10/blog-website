import React from "react";
import "./Login.css";

function Signup(props) {
  return (
    <div
      className="popup-actual signup"
      style={props.show ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <img
        className="cross"
        src="/images/cross.png"
        onClick={() => {
          let toggle = document.querySelector(".signup");
          toggle.style.visibility = "hidden";
        }}
        alt=""
      ></img>
      

        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'></input>
              <div id="emailHelp" class="form-text"></div>
            </div>
            
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            
            <button type="submit" class="btn btn-success">Sign-up</button>
          </form>
    </div>
  );
}

export default Signup;
