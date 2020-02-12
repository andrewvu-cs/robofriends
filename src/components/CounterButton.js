import React, { useState } from "react";

const CounterButton = React.memo(({ color }) => {
  const [count, setCount] = useState(0);
  console.log("CounterButton");
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <button color={color} onClick={() => updateCount()}>
      Count: {count}
    </button>
  );
});

export default CounterButton;
