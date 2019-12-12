import React from "react";
import { create } from "react-test-renderer";

import { Container } from "./Container";

it("renders correctly with all props", () => {
  const component = create(
    <Container
      id="test"
      className="class1 class2"
      aria-label="test container"
      data-test="test data"
    >
      Test
    </Container>
  );

  expect(component).toMatchInlineSnapshot(`
    <div
      aria-label="test container"
      className="govuk-container lbh-container class1 class2"
      data-test="test data"
      id="test"
    >
      Test
    </div>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Container>Test</Container>);

  expect(component).toMatchInlineSnapshot(`
    <div
      className="govuk-container lbh-container"
    >
      Test
    </div>
  `);
});
