import { storiesOf } from "@storybook/react";
import * as React from "react";
import { WorkTray, Status } from "../src/components/Worktray/Worktray";

const designData = [
  {
    cells: [
      {
        key: "created",
        value: "09/07/2020",
      },
      {
        key: "processAction",
        value: "Pop in to say Hello",
      },
      {
        key: "name",
        value: "Mr John Smith",
      },
      {
        key: "address",
        value: "123 That Road",
      },
      {
        key: "dueCompletion",
        value: "12/07/2020",
      },
    ],
    workItemLink: "https://hackney.gov.uk",
    workItemId: "123",
    workItemStatus: Status.inProgress,
  },
  {
    cells: [
      {
        key: "created",
        value: "16/09/19",
      },
      {
        key: "processAction",
        value: "Give treat to cat",
      },
      {
        key: "name",
        value: "Mrs Fluffy Whiskers",
      },
      {
        key: "address",
        value: "Meow",
      },
      {
        key: "dueCompletion",
        value: "17/09/2019",
      },
    ],
    workItemLink: "https://google.co.uk",
    workItemId: "abc",
    workItemStatus: Status.inProgress,
  },
];

const designColumns = [
  {
    name: "Created",
    key: "created",
    dataType: 1,
    dueDateWarning: false,
  },
  {
    name: "Process / Action",
    key: "processAction",
    dataType: 1,
    dueDateWarning: false,
  },
  {
    name: "Name",
    key: "name",
    dataType: 1,
    dueDateWarning: false,
  },
  {
    name: "Address",
    key: "address",
    dataType: 1,
    dueDateWarning: false,
  },
  {
    name: "Due / Completion",
    key: "dueCompletion",
    dataType: 1,
    dueDateWarning: true,
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

storiesOf("WorkTray", module)
  .add("with sample data", () => (
    <WorkTray
      rows={designData}
      columns={designColumns}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
    />
  ))
  .add("with columns but no data", () => (
    <WorkTray
      rows={[]}
      columns={designColumns}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
    />
  ))
  .add("with no columns or rows", () => (
    <WorkTray
      rows={[]}
      columns={[]}
      reassignWorkItem={reassignWorkItem}
      cancelWorkItem={cancelWorkItem}
      searchWorkItems={searchWorkItems}
    />
  ));
