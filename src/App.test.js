import React from "react";
import App from "./App";

import { shallow } from "enzyme";

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBeTruthy();
});

it('renders layout', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Layout').exists()).toBeTruthy();
});
