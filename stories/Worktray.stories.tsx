import { storiesOf } from "@storybook/react";
import * as React from "react";
import { WorkTray, Status } from "../src/components/Worktray/Worktray";

const blankRowsData = [
  {
    cells: [
      {
        key: "abc",
        value: "def",
      },
      {
        key: "def",
        value: "hij",
      },
    ],
    workItemLink: "https://hackney.gov.uk",
    workItemId: "123",
    workItemStatus: Status.inProgress,
  },
  {
    cells: [
      {
        key: "abc",
        value: "123",
      },
      {
        key: "def",
        value: "456",
      },
    ],
    workItemLink: "https://google.co.uk",
    workItemId: "abc",
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
  {
    name: "DEF",
    key: "def",
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

storiesOf("WorkTray", module).add("with table", () => (
  <WorkTray
    rows={blankRowsData}
    columns={blankColumnsData}
    reassignWorkItem={reassignWorkItem}
    cancelWorkItem={cancelWorkItem}
    searchWorkItems={searchWorkItems}
  />
));
