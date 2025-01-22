import { useState } from "react";
import Timer from "./Timer";
import "./style.css";
import NightMode from "./NightMode";

export default function App() {
  const [isLight, setisLight] = useState(false);
  function handleIsLight() {
    setisLight(!isLight);
  }
  return (
    <div className={`main ${isLight ? " light" : ""}`}>
      <NightMode isLight={isLight} handleIsLight={handleIsLight} />
      <Timer />
    </div>
  );
}
