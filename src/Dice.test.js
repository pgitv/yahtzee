import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dice from './Dice';

it('renders shallowly without crashing', function() {
  shallow(<Dice handleClick={null} locked={[false]} dice={[1]} />);
});

it('passes snapshot test UNlock', function() {
  let wrapper = shallow(
    <Dice handleClick={null} locked={[false]} dice={[1]} />
  );
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('passes snapshot test Locked', function() {
  let wrapper = shallow(<Dice handleClick={null} locked={[true]} dice={[1]} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
