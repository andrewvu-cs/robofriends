import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robotsList } from "./robots";
import "tachyons";

function App() {
  const [robots, setRobots] = useState(robotsList);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = event => {
        setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
