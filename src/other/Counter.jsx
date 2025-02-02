import { useState } from "react";

const Counter = (Maincomponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);
    function handleIncreseCount() {
      setCount(count + 1);
    }
    return (
      <Maincomponent count={count} handleIncreseCount={handleIncreseCount} />
    );
  };
  return WithCounter;
};
export default Counter;
