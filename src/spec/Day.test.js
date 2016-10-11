import React from 'react';
import ReactDOM from 'react-dom';
import Day from './../components/Day';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Day min="45" max="60" num="1" key="day1"/>, div);
});

it('renders a weather icon', () => {
  const wrapper = shallow(<Day min="45" max="60" num="1" key="day1"/>);
  expect(wrapper.find('img').length).toBe(1);
});
