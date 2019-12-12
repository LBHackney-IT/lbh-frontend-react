import React from "react";
import { create } from "react-test-renderer";

import { List, ListTypes } from "./List";

it("renders an unordered correctly with all props", () => {
  const component = create(
    <List
      id="test"
      className="class1 class2"
      type={ListTypes.Number}
      // eslint-disable-next-line react/jsx-key
      items={["TestItem", <List items={["TestItem2", "TestItem3"]} />]}
      aria-label="test list"
      data-test="test data"
    />
  );

  expect(component).toMatchInlineSnapshot(`
    <ol
      aria-label="test list"
      className="govuk-list lbh-list lbh-list--number govuk-list--number class1 class2"
      data-test="test data"
      id="test"
    >
      <li>
        TestItem
      </li>
      <li>
        <ul
          className="govuk-list lbh-list"
        >
          <li>
            TestItem2
          </li>
          <li>
            TestItem3
          </li>
        </ul>
      </li>
    </ol>
  `);
});

it("renders an ordered list correctly", () => {
  const component = create(
    <List type={ListTypes.Bullet} items={["TestItem", "TestItem2"]} />
  );

  expect(component).toMatchInlineSnapshot(`
    <ul
      className="govuk-list lbh-list lbh-list--bullet govuk-list--bullet"
    >
      <li>
        TestItem
      </li>
      <li>
        TestItem2
      </li>
    </ul>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<List items={["TestItem", "TestItem2"]} />);

  expect(component).toMatchInlineSnapshot(`
    <ul
      className="govuk-list lbh-list"
    >
      <li>
        TestItem
      </li>
      <li>
        TestItem2
      </li>
    </ul>
  `);
});
