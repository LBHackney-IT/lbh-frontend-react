import React from "react";
import { create } from "react-test-renderer";
import { WorkTray, Filter } from "./Worktray";
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

const filterCallBackFunction = (filter: Filter): void => {
  console.log(filter);
};

const reassignWorkItem = (workItemId: string): boolean => {
  console.log(workItemId);
  return true;
};

const cancelWorkItem = (workItemId: string): boolean => {
  console.log(workItemId);
  return true;
};

it("renders correctly with all props", () => {
  const component = create(
    <WorkTray
      rows={blankRowsData}
      columns={blankColumnsData}
      filterCallBackFunction={filterCallBackFunction}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
    />
  );

  expect(component).toMatchInlineSnapshot(`
    <div
      data-test="worktray-container"
    />
  `);
});

it("renders the component correctly", () => {
  const component = shallow(
    <WorkTray
      rows={blankRowsData}
      columns={blankColumnsData}
      filterCallBackFunction={filterCallBackFunction}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
    />
  );

  expect(component.find({ "data-test": "worktray-container" }).length).toBe(1);
});
