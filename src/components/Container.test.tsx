import React from "react";
import { create } from "react-test-renderer";

import { Container } from "./Container";

it("renders correctly with all props", () => {
  const component = create(
    <Container id="test" className="class1 class2">
      Test
    </Container>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<Container>Test</Container>);

  expect(component).toMatchSnapshot();
});
