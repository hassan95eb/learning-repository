import { useContext } from "react";
import TimeItem from "./TimeItem";
import { TestContext } from "./TestContext";
/* eslint-disable react/prop-types */
function TimeList() {
  const context = useContext(TestContext);
  // console.log(context);
  return (
    <div className="time-laps-area">
      {context.timeLaps.map((c, index) => {
        return <TimeItem key={index}>{c}</TimeItem>;
      })}
    </div>
  );
}
export default TimeList;
