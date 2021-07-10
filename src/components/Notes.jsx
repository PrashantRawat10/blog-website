import { Hidden } from "@material-ui/core";
import React, { useState } from "react";
import "./Notes.css";

function Notes() {
  const takeNote = "take note";
  const closeNote = "close note";
  const [noteOpen, setNoteOpen] = useState(false);

  function handleClick() {
    setNoteOpen(() => {
      return !noteOpen;
    });
  }

  return (
    <div>
      <button onClick={handleClick} className="note-button">
        {" "}
        {noteOpen ? closeNote : takeNote}
      </button>

      <input
        type="textArea"
        className="textArea"
        style={noteOpen ? { visibility: "visible" } : { visibility: "hidden" }}
        placeholder="Take notes here:"
      ></input>
    </div>
  );
}

export default Notes;
