import style from "../style.module.css";
import Click from "./Click";
import Counter from "./Counter";
import Hover from "./Hover";

const EnhancedHover = Counter(Hover);
const Others = () => {
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center"> سایر </h4>
      <hr />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Click />
        <br />
        <EnhancedHover />
      </div>
    </div>
  );
};
export default Others;
