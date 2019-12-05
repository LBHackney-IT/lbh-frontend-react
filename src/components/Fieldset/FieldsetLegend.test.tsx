import React from "react";
import { create } from "react-test-renderer";

import { FieldsetLegend } from "./FieldsetLegend";

it("renders correctly with all props", () => {
  const component = create(
    <FieldsetLegend id="Testid" className="class1 class2" isPageHeading>
      Test
    </FieldsetLegend>
  );

  expect(component).toMatchInlineSnapshot(`
    <legend
      className="govuk-fieldset__legend lbh-fieldset__legend class1 class2"
      id="Testid"
    >
      <h1
        className="govuk-fieldset__heading lbh-fieldset__heading"
      >
        Test
      </h1>
    </legend>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<FieldsetLegend>Test</FieldsetLegend>);

  expect(component).toMatchInlineSnapshot(`
    <legend
      className="govuk-fieldset__legend lbh-fieldset__legend"
    >
      Test
    </legend>
  `);
});
