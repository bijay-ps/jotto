import checkPropTypes from "check-prop-types";

export const findById = (wrapper, val) => {
  return wrapper.find(`#${val}`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "props",
    component.name
  );
  expect(propError).toBeUndefined();
};
