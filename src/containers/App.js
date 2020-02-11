import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import "tachyons";
import { setSearchField, requestRobots } from "../actions";

// tell me whhat props i should listen to for actions to get dispatched

function App() {
  const searchField = useSelector(state => state.searchRobots.searchField);
  const robots = useSelector(state => state.requestRobots.robots);
  const isPending = useSelector(state => state.requestRobots.isPending);
  // const error = useSelector(state => state.requestRobots.error);
  const dispatch = useDispatch();

  const updateSearchField = useCallback(
    event => dispatch(setSearchField(event.target.value)),
    [dispatch]
  );

  const onRequestRobots = useCallback(() => dispatch(requestRobots()), [
    dispatch
  ]);

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox searchChange={updateSearchField} />

      {!filteredRobots.length ? (
        <h2 style={{ marginTop: "50%" }}>CANNOT COMPUTE...</h2>
      ) : (
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      )}
    </div>
  );
}

export default App;
