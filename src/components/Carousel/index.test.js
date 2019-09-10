import React from "react";
import { mount } from "enzyme";

import Carousel from "./";
import data from "../../mocks/photos.json";


it('renders without crashing', () => {
  const wrapper = mount(<Carousel data={data} slideRenderer={() => {}}/>);
  expect(wrapper.exists()).toBeTruthy();
});

it('renders slide', () => {
    const wrapper = mount(<Carousel data={data} slideRenderer={() => {}}/>);
    expect(wrapper.find('.slide').length).toEqual(5);
});

describe('shows arrows accuratenly', () => {
    it('hides previouse arrow', () => {
        const wrapper = mount(<Carousel data={data} slideRenderer={() => {}}/>);
        expect(wrapper.find('.slider').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-next').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-prev').exists()).toBeFalsy();
    });

    it('shows previous arrow', () => {
        const wrapper = mount(<Carousel data={data} slideRenderer={() => {}} selectedIdx={2}/>);
        expect(wrapper.find('.slider').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-next').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-prev').exists()).toBeTruthy();
    });

    it('hides next arrow', () => {
        const wrapper = mount(<Carousel data={data} slideRenderer={() => {}} selectedIdx={data.length - 1}/>);
        expect(wrapper.find('.slider').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-next').exists()).toBeFalsy();
        expect(wrapper.find('.arrow-prev').exists()).toBeTruthy();
    });

    it('hides previous arrow and display on next click', () => {
        const wrapper = mount(<Carousel data={data} slideRenderer={() => {}}/>);
        expect(wrapper.find('.slider').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-next').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-prev').exists()).toBeFalsy();
        wrapper.find('.arrow-next').simulate('click');
        expect(wrapper.find('.arrow-prev').exists()).toBeTruthy();
    });

    it('hides next arrow and display on prev click', () => {
        const myMock = jest.fn();
        const wrapper = mount(<Carousel data={data} slideRenderer={myMock} selectedIdx={data.length - 1}/>);
        expect(wrapper.find('.slider').exists()).toBeTruthy();
        expect(wrapper.find('.arrow-next').exists()).toBeFalsy();
        expect(wrapper.find('.arrow-prev').exists()).toBeTruthy();
        expect(myMock).toHaveBeenCalled();
        wrapper.find('.arrow-prev').simulate('click');
        expect(wrapper.find('.arrow-next').exists()).toBeTruthy();
        expect(myMock.mock.calls[5][0].id).toEqual("8231720159");
    });
});

