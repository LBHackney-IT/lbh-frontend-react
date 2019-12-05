import React from "react";
import { create } from "react-test-renderer";

import { Tag } from "./Tag";

it("renders correctly without optional props", () => {
  const component = create(<Tag>Testchildren</Tag>);

  expect(component).toMatchInlineSnapshot(`
    <strong
      className="govuk-tag lbh-tag"
    >
      Testchildren
    </strong>
  `);
});

it("renders correctly with all props", () => {
  const component = create(
    <Tag id="Testid" className="class1 class2">
      <span>Test</span>
    </Tag>
  );

  expect(component).toMatchInlineSnapshot(`
    <strong
      className="govuk-tag lbh-tag class1 class2"
      id="Testid"
    >
      <span>
        Test
      </span>
    </strong>
  `);
});
