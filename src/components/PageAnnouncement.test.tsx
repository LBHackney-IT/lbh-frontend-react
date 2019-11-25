import React from "react";
import { create } from "react-test-renderer";

import { PageAnnouncement } from "./PageAnnouncement";

it("renders correctly with all props", () => {
  const component = create(
    <PageAnnouncement id="test" className="class1 class2" title="testTitle">
      children
    </PageAnnouncement>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(
    <PageAnnouncement title="testTitle">children</PageAnnouncement>
  );

  expect(component).toMatchSnapshot();
});
