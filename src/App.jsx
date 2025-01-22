import { useState } from "react";
import Timer from "./Timer";
import "./style.css";
import NightMode from "./NightMode";
import { TestContext } from "./TestContext";
import TimeList from "./TimeList";

export default function App() {
  const [isLight, setisLight] = useState(false);
  const [timeLaps, setTimeLaps] = useState([]);
  function handleIsLight() {
    setisLight(!isLight);
  }
  return (
    <TestContext.Provider
      value={{
        timeLaps,
        setTimeLaps,
      }}
    >
      <div className={`main ${isLight ? " light" : ""}`}>
        <NightMode isLight={isLight} handleIsLight={handleIsLight} />
        <Timer />
        <TimeList />
      </div>
    </TestContext.Provider>
  );
}
