import React from "react";
import { create } from "react-test-renderer";

import { Paragraph, ParagraphSize } from "./Paragraph";

it("renders correctly with all props", () => {
  const component = create(
    <Paragraph
      id="test"
      className="testClass"
      size={ParagraphSize.L}
      aria-label="test paragraph"
      data-test="test data"
    >
      Test
    </Paragraph>
  );

  expect(component).toMatchInlineSnapshot(`
    <p
      aria-label="test paragraph"
      className="lbh-body-l testClass"
      data-test="test data"
      id="test"
    >
      <div>
         
        Test
      </div>
    </p>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Paragraph>Test</Paragraph>);

  expect(component).toMatchInlineSnapshot(`
    <p
      className="lbh-body"
    >
      <div>
         
        Test
      </div>
    </p>
  `);
});
