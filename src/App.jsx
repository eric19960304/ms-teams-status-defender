import { useState } from 'react'
import './App.css'

function App() {
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
    <>
      <div className="main">
      <h2>Life Saver for those who use Microsoft Teams</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="keep pressing space key"
      />
    </div>
    </>
  )
}

export default App
