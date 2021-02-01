import { storiesOf } from "@storybook/react";
import * as React from "react";
import add from "date-fns/add";
import sub from "date-fns/sub";

import { WorkTray, Status } from "../src/components/Worktray/Worktray";

const currentDate = new Date();
const pendingDate = add(currentDate, { days: 3 });
const overdueDate = sub(currentDate, { days: 1 });
const validDate = add(currentDate, { days: 7 });

const designData = [
  {
    cells: [
      {
        key: "created",
        value: new Date("2020-07-09"),
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
        value: overdueDate,
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
        value: new Date("2019-09-16"),
      },
      {
        key: "processAction",
        value: "Housing Check",
      },
      {
        key: "name",
        value: "Mrs Fran Walters",
      },
      {
        key: "address",
        value: "246 The Road",
      },
      {
        key: "dueCompletion",
        value: pendingDate,
      },
    ],
    workItemLink: "https://google.co.uk",
    workItemId: "abc",
    workItemStatus: Status.inProgress,
  },
  {
    cells: [
      {
        key: "created",
        value: new Date("2019-09-16"),
      },
      {
        key: "processAction",
        value: "Going over notes",
      },
      {
        key: "name",
        value: "Mrs Suzanna Foxtrot",
      },
      {
        key: "address",
        value: "Flat 12, Dummy Data Building",
      },
      {
        key: "dueCompletion",
        value: validDate,
      },
    ],
    workItemLink: "https://google.co.uk",
    workItemId: "abc",
    workItemStatus: Status.complete,
  },
  {
    cells: [
      {
        key: "created",
        value: new Date("2020-07-10"),
      },
      {
        key: "processAction",
        value: "ITV",
      },
      {
        key: "name",
        value: "Mrs Jane Fonda",
      },
      {
        key: "address",
        value: "10, The Drive",
      },
      {
        key: "dueCompletion",
        value: new Date("2020-12-20"),
      },
    ],
    workItemLink: "https://hackney.gov.uk",
    workItemId: "123",
    workItemStatus: Status.complete,
  },
  {
    cells: [
      {
        key: "created",
        value: new Date("2020-07-01"),
      },
      {
        key: "processAction",
        value: "T&HC",
      },
      {
        key: "name",
        value: "Ms Amanda Higgins",
      },
      {
        key: "address",
        value: "Flat 6, Devonshire Avenue",
      },
      {
        key: "dueCompletion",
        value: new Date("2020-09-01"),
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
        value: new Date("2020-07-01"),
      },
      {
        key: "processAction",
        value: "ETRA",
      },
      {
        key: "name",
        value: "Sir Walter Raleigh",
      },
      {
        key: "address",
        value: "Bel-air, Throne View Street",
      },
      {
        key: "dueCompletion",
        value: new Date("2020-11-23"),
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
        value: new Date("2020-07-15"),
      },
      {
        key: "processAction",
        value: "ASB",
      },
      {
        key: "name",
        value: "Ms Joanna Treend",
      },
      {
        key: "address",
        value: "Apartment 4, Vassall Estate",
      },
      {
        key: "dueCompletion",
        value: new Date("2020-08-29"),
      },
    ],
    workItemLink: "https://hackney.gov.uk",
    workItemId: "123",
    workItemStatus: Status.complete,
  },
  {
    cells: [
      {
        key: "created",
        value: new Date("2020-07-06"),
      },
      {
        key: "processAction",
        value: "HC",
      },
      {
        key: "name",
        value: "Mr Elton John",
      },
      {
        key: "address",
        value: "45, Windswept Road",
      },
      {
        key: "dueCompletion",
        value: new Date("2020-07-31"),
      },
    ],
    workItemLink: "https://hackney.gov.uk",
    workItemId: "123",
    workItemStatus: Status.complete,
  },
];

const designColumns = [
  {
    name: "Created",
    key: "created",
    sortType: "datetime",
  },
  {
    name: "Process / Action",
    key: "processAction",
    sortType: "basic",
  },
  {
    name: "Name",
    key: "name",
    sortType: "basic",
  },
  {
    name: "Address",
    key: "address",
    sortType: "basic",
  },
  {
    name: "Due / Completion",
    key: "dueCompletion",
    sortType: "datetime",
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
