/* eslint-disable react/prop-types */
const Click = ({ count, handleIncreseCount }) => {
  return (
    <button className="btn btn-info d-block" onClick={handleIncreseCount}>
      Click : {count}
    </button>
  );
};
export default Click;
