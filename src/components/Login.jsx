import React from "react";
import "./Login.css";

function Login() {
  return (
    <div class="popup-actual">
      <form>
        <label for="username">UserName:</label>
        <input type="text" id="username" placeholder="Enter Username"></input>
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="password"></input>
        <input
          type="submit"
          value="close"
          onClick={() => {
            let toggle = document.querySelector(".popup-actual");
            toggle.classList.remove("hide");
            toggle.classList.add("hide");
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Login;
