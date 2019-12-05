import React from "react";
import { create } from "react-test-renderer";

import { Main } from "./Main";

it("renders correctly with all props", () => {
  const component = create(
    <Main id="test" className="class1 class2">
      Test
    </Main>
  );

  expect(component).toMatchInlineSnapshot(`
    <main
      className="govuk-main-wrapper lbh-main-wrapper class1 class2"
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
