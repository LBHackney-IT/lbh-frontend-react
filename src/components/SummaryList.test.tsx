import React from "react";
import { create } from "react-test-renderer";

import { SummaryList } from "./SummaryList";

it("renders correctly with all props", () => {
  const component = create(
    <SummaryList
      id="test"
      className="class1 class2"
      rows={[
        { key: "TestKey", value: "TestValue" },
        { key: "TestKey2", value: "TestValue2" }
      ]}
    />
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(
    <SummaryList rows={[{ key: "TestKey", value: "TestValue" }]} />
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly with an empty array of rows", () => {
  const component = create(<SummaryList rows={[]} />);

  expect(component).toMatchSnapshot();
});
