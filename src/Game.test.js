import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game from './Game';

it('renders shallowly without crashing', function() {
  shallow(<Game />);
});

it('passes snapshot test after clicking locked', function() {
  let wrapper = mount(<Game />);
  let clicked = wrapper.find('.Die').at(0);
  let serialized = toJson(wrapper);
  clicked.simulate('click');
  expect(wrapper.state().locked[0]).toBe(true);
});
