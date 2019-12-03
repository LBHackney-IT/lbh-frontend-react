import React from "react";
import { create } from "react-test-renderer";

import { Main } from "./Main";

it("renders correctly with all props", () => {
  const component = create(
    <Main id="test" className="class1 class2">
      Test
    </Main>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<Main>Test</Main>);

  expect(component).toMatchSnapshot();
});
