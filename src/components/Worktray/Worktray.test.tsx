import React from "react";
import { create } from "react-test-renderer";
import { WorkTray, Status } from "./Worktray";
import { shallow } from "enzyme";

const blankRowsData = [
  {
    cells: [
      {
        key: "abc",
        value: "def",
      },
    ],
    workItemLink: "https://hackney.gov.uk",
    workItemId: "123",
    workItemStatus: Status.inProgress,
  },
];

const blankColumnsData = [
  {
    name: "ABC",
    key: "abc",
    dataType: 1,
    dueDateWarning: false,
  },
];

const reassignWorkItem = (workItemId: string): boolean => {
  console.log(workItemId);
  return true;
};

const cancelWorkItem = (workItemId: string): boolean => {
  console.log(workItemId);
  return true;
};

const searchWorkItems = (searchTerm: string): void => {
  console.log(searchTerm);
};

it("renders correctly with no table data passed", () => {
  const component = create(
    <WorkTray
      rows={blankRowsData}
      columns={blankColumnsData}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
    />
  );

  expect(component).toMatchInlineSnapshot(`
    <div
      data-test="worktray-container"
    >
      <table
        className="govuk-table"
        role="table"
      >
        <thead
          className="govuk-table__head"
        >
          <tr
            className="govuk-table__row"
            role="row"
          >
            <th
              className="govuk-table__header"
              colSpan={1}
              role="columnheader"
            >
              ABC
            </th>
          </tr>
        </thead>
        <tbody
          className="govuk-table__body"
          role="rowgroup"
        >
          <tr
            className="govuk-table__row"
            role="row"
          >
            <td
              className="govuk-table__cell"
              role="cell"
            >
              def
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `);
});

it("renders the component correctly", () => {
  const component = shallow(
    <WorkTray
      rows={blankRowsData}
      columns={blankColumnsData}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
    />
  );

  expect(component.find({ "data-test": "worktray-container" }).length).toBe(1);
});
