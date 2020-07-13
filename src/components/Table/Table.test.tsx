import React from "react";
import { create } from "react-test-renderer";
import { Table } from "./Table";
import { shallow, mount } from "enzyme";
import moment from "moment";

describe("given no data", () => {
  it("renders the snapshot correctly", () => {
    const component = create(
      <Table columns={[]} data={[]} dueDateWarning={[]} />
    );

    expect(component).toMatchInlineSnapshot(`
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
    `);
  });

  it("renders the component as expected", () => {
    const component = shallow(
      <Table columns={[]} data={[]} dueDateWarning={[]} />
    );

    expect(component.find({ "data-test": "table" }).length).toBe(1);
    expect(component.find({ "data-test": "header-row" }).length).toBe(0);
    expect(component.find({ "data-test": "body-row" }).length).toBe(0);
  });
});

describe("given data", () => {
  const currentDate = moment(new Date());
  const circleDate = moment(currentDate).add(3, "days").format("DD/MM/YYYY");
  const priorDate = moment(currentDate)
    .subtract(1, "days")
    .format("DD/MM/YYYY");
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Job",
      accessor: "job",
    },
    {
      Header: "Due Date",
      accessor: "dueDate",
    },
  ];

  const data = [
    {
      name: "Mr John Smith",
      job: "Being Mr Smith",
      dueDate: `${circleDate}`,
    },
    {
      name: "Mrs Fluffy Whiskers",
      job: "Receiving treats",
      dueDate: `${priorDate}`,
    },
  ];

  const dueDateWarning = ["dueDate"];

  it("renders the snapshot correctly", () => {
    const component = create(
      <Table columns={columns} data={data} dueDateWarning={dueDateWarning} />
    );

    expect(component).toMatchInlineSnapshot(`
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
          >
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
              Job
            </th>
            <th
              className="govuk-table__header"
              colSpan={1}
              data-test="header-column"
              role="columnheader"
            >
              Due Date
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
              Mr John Smith
               
              <div />
            </td>
            <td
              className="govuk-table__cell"
              data-test="body-cell"
              role="cell"
            >
              Being Mr Smith
               
              <div />
            </td>
            <td
              className="govuk-table__cell"
              data-test="body-cell"
              role="cell"
            >
              16/07/2020
               
              <span
                className="icon"
                data-test="circle-icon"
              >
                <svg
                  className="bi bi-circle-fill"
                  color="#f5a623"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="8"
                  />
                </svg>
              </span>
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
              Mrs Fluffy Whiskers
               
              <div />
            </td>
            <td
              className="govuk-table__cell"
              data-test="body-cell"
              role="cell"
            >
              Receiving treats
               
              <div />
            </td>
            <td
              className="govuk-table__cell"
              data-test="body-cell"
              role="cell"
            >
              12/07/2020
               
              <span
                className="icon"
                data-test="triangle-icon"
              >
                <svg
                  className="bi bi-triangle-fill"
                  color="#d0081c"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it("renders rows and columns to match the data", () => {
    const component = mount(
      <Table columns={columns} data={data} dueDateWarning={dueDateWarning} />
    );

    expect(component.find({ "data-test": "header-row" }).length).toBe(1);
    expect(component.find({ "data-test": "body-row" }).length).toBe(2);
    expect(component.find({ "data-test": "header-column" }).length).toBe(3);
    expect(component.find({ "data-test": "body-cell" }).length).toBe(6);
    expect(
      component.find({ "data-test": "triangle-icon" }).hostNodes().length
    ).toBe(1);
    expect(
      component.find({ "data-test": "circle-icon" }).hostNodes().length
    ).toBe(1);
  });
});
