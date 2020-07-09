import React from "react";
import { create } from "react-test-renderer";
import { WorkTray, Status } from "./Worktray";
import { shallow } from "enzyme";

const blankRowsData = [
  {
    row: [
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

it("renders correctly with all props", () => {
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
        />
        <tbody
          className="govuk-table__body"
          role="rowgroup"
        />
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
