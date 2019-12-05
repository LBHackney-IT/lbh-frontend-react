import React from "react";
import { create } from "react-test-renderer";

import { Hint } from "./Hint";

it("renders correctly with all props", () => {
  const component = create(
    <Hint id="test" className="class1 class2">
      Test
    </Hint>
  );

  expect(component).toMatchInlineSnapshot(`
    <span
      className="govuk-hint class1 class2"
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
      className="govuk-hint"
    >
      Test
    </span>
  `);
});
