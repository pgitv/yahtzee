import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Die from './Die';

it('renders shallowly without crashing', function() {
  shallow(<Die handleClick={null} />);
});

it('passes snapshot test changing state to unlocked', function() {
  let wrapper = shallow(<Die handleClick={null} locked={false} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('passes snapshot test after changing state to locked', function() {
  let wrapper = shallow(<Die handleClick={null} locked={true} />);
  //   let clicked = wrapper.find('.Die').at(0); //Check higher
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// ``` jsx
// import React from "react";
// import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
// import GoodComponent from "./GoodComponent";

// // smoke test
// it("renders without crashing", function() {
//   shallow(<GoodComponent />);
// });

// // snapshot test
// it("matches snapshot", function() {
//   let wrapper = shallow(<GoodComponent />);
//   let serialized = toJson(wrapper);
//   expect(serialized).toMatchSnapshot();
// });
// ```
