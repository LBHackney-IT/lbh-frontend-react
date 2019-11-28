import React from "react";
import { create } from "react-test-renderer";

import { Heading, HeadingLevels } from "./Heading";

it("renders correctly with all props", () => {
  const component = create(
    <Heading id="1234" className="class1" level={HeadingLevels.H1}>
      Heading level 1
    </Heading>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(
    <Heading level={HeadingLevels.H2}>Heading level 2</Heading>
  );

  expect(component).toMatchSnapshot();
});
