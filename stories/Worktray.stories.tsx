import { storiesOf } from "@storybook/react";
import * as React from "react";
import { WorkTray, Status } from "../src/components/Worktray/Worktray";
import moment from "moment";

const currentDate = moment(new Date());
const pendingDate = moment(currentDate).add(3, "days").format("DD/MM/YYYY");
const overdueDate = moment(currentDate)
  .subtract(1, "days")
  .format("DD/MM/YYYY");
const validDate = moment(currentDate).add(7, "days").format("DD/MM/YYYY");

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
        value: "16/09/19",
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
        value: "16/09/19",
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
        value: "10/07/2020",
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
        value: "20/12/2020",
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
        value: "01/07/2020",
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
        value: "1/09/2020",
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
        value: "01/07/2020",
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
        value: "23/11/2020",
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
        value: "15/07/2020",
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
        value: "29/08/2020",
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
        value: "06/07/2020",
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
        value: "31/07/2020",
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
