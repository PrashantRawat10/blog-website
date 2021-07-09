import { div } from "prelude-ls";
import React from "react";
import "./RightBar.css";

function RightBar() {
  return (
    <div className="rightBar">
      <ul className="first-list list">
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
        <li>six</li>
      </ul>

      <ul className="second-list list">
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
        <li>six</li>
      </ul>
    </div>
  );
}

export default RightBar;
