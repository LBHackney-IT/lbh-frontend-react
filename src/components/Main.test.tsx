import React from "react";
import { create } from "react-test-renderer";

import { Main } from "./Main";

it("renders correctly with all props", () => {
  const component = create(
    <Main
      id="test"
      className="class1 class2"
      aria-label="test main"
      data-test="test data"
    >
      Test
    </Main>
  );

  expect(component).toMatchInlineSnapshot(`
    <main
      aria-label="test main"
      className="govuk-main-wrapper lbh-main-wrapper class1 class2"
      data-test="test data"
      id="test"
      role="main"
    >
      Test
    </main>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Main>Test</Main>);

  expect(component).toMatchInlineSnapshot(`
    <main
      className="govuk-main-wrapper lbh-main-wrapper"
      id="main-content"
      role="main"
    >
      Test
    </main>
  `);
});
