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

    expect(component).toMatchSnapshot();
  });

  it("renders correctly without optional props", () => {
    const component = create(<Fieldset>TestFieldsetChildren</Fieldset>);

    expect(component).toMatchSnapshot();
  });
});
