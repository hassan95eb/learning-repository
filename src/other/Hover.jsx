/* eslint-disable react/prop-types */

const Hover = ({ count, handleIncreseCount }) => {
  return (
    <button
      className="btn btn-info me-2 d-block"
      onMouseEnter={handleIncreseCount}
    >
      Hover : {count}
    </button>
  );
};
export default Hover;
