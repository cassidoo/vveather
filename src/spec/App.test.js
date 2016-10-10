import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import Weather from './../components/Weather';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the weather', () => {
  const wrapper = shallow(<App />);
  const weather = <Weather />;

  expect(wrapper.contains(weather)).toEqual(true);
});
