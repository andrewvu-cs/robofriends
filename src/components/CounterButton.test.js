import { shallow, mount } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";
import toJson from "enzyme-to-json";

// CounterButton maps robots we need to pass is robots to our cardlist

it("expect to render Card component", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");

  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });

  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual('red' );
});
