import React from "react";
import { create } from "react-test-renderer";

import { FieldsetLegend } from "./Fieldset";

describe("FieldsetLegend", () => {
  it("renders correctly with all props", () => {
    const component = create(
      <FieldsetLegend id="Testid" className="class1 class2" isPageHeading>
        Test
      </FieldsetLegend>
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly without optional props", () => {
    const component = create(<FieldsetLegend />);

    expect(component).toMatchSnapshot();
  });
});
