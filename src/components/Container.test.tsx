import React from "react";
import { create } from "react-test-renderer";

import { Container } from "./Container";

it("renders correctly with all props", () => {
  const component = create(
    <Container id="test" className="class1 class2">
      Test
    </Container>
  );

  expect(component).toMatchInlineSnapshot(`
    <div
      className="govuk-container lbh-container class1 class2"
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
