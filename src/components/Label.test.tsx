import React from "react";
import { create } from "react-test-renderer";

import { Label } from "./Label";

it("renders correctly with all props", () => {
  const component = create(
    <Label id="testId" className="class1 class2" labelFor="test">
      Test
    </Label>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<Label>Test</Label>);

  expect(component).toMatchSnapshot();
});
