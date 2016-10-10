import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './../components/Weather';
import { shallow } from 'enzyme';

it('renders the weather without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
});

it('renders the location', () => {
  const wrapper = shallow(<Weather />);
  expect(wrapper.find('Location').length).toBe(1);
});
