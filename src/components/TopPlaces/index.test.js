import React from "react";
import TopPlaces from "./index";

import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
    wrapper = shallow(<TopPlaces />);
});

it('renders without crashing', () => {
  expect(wrapper.exists()).toBeTruthy();
});

it('render links correctly', () => {
    expect(wrapper.find('li').length).toEqual(4);
});
