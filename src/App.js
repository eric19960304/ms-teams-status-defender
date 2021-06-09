import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const entered = e.target.value;
    let newText = entered;
    if (entered.length > 15) {
      newText = " ";
    }
    setText(newText);
  };

  return (
    <div className="main">
      <h2>Life Saver for those use Microsoft Teams</h2>
      <input
        type="text"
        maxLength={30}
        value={text}
        onChange={handleChange}
        placeholder="hold down space key with stuff to keep your status always green!"
      />
    </div>
  );
}
