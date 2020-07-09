import React from "react";
import { create } from "react-test-renderer";
import { WorkTray, Status } from "./Worktray";
import { mount } from "enzyme";

const dummyReassignWorkItem = (workItemId: string): boolean => {
  console.log(workItemId);
  return true;
};

const dummyCancelWorkItem = (workItemId: string): boolean => {
  console.log(workItemId);
  return true;
};

const dummySearchWorkItems = (searchTerm: string): void => {
  console.log(searchTerm);
};

describe("when given valid columns and rows", () => {
  describe("1 row and 1 column", () => {
    const sampleData = [
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

    const sampleColumns = [
      {
        name: "ABC",
        key: "abc",
        dataType: 1,
        dueDateWarning: false,
      },
    ];

    it("renders the snapshot correctly", () => {
      const component = create(
        <WorkTray
          rows={sampleData}
          columns={sampleColumns}
          reassignWorkItem={dummyReassignWorkItem}
          cancelWorkItem={dummyCancelWorkItem}
          searchWorkItems={dummySearchWorkItems}
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
                data-test="header-row"
                role="row"
              >
                <th
                  className="govuk-table__header"
                  colSpan={1}
                  data-test="header-column"
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
                data-test="body-row"
                role="row"
              >
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
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

    it("renders the table elements as expected", () => {
      const component = mount(
        <WorkTray
          rows={sampleData}
          columns={sampleColumns}
          reassignWorkItem={dummyReassignWorkItem}
          cancelWorkItem={dummyCancelWorkItem}
          searchWorkItems={dummySearchWorkItems}
        />
      );

      expect(component.find({ "data-test": "worktray-container" }).length).toBe(
        1
      );
      expect(component.find({ "data-test": "header-row" }).length).toBe(1);
      expect(component.find({ "data-test": "body-row" }).length).toBe(1);
      expect(component.find({ "data-test": "header-column" }).length).toBe(1);
      expect(component.find({ "data-test": "body-cell" }).length).toBe(1);
    });
  });

  describe("multiple rows and columns", () => {
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
            value: "31/08/2020",
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
            value: "17/09/2020",
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
        dueDateWarning: false,
      },
    ];

    it("renders the snapshot correctly", () => {
      const component = create(
        <WorkTray
          rows={designData}
          columns={designColumns}
          reassignWorkItem={dummyReassignWorkItem}
          cancelWorkItem={dummyCancelWorkItem}
          searchWorkItems={dummySearchWorkItems}
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
                data-test="header-row"
                role="row"
              >
                <th
                  className="govuk-table__header"
                  colSpan={1}
                  data-test="header-column"
                  role="columnheader"
                >
                  Created
                </th>
                <th
                  className="govuk-table__header"
                  colSpan={1}
                  data-test="header-column"
                  role="columnheader"
                >
                  Process / Action
                </th>
                <th
                  className="govuk-table__header"
                  colSpan={1}
                  data-test="header-column"
                  role="columnheader"
                >
                  Name
                </th>
                <th
                  className="govuk-table__header"
                  colSpan={1}
                  data-test="header-column"
                  role="columnheader"
                >
                  Address
                </th>
                <th
                  className="govuk-table__header"
                  colSpan={1}
                  data-test="header-column"
                  role="columnheader"
                >
                  Due / Completion
                </th>
              </tr>
            </thead>
            <tbody
              className="govuk-table__body"
              role="rowgroup"
            >
              <tr
                className="govuk-table__row"
                data-test="body-row"
                role="row"
              >
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  09/07/2020
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  Pop in to say Hello
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  Mr John Smith
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  123 That Road
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  31/08/2020
                </td>
              </tr>
              <tr
                className="govuk-table__row"
                data-test="body-row"
                role="row"
              >
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  16/09/19
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  Give treat to cat
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  Mrs Fluffy Whiskers
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  Meow
                </td>
                <td
                  className="govuk-table__cell"
                  data-test="body-cell"
                  role="cell"
                >
                  17/09/2020
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `);
    });

    it("renders the table elements as expected", () => {
      const component = mount(
        <WorkTray
          rows={designData}
          columns={designColumns}
          reassignWorkItem={dummyReassignWorkItem}
          cancelWorkItem={dummyCancelWorkItem}
          searchWorkItems={dummySearchWorkItems}
        />
      );

      expect(component.find({ "data-test": "worktray-container" }).length).toBe(
        1
      );
      expect(component.find({ "data-test": "header-row" }).length).toBe(1);
      expect(component.find({ "data-test": "body-row" }).length).toBe(2);
      expect(component.find({ "data-test": "header-column" }).length).toBe(5);
      expect(component.find({ "data-test": "body-cell" }).length).toBe(10);
    });
  });
});

describe("when given no columns or rows", () => {
  it("renders the snapshot correctly", () => {
    const component = create(
      <WorkTray
        rows={[]}
        columns={[]}
        reassignWorkItem={dummyReassignWorkItem}
        cancelWorkItem={dummyCancelWorkItem}
        searchWorkItems={dummySearchWorkItems}
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

  it("renders the table elements as expected", () => {
    const component = mount(
      <WorkTray
        rows={[]}
        columns={[]}
        reassignWorkItem={dummyReassignWorkItem}
        cancelWorkItem={dummyCancelWorkItem}
        searchWorkItems={dummySearchWorkItems}
      />
    );

    expect(component.find({ "data-test": "worktray-container" }).length).toBe(
      1
    );
    expect(component.find({ "data-test": "header-row" }).length).toBe(0);
    expect(component.find({ "data-test": "body-row" }).length).toBe(0);
    expect(component.find({ "data-test": "header-column" }).length).toBe(0);
    expect(component.find({ "data-test": "body-cell" }).length).toBe(0);
  });
});
