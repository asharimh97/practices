import React from 'react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('test click counter', () => {
  /**
   * Factory function to create a ShallowWrapper for the App component.
   * @function setup
   * @param {object} props - Component props specific to this setup.
   * @param {object} state - Initial state for setup.
   * @returns {ShallowWrapper}
  */

  const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);

    return wrapper;
  }

  /**
   * Return ShallowWrapper containing node(s) with the given `data-test` value.
   * @function findByTestAttribute
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
   * @param {string} val - Value of `data-test` attribute.
   * @returns {ShallowWrapper}
  */
  const findByTestAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

  it('renders without crashing', () => {
    const wrapper = setup();
    const appComponent = findByTestAttribute(wrapper, "component-app");

    expect(appComponent.length).toBe(1);
  });

  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "button-increment");

    expect(button.length).toBe(1);
  });

  test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttribute(wrapper, "display-counter");

    expect(counterDisplay.length).toBe(1);
  });

  test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state("counter");

    expect(initialCounterState).toBe(0);
  });

  test('clicking button increments counter', () => {
    const counter = 3;
    const wrapper = setup(null, { counter });

    // find button increment and simulate click
    const button = findByTestAttribute(wrapper, "button-increment");
    button.simulate('click');
    wrapper.update();

    // find display counter and test value
    const counterDisplay = findByTestAttribute(wrapper, "display-counter");
    expect(counterDisplay.text()).toContain(counter + 1);
  });

  test('click button decrements counter', () => {
    const counter = 3;
    const wrapper = setup(null, { counter });

    // find button decrement and simulate click
    const button = findByTestAttribute(wrapper, "button-decrement");
    button.simulate('click');
    wrapper.update();

    // find display counter and test the value
    const counterDisplay = findByTestAttribute(wrapper, "display-counter");
    expect(counterDisplay.text()).toContain(counter - 1);
  });

  test('show error when counter will go below 0', () => {
    const state = {
      counter: 0,
      error: false
    };
    const wrapper = setup(null, state);

    // find button decrement and simulate click
    const button = findByTestAttribute(wrapper, "button-decrement");
    button.simulate('click');
    wrapper.update();

    // find display counter and test value doesn't decremented
    const counterDisplay = findByTestAttribute(wrapper, "display-counter");
    expect(counterDisplay.text()).toContain(state.counter);

    // find error message
    expect(wrapper.state('error')).toBe(true);
    const errorMessage = findByTestAttribute(wrapper, "error-message");
    expect(errorMessage.length).toBe(1);
  });

  test('clear error when counter goes above 0', () => {
    const state = {
      counter: 0,
      error: true
    };

    const wrapper = setup(null, state);

    const button = findByTestAttribute(wrapper, "button-increment");
    button.simulate('click');
    wrapper.update();

    const counterDisplay = findByTestAttribute(wrapper, "display-counter");
    expect(counterDisplay.text()).toContain(state.counter + 1);

    expect(wrapper.state('error')).toBe(false);
    const errorMessage = findByTestAttribute(wrapper, "error-message");
    expect(errorMessage.length).toBe(0);
  });

})
