import React from 'react';
import ReactDOM from 'react-dom';
import Location from './../components/Location';
import { shallow } from 'enzyme';

it('renders the location without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Location />, div);
});

it('renders Zipcode component', () => {
  const wrapper = shallow(<Location />);
  expect(wrapper.find('Zipcode').length).toBe(1);
});
