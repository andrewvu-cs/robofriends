import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";

// Mainly using shallow 99% of the time
// mount does full DOM rendering components that interact with the dom, might take too much time use JSDom
// render() to a static HTML, uses cheerio under the hood.  Between shallow and mount

// shallow rendering is useful because it just renders the component
// One Component at a time/ Unit testing
// Does not assert on the child components
it("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
