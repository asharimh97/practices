import checkPropTypes from "check-prop-types";

/**
 * Function to find a component with `data-test` attribute
 * @param {ShallowWrapper} wrapper - Shallowed component.
 * @param {String} val -  `data-test` attribute value.
 * @return {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Function to validate/test if component is appear on component
 * @param {ShallowWrapper} wrapper - Shallowed component.
 * @param {String} componentName - component name to look out.
 */
export const findComponent = (wrapper, componentName) => {
  const comp = findByTestAttribute(wrapper, componentName);
  expect(comp.length).toBe(1);
};

/**
 * Function to validate propTypes in component
 * @param {Node} component - React component being tested.
 * @param {Object} incomingProps - Incoming prop to be validated
 */
export const checkProps = (component, incomingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    incomingProps,
    "prop",
    component.name
  );

  expect(propsError).toBeUndefined();
};
