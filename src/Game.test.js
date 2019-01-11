import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game from './Game';
import Die from './Die';
it('renders shallowly without crashing', function() {
  shallow(<Game />);
});

it('passes snapshot test after clicking locked', function() {
  let wrapper = mount(<Game />);
  let clicked = wrapper.find(Die).at(0);
  let serialized = toJson(wrapper);
  clicked.simulate('click');
  expect(wrapper.state().locked[0]).toBe(true);
});

it('checks that the user is not able to roll after 3 tries even if the die is unlocked', function() {
  let wrapper = mount(<Game />);
  let unlockDie = wrapper.find('.Die').at(0);
  let rollBtn = wrapper.find('.Game-reroll');
  rollBtn.simulate('click');
  rollBtn.simulate('click');
  rollBtn.simulate('click');
  unlockDie.simulate('click');
  rollBtn.simulate('click');
  expect(wrapper.state().rollsLeft).toBe(0);
});

it('checks if RuleRow is disabled', function() {
  let wrapper = mount(<Game />);
  let ruleRowSelector = wrapper.find('.RuleRow').at(0);
  ruleRowSelector.simulate('click');
  ruleRowSelector = wrapper.find('.RuleRow').at(0); // Need to regrab the element after the click
  expect(ruleRowSelector.props().onClick).toBe(null);
});
