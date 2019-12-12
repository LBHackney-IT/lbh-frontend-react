import React from "react";
import { create } from "react-test-renderer";

import { FormGroup } from "./FormGroup";

it("renders correctly with all props", () => {
  const component = create(
    <FormGroup
      id="Testid"
      className="class1 class2"
      error={true}
      aria-label="test form group"
      data-test="test data"
    >
      TestFormGroupChildren
    </FormGroup>
  );

  expect(component).toMatchInlineSnapshot(`
    <div
      aria-label="test form group"
      className="govuk-form-group lbh-form-group class1 class2 govuk-form-group--error lbh-form-group--error"
      data-test="test data"
      id="Testid"
    >
      TestFormGroupChildren
    </div>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<FormGroup>TestFormGroupChildren</FormGroup>);

  expect(component).toMatchInlineSnapshot(`
    <div
      className="govuk-form-group lbh-form-group"
    >
      TestFormGroupChildren
    </div>
  `);
});
