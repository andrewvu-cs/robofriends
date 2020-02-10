import React, { useState, useEffect, useCallback } from "react";
import {useSelector, useDispatch } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import "tachyons";
import Axios from "axios";
import { setSearchField } from "../actions";


// tell me whhat props i should listen to for actions to get dispatched


function App({props}) {
  const [robots, setRobots] = useState([]);
  // const {searchField, onSearchChange} = this.props;

  const searchField = useSelector(state => state.searchField)
  const dispatch = useDispatch();

  const updateSearchField = useCallback(
    (event) => dispatch(setSearchField(event.target.value)),
    [dispatch]
  )

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
      setRobots(res.data);
    });
  }, []);

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
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

export default (App);
