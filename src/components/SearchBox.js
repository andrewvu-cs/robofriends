import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      {/* <label className="label" for="searchRobots">Looking for a robot?</label> */}
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        aria-label="Search Robots"
        onChange={searchChange}
        value={searchfield}
        id="searchRobots"
      />
    </div>
  );
};

export default SearchBox;
