import React from "react";
import { create } from "react-test-renderer";

import { Link } from "./Link";

it("renders correctly with all props", () => {
  const component = create(
    <Link id="testId" className="class1" href="/">
      Link
    </Link>
  );
  expect(component).toMatchInlineSnapshot(`
    <a
      className="govuk-link lbh-link class1"
      href="/"
      id="testId"
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
