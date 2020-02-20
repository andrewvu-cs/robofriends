import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";
import toJson from 'enzyme-to-json'

// CardList maps robots we need to pass is robots to our cardlist

const mockRobots = [
    {
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
    }
]
it("expect to render Card component", () => {
const wrapper = shallow(<CardList robots={mockRobots}/>)
  expect(toJson(wrapper)).toMatchSnapshot();
});
