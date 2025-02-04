import { useReducer } from "react";
let initialState = 0;
function counterReducer(state, action) {
  switch (action) {
    case "incresment":
      return state + 1;
    case "decresement":
      return state - 1;
    default:
      return state;
  }
}
const Click = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1 className="text-center">{count}</h1>
      <button
        className="btn btn-success"
        onClick={() => dispatch("incresment")}
      >
        increse
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch("decresement")}
      >
        decrese
      </button>
    </div>
  );
};
export default Click;
