import React from "react";
import { create } from "react-test-renderer";

import { Hint } from "./Hint";

it("renders correctly with all props", () => {
  const component = create(
    <Hint
      id="test"
      className="class1 class2"
      aria-label="test hint"
      data-test="test data"
    >
      Test
    </Hint>
  );

  expect(component).toMatchInlineSnapshot(`
    <span
      aria-label="test hint"
      className="govuk-hint lbh-hint class1 class2"
      data-test="test data"
      id="test"
    >
      Test
    </span>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Hint>Test</Hint>);

  expect(component).toMatchInlineSnapshot(`
    <span
      className="govuk-hint lbh-hint"
    >
      Test
    </span>
  `);
});
