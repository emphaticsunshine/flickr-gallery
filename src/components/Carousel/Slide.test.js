import React from "react";
import { mount } from "enzyme";

import Slide from "./Slide";
import data from "../../mocks/photos.json";


it('renders without crashing', () => {
  const wrapper = mount(<Slide slideData={data} slideRenderer={() => {}} idx={0}/>);
  expect(wrapper.exists()).toBeTruthy();
});

it('call slider for neighbor items', () => {
    const myMock = jest.fn();
    mount(<div>
            {data.map(Slide.bind(null, {selectedIdx: 0, slideRenderer: myMock, width: 100}))}
        </div>
    );
    expect(myMock).toHaveBeenCalledTimes(2);
});

it('call slider for neighbor items', () => {
    const myMock = jest.fn();
    mount(<div>
            {data.map(Slide.bind(null, {selectedIdx: 1, slideRenderer: myMock, width: 100}))}
        </div>
    );
    expect(myMock).toHaveBeenCalledTimes(3);
});
