import React from "react";
import { create } from "react-test-renderer";

import { Label } from "./Label";

it("renders correctly with all props", () => {
  const component = create(
    <Label
      id="testId"
      className="class1 class2"
      labelFor="test"
      aria-label="test label"
      data-test="test data"
    >
      Test
    </Label>
  );

  expect(component).toMatchInlineSnapshot(`
    <label
      aria-label="test label"
      className="govuk-label lbh-label class1 class2"
      data-test="test data"
      htmlFor="test"
      id="testId"
    >
      Test
    </label>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Label>Test</Label>);

  expect(component).toMatchInlineSnapshot(`
    <label
      className="govuk-label lbh-label"
    >
      Test
    </label>
  `);
});
