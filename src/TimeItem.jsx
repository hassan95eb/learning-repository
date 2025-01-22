import { useContext } from "react";
import { TestContext } from "./TestContext";

/* eslint-disable react/prop-types */
const TimeItem = (props) => {
  const context = useContext(TestContext);
  const handleClickDelete = (e) => {
    context.setTimeLaps(
      context.timeLaps.filter((t) => t != e.target.innerHTML)
    );
  };
  return <div onClick={handleClickDelete}>{props.children}</div>;
};
export default TimeItem;
