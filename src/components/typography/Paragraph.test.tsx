import React from "react";
import { create } from "react-test-renderer";

import { Paragraph, ParagraphSize } from "./Paragraph";

it("renders correctly with all props", () => {
  const component = create(
    <Paragraph id="test" className="testClass" size={ParagraphSize.L}>
      Test
    </Paragraph>
  );

  expect(component).toMatchInlineSnapshot(`
    <p
      className="lbh-body-l testClass"
      id="test"
    >
      Test
    </p>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Paragraph>Test</Paragraph>);

  expect(component).toMatchInlineSnapshot(`
    <p
      className="lbh-body"
    >
      Test
    </p>
  `);
});
