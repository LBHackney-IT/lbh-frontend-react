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
        sortType: "basic",
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
          className="worktray-container"
          data-test="worktray-container"
        >
          <div
            data-test="filter-tabs"
          >
            <div
              className="react-tabs"
              data-tabs={true}
              onClick={[Function]}
              onKeyDown={[Function]}
            >
              <ul
                className="react-tabs__tab-list"
                role="tablist"
              >
                <li
                  aria-controls="react-tabs-1"
                  aria-disabled="false"
                  aria-selected="true"
                  className="react-tabs__tab react-tabs__tab--selected"
                  data-test="tab-title"
                  id="react-tabs-0"
                  role="tab"
                  tabIndex="0"
                >
                  <div
                    className="tab-title"
                  >
                    In progress
                  </div>
                </li>
                <li
                  aria-controls="react-tabs-3"
                  aria-disabled="false"
                  aria-selected="false"
                  className="react-tabs__tab"
                  data-test="tab-title"
                  id="react-tabs-2"
                  role="tab"
                  tabIndex="0"
                >
                  <div
                    className="tab-title"
                  >
                    Due / Completed
                  </div>
                </li>
                <li
                  aria-controls="react-tabs-5"
                  aria-disabled="false"
                  aria-selected="false"
                  className="react-tabs__tab"
                  data-test="tab-title"
                  id="react-tabs-4"
                  role="tab"
                  tabIndex="0"
                >
                  <div
                    className="tab-title"
                  >
                    All items
                  </div>
                </li>
              </ul>
              <div
                aria-labelledby="react-tabs-0"
                className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                data-test="tab-panel"
                id="react-tabs-1"
                role="tabpanel"
              >
                <div
                  className="padding"
                >
                  <table
                    className="govuk-table"
                    data-test="table"
                    role="table"
                  >
                    <thead
                      className="govuk-table__head"
                    >
                      <tr
                        className="govuk-table__row"
                        data-test="header-row"
                        role="row"
                        tabIndex={0}
                      >
                        <th
                          className="govuk-table__header"
                          colSpan={1}
                          data-test="header-column"
                          onClick={[Function]}
                          role="columnheader"
                          style={
                            Object {
                              "cursor": "pointer",
                            }
                          }
                          tabIndex={0}
                          title="Toggle SortBy"
                        >
                          ABC
                          <span>
                            
                          </span>
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
                        onClick={[Function]}
                        role="row"
                      >
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          def
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                aria-labelledby="react-tabs-2"
                className="react-tabs__tab-panel"
                data-test="tab-panel"
                id="react-tabs-3"
                role="tabpanel"
              />
              <div
                aria-labelledby="react-tabs-4"
                className="react-tabs__tab-panel"
                data-test="tab-panel"
                id="react-tabs-5"
                role="tabpanel"
              />
            </div>
          </div>
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
            value: new Date("2020-09-07"),
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
            value: new Date("2020-08-31"),
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
            value: new Date("2020-09-17"),
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
        sortType: "datetime",
        dueDateWarning: false,
      },
      {
        name: "Process / Action",
        key: "processAction",
        sortType: "basic",
        dueDateWarning: false,
      },
      {
        name: "Name",
        key: "name",
        sortType: "basic",
        dueDateWarning: false,
      },
      {
        name: "Address",
        key: "address",
        sortType: "basic",
        dueDateWarning: false,
      },
      {
        name: "Due / Completed",
        key: "dueCompletion",
        sortType: "datetime",
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
          className="worktray-container"
          data-test="worktray-container"
        >
          <div
            data-test="filter-tabs"
          >
            <div
              className="react-tabs"
              data-tabs={true}
              onClick={[Function]}
              onKeyDown={[Function]}
            >
              <ul
                className="react-tabs__tab-list"
                role="tablist"
              >
                <li
                  aria-controls="react-tabs-13"
                  aria-disabled="false"
                  aria-selected="true"
                  className="react-tabs__tab react-tabs__tab--selected"
                  data-test="tab-title"
                  id="react-tabs-12"
                  role="tab"
                  tabIndex="0"
                >
                  <div
                    className="tab-title"
                  >
                    In progress
                  </div>
                </li>
                <li
                  aria-controls="react-tabs-15"
                  aria-disabled="false"
                  aria-selected="false"
                  className="react-tabs__tab"
                  data-test="tab-title"
                  id="react-tabs-14"
                  role="tab"
                  tabIndex="0"
                >
                  <div
                    className="tab-title"
                  >
                    Due / Completed
                  </div>
                </li>
                <li
                  aria-controls="react-tabs-17"
                  aria-disabled="false"
                  aria-selected="false"
                  className="react-tabs__tab"
                  data-test="tab-title"
                  id="react-tabs-16"
                  role="tab"
                  tabIndex="0"
                >
                  <div
                    className="tab-title"
                  >
                    All items
                  </div>
                </li>
              </ul>
              <div
                aria-labelledby="react-tabs-12"
                className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                data-test="tab-panel"
                id="react-tabs-13"
                role="tabpanel"
              >
                <div
                  className="padding"
                >
                  <table
                    className="govuk-table"
                    data-test="table"
                    role="table"
                  >
                    <thead
                      className="govuk-table__head"
                    >
                      <tr
                        className="govuk-table__row"
                        data-test="header-row"
                        role="row"
                        tabIndex={0}
                      >
                        <th
                          className="govuk-table__header"
                          colSpan={1}
                          data-test="header-column"
                          onClick={[Function]}
                          role="columnheader"
                          style={
                            Object {
                              "cursor": "pointer",
                            }
                          }
                          tabIndex={0}
                          title="Toggle SortBy"
                        >
                          Created
                          <span>
                            
                          </span>
                        </th>
                        <th
                          className="govuk-table__header"
                          colSpan={1}
                          data-test="header-column"
                          onClick={[Function]}
                          role="columnheader"
                          style={
                            Object {
                              "cursor": "pointer",
                            }
                          }
                          tabIndex={0}
                          title="Toggle SortBy"
                        >
                          Process / Action
                          <span>
                            
                          </span>
                        </th>
                        <th
                          className="govuk-table__header"
                          colSpan={1}
                          data-test="header-column"
                          onClick={[Function]}
                          role="columnheader"
                          style={
                            Object {
                              "cursor": "pointer",
                            }
                          }
                          tabIndex={0}
                          title="Toggle SortBy"
                        >
                          Name
                          <span>
                            
                          </span>
                        </th>
                        <th
                          className="govuk-table__header"
                          colSpan={1}
                          data-test="header-column"
                          onClick={[Function]}
                          role="columnheader"
                          style={
                            Object {
                              "cursor": "pointer",
                            }
                          }
                          tabIndex={0}
                          title="Toggle SortBy"
                        >
                          Address
                          <span>
                            
                          </span>
                        </th>
                        <th
                          className="govuk-table__header"
                          colSpan={1}
                          data-test="header-column"
                          onClick={[Function]}
                          role="columnheader"
                          style={
                            Object {
                              "cursor": "pointer",
                            }
                          }
                          tabIndex={0}
                          title="Toggle SortBy"
                        >
                          Due / Completed
                          <span>
                            
                          </span>
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
                        onClick={[Function]}
                        role="row"
                      >
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          <div>
                            9/7/2020
                            <div />
                          </div>
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          Pop in to say Hello
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          Mr John Smith
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          123 That Road
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          <div>
                            8/31/2020
                            <div />
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="govuk-table__row"
                        data-test="body-row"
                        onClick={[Function]}
                        role="row"
                      >
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          <div>
                            9/16/2019
                            <div />
                          </div>
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          Give treat to cat
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          Mrs Fluffy Whiskers
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          Meow
                        </td>
                        <td
                          className="govuk-table__cell"
                          data-test="body-cell"
                          role="cell"
                          tabIndex={0}
                        >
                          <div>
                            9/17/2020
                            <div />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                aria-labelledby="react-tabs-14"
                className="react-tabs__tab-panel"
                data-test="tab-panel"
                id="react-tabs-15"
                role="tabpanel"
              />
              <div
                aria-labelledby="react-tabs-16"
                className="react-tabs__tab-panel"
                data-test="tab-panel"
                id="react-tabs-17"
                role="tabpanel"
              />
            </div>
          </div>
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
        className="worktray-container"
        data-test="worktray-container"
      >
        <div
          data-test="filter-tabs"
        >
          <div
            className="react-tabs"
            data-tabs={true}
            onClick={[Function]}
            onKeyDown={[Function]}
          >
            <ul
              className="react-tabs__tab-list"
              role="tablist"
            >
              <li
                aria-controls="react-tabs-25"
                aria-disabled="false"
                aria-selected="true"
                className="react-tabs__tab react-tabs__tab--selected"
                data-test="tab-title"
                id="react-tabs-24"
                role="tab"
                tabIndex="0"
              >
                <div
                  className="tab-title"
                >
                  In progress
                </div>
              </li>
              <li
                aria-controls="react-tabs-27"
                aria-disabled="false"
                aria-selected="false"
                className="react-tabs__tab"
                data-test="tab-title"
                id="react-tabs-26"
                role="tab"
                tabIndex="0"
              >
                <div
                  className="tab-title"
                >
                  Due / Completed
                </div>
              </li>
              <li
                aria-controls="react-tabs-29"
                aria-disabled="false"
                aria-selected="false"
                className="react-tabs__tab"
                data-test="tab-title"
                id="react-tabs-28"
                role="tab"
                tabIndex="0"
              >
                <div
                  className="tab-title"
                >
                  All items
                </div>
              </li>
            </ul>
            <div
              aria-labelledby="react-tabs-24"
              className="react-tabs__tab-panel react-tabs__tab-panel--selected"
              data-test="tab-panel"
              id="react-tabs-25"
              role="tabpanel"
            >
              <div
                className="padding"
              >
                <table
                  className="govuk-table"
                  data-test="table"
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
            </div>
            <div
              aria-labelledby="react-tabs-26"
              className="react-tabs__tab-panel"
              data-test="tab-panel"
              id="react-tabs-27"
              role="tabpanel"
            />
            <div
              aria-labelledby="react-tabs-28"
              className="react-tabs__tab-panel"
              data-test="tab-panel"
              id="react-tabs-29"
              role="tabpanel"
            />
          </div>
        </div>
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
