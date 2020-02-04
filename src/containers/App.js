import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import "./App.css";
import "tachyons";
import Axios from "axios";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setRobots(res.data);
    });
  }, []);

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />

      {filteredRobots.length ? (
        <h2 style={{marginTop: '50%'}}>CANNOT COMPUTE...</h2>

      ) : (
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      )}
    </div>
  );
}

export default App;
