import React from "react";
import renderer from "react-test-renderer";

import { ErrorMessage } from "./ErrorMessage";

it("renders correctly without optional props", () => {
  const component = renderer.create(<ErrorMessage />);

  expect(component).toMatchSnapshot();
});

it("renders correctly with all props", () => {
  const component = renderer.create(
    <ErrorMessage
      id={"1234"}
      className={"class1 class2"}
      visuallyHiddenText={"visually hidden text"}
    >
      <span> Test </span>
    </ErrorMessage>
  );

  expect(component).toMatchSnapshot();
});