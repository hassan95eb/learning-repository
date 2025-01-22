import TimeItem from "./TimeItem";

/* eslint-disable react/prop-types */
function TimeList(props) {
  return (
    <div className="time-laps-area">
      {props.children.map((c, index) => {
        return <TimeItem key={index}>{c}</TimeItem>;
      })}
    </div>
  );
}
export default TimeList;
