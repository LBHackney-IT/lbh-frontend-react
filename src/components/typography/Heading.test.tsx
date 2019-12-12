import React from "react";
import { create } from "react-test-renderer";

import { Heading, HeadingLevels } from "./Heading";

it("renders correctly with all props", () => {
  const component = create(
    <Heading
      id="1234"
      className="class1"
      level={HeadingLevels.H1}
      aria-label="test heading"
      data-test="test data"
    >
      Heading level 1
    </Heading>
  );

  expect(component).toMatchInlineSnapshot(`
    <h1
      aria-label="test heading"
      className="lbh-heading-h1 class1"
      data-test="test data"
      id="1234"
    >
      Heading level 1
    </h1>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(
    <Heading level={HeadingLevels.H2}>Heading level 2</Heading>
  );

  expect(component).toMatchInlineSnapshot(`
    <h2
      className="lbh-heading-h2"
    >
      Heading level 2
    </h2>
  `);
});
