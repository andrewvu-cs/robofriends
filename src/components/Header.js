import React from "react";
import CounterButton from "./CounterButton";

const Header = React.memo(() => {
  console.log("Header");
  return (
    <div>
      <h1 className="f1">RoboFriends</h1>
      <CounterButton color={"red"} />
    </div>
  );
});

export default Header;
