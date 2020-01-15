import React from "react";
import { create } from "react-test-renderer";

import { Link } from "./Link";

it("renders correctly with all props", () => {
  const component = create(
    <Link
      id="testId"
      className="class1"
      href="/"
      target="_blank"
      aria-label="test link"
      data-test="test data"
    >
      Link
    </Link>
  );
  expect(component).toMatchInlineSnapshot(`
    <a
      aria-label="test link"
      className="govuk-link lbh-link class1"
      data-test="test data"
      href="/"
      id="testId"
      target="_blank"
    >
      Link
    </a>
  `);
});

it("renders with only required props", () => {
  const component = create(<Link href="/">Link</Link>);

  expect(component).toMatchInlineSnapshot(`
    <a
      className="govuk-link lbh-link"
      href="/"
    >
      Link
    </a>
  `);
});
