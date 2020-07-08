import React from "react";
import { create } from "react-test-renderer";
import { WorkTray, Tab, Sort } from "./Worktray";
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

const selectTab = (tab: Tab): void => {
  console.log(tab);
};

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

const sortWorkItems = (sort: Sort): void => {
  console.log(sort);
};

it("renders correctly with all props", () => {
  const component = create(
    <WorkTray
      rows={blankRowsData}
      columns={blankColumnsData}
      selectTab={selectTab}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
      sortWorkItems={sortWorkItems}
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
      selectTab={selectTab}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
      sortWorkItems={sortWorkItems}
    />
  );

  expect(component.find({ "data-test": "worktray-container" }).length).toBe(1);
});
