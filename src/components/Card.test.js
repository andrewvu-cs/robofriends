import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";
import toJson from 'enzyme-to-json'

// Mainly using shallow 99% of the time
// mount does full DOM rendering components that interact with the dom, might take too much time use JSDom
// render() to a static HTML, uses cheerio under the hood.  Between shallow and mount

// shallow rendering is useful because it just renders the component
// One Component at a time/ Unit testing
// Does not assert on the child components

// Taking a snapshot is like caching and makes testing faster
it("expect to render Card component", () => {
const wrapper = shallow(<Card/>)
  expect(toJson(wrapper)).toMatchSnapshot();
});
