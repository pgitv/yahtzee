import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ScoreTable from './ScoreTable';

it('renders shallowly without crashing', function() {
  shallow(<ScoreTable scores={{ twos: 0 }} doScore={null} />);
});

it('passes snapshot test without a click', function() {
  let wrapper = shallow(<ScoreTable scores={{ twos: 0 }} doScore={null} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
