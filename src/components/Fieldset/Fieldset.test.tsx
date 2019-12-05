import React from "react";
import { create } from "react-test-renderer";

import { Fieldset } from "./Fieldset";
import { FieldsetLegend } from "./FieldsetLegend";

describe("Fieldset", () => {
  it("renders correctly with all props", () => {
    const component = create(
      <Fieldset
        id="Testid"
        className="class1 class2"
        describedBy="TestDescribedBy"
        role="test"
        legend={
          <FieldsetLegend id="Testid" className="class3" isPageHeading>
            TestLegend
          </FieldsetLegend>
        }
      >
        TestFieldsetChildren
      </Fieldset>
    );

    expect(component).toMatchInlineSnapshot(`
      <fieldset
        aria-describedby="TestDescribedBy"
        className="govuk-fieldset lbh-fieldset class1 class2"
        id="Testid"
        role="test"
      >
        <legend
          className="govuk-fieldset__legend lbh-fieldset__legend class3"
          id="Testid"
        >
          <h1
            className="govuk-fieldset__heading lbh-fieldset__heading"
          >
            TestLegend
          </h1>
        </legend>
        TestFieldsetChildren
      </fieldset>
    `);
  });

  it("renders correctly without optional props", () => {
    const component = create(<Fieldset>TestFieldsetChildren</Fieldset>);

    expect(component).toMatchInlineSnapshot(`
      <fieldset
        className="govuk-fieldset lbh-fieldset"
      >
        TestFieldsetChildren
      </fieldset>
    `);
  });
});
