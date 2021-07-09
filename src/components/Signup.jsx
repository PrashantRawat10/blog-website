import React from "react";
import "./Login.css";

function Signup() {
  return (
    <div className="popup-actual-signup">
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email"></input>

        <input
          type="submit"
          value="close"
          onClick={() => {
            let toggle = document.querySelector(".popup-actual-signup");
            toggle.classList.remove("show");
            toggle.classList.add("hide");
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Signup;
