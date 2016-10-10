import React from 'react';
import ReactDOM from 'react-dom';
import Location from './../components/Location';
import { shallow } from 'enzyme';

it('renders the location without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Location />, div);
});

