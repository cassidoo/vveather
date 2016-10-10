import React from 'react';
import ReactDOM from 'react-dom';
import Zipcode from './../components/Zipcode';
import { shallow } from 'enzyme';

it('renders the zip code form without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Zipcode />, div);
});


