import React from "react";
import "./Login.css";

function Login() {
  return (
    <div class="popup-actual-login">
      <form>
        <label for="username">UserName:</label>
        <input type="text" id="username" placeholder="Enter Username"></input>
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="password"></input>
        <input
          type="submit"
          value="close"
          onClick={() => {
            let toggle = document.querySelector(".popup-actual-login");
            toggle.classList.remove("show");
            toggle.classList.add("hide");
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Login;
