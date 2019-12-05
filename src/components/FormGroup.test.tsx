import React from "react";
import { create } from "react-test-renderer";

import { FormGroup } from "./FormGroup";

it("renders correctly with all props", () => {
  const component = create(
    <FormGroup id="Testid" className="class1 class2" error={true}>
      TestFormGroupChildren
    </FormGroup>
  );

  expect(component).toMatchInlineSnapshot(`
    <div
      className="govuk-form-group lbh-form-group class1 class2 govuk-form-group--error lbh-form-group--error"
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
