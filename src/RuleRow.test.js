import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RuleRow from './RuleRow';

it('renders shallowly without crashing', function() {
  shallow(<RuleRow />);
});

it('passes snapshot test without a click', function() {
  let wrapper = shallow(<RuleRow />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
