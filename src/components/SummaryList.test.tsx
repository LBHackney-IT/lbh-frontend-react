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

  expect(component).toMatchInlineSnapshot(`
    <dl
      className="govuk-summary-list lbh-summary-list class1 class2"
      id="test"
    >
      <div
        className="govuk-summary-list__row lbh-summary-list__row"
      >
        <dt
          className="govuk-summary-list__key lbh-summary-list__key"
        >
          TestKey
        </dt>
        <dd
          className="govuk-summary-list__value lbh-summary-list__value"
        >
          TestValue
        </dd>
      </div>
      <div
        className="govuk-summary-list__row lbh-summary-list__row"
      >
        <dt
          className="govuk-summary-list__key lbh-summary-list__key"
        >
          TestKey2
        </dt>
        <dd
          className="govuk-summary-list__value lbh-summary-list__value"
        >
          TestValue2
        </dd>
      </div>
    </dl>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(
    <SummaryList rows={[{ key: "TestKey", value: "TestValue" }]} />
  );

  expect(component).toMatchInlineSnapshot(`
    <dl
      className="govuk-summary-list lbh-summary-list"
    >
      <div
        className="govuk-summary-list__row lbh-summary-list__row"
      >
        <dt
          className="govuk-summary-list__key lbh-summary-list__key"
        >
          TestKey
        </dt>
        <dd
          className="govuk-summary-list__value lbh-summary-list__value"
        >
          TestValue
        </dd>
      </div>
    </dl>
  `);
});

it("renders correctly with an empty array of rows", () => {
  const component = create(<SummaryList rows={[]} />);

  expect(component).toMatchInlineSnapshot(`
    <dl
      className="govuk-summary-list lbh-summary-list"
    />
  `);
});
