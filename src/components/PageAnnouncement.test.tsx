import React from "react";
import { create } from "react-test-renderer";

import { PageAnnouncement } from "./PageAnnouncement";

it("renders correctly with all props", () => {
  const component = create(
    <PageAnnouncement
      id="test"
      className="class1 class2"
      title="testTitle"
      aria-label="test page announcement"
      data-test="test data"
    >
      children
    </PageAnnouncement>
  );

  expect(component).toMatchInlineSnapshot(`
    <section
      aria-label="test page announcement"
      className="lbh-page-announcement class1 class2"
      data-test="test data"
      id="test"
    >
      <h3
        className="lbh-page-announcement__title"
      >
        testTitle
      </h3>
      <div
        className="lbh-page-announcement__content"
      >
        children
      </div>
    </section>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(
    <PageAnnouncement title="testTitle">children</PageAnnouncement>
  );

  expect(component).toMatchInlineSnapshot(`
    <section
      className="lbh-page-announcement"
    >
      <h3
        className="lbh-page-announcement__title"
      >
        testTitle
      </h3>
      <div
        className="lbh-page-announcement__content"
      >
        children
      </div>
    </section>
  `);
});
