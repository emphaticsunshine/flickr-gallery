import React from "react";
import Place from "./";

import { shallow, mount } from "enzyme";



it('renders without crashing', () => {
  const wrapper = shallow(<Place />);
  expect(wrapper.exists()).toBeTruthy();
});

it('renders 404 without any search term', () => {
    const wrapper = mount(<Place />);
    expect(wrapper.text()).toEqual('Following page was not found.');
});

it('displays loader when no content loader', () => {
    const wrapper = mount(<Place match={{
        params: {
            id: 'new york'
        }
    }} />)

    expect(wrapper.find('Loader').exists()).toBeTruthy();
});