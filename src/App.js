import React, { useState } from "react";
import "./App.css";
import Aux from "./Auxiliary/Auxiliary";

function App() {
  const [count, func] = useState(0);
  const increment = () => {
    func(count + 1);
  };
  let newtime = new Date().toLocaleTimeString();
  const [currenttime, settime] = useState(newtime);
  const time = () => {
    let newtime = new Date().toLocaleTimeString();
    settime(newtime);
  };
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const nam = "CLICK ME";
  const [name, setName] = useState(nam);
  const bgChange = () => {
    const newbg = "#34495e";
    setBg(newbg);
    setName("BOOM 💥");
  };
  const clicked = () => {
    setBg("blue");
    setName(" AHHHH 🥴");
  };
  setInterval(time, 1000);
  const [inputnow, inputfunc] = useState();
  const [fullname, setfullname] = useState();
  const inputevent = (event) => {
    inputfunc(event.target.value);
  };
  const submit = () => {
    setfullname(inputnow);
  };
  return (
    <Aux>
      <div className="counter" style={{ backgroundColor: bg }}>
        <h1> {count} </h1>
        <h1>{newtime}</h1>
        <button onClick={bgChange} onDoubleClick={clicked}>
          {name}
        </button>
        <button onClick={increment}>INCREMENT</button>
        <h3> Hi {fullname}</h3>
        <input
          type="text"
          placeholder="Enter Your Name "
          onChange={inputevent}
          value={inputnow}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </Aux>
  );
}
export default App;
