import React from "react";
import { create } from "react-test-renderer";

import { SummaryList } from "./SummaryList";
import { Link } from "./Link";

it("renders correctly with all props", () => {
  const link = (
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
  const oneLink = [link];
  const twoLinks = [link, link];
  const component = create(
    <SummaryList
      id="test"
      className="class1 class2"
      rows={[
        {
          key: "TestKey",
          value: "TestValue",
          actions: oneLink,
        },
        { key: "TestKey2", value: "TestValue2", actions: twoLinks },
      ]}
      aria-label="test summary list"
      data-test="test data"
    />
  );

  expect(component).toMatchInlineSnapshot(`
    <dl
      aria-label="test summary list"
      className="govuk-summary-list lbh-summary-list class1 class2"
      data-test="test data"
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
        <dd
          className="govuk-summary-list__actions"
        >
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
        <dd
          className="govuk-summary-list__actions"
        >
          <ul
            className="govuk-summary-list__actions-list"
          >
            <li
              className="govuk-summary-list__actions-list-item"
            >
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
            </li>
            <li
              className="govuk-summary-list__actions-list-item"
            >
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
            </li>
          </ul>
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
