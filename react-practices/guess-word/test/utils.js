import checkPropTypes from "check-prop-types";

export const findByTestAttributes = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, incomingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    incomingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
}
