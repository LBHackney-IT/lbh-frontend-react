import React from "react";
import { create } from "react-test-renderer";

import { ErrorMessage } from "./ErrorMessage";

it("renders correctly with all props", () => {
  const component = create(
    <ErrorMessage
      id="1234"
      className="class1 class2"
      visuallyHiddenText="visually hidden text"
    >
      test <strong>error</strong> message
    </ErrorMessage>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<ErrorMessage />);

  expect(component).toMatchSnapshot();
});
