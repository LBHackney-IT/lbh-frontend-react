import React from "react";
import { create } from "react-test-renderer";
import { Table } from "./Table";
import { shallow } from "enzyme";

describe("given no data", () => {
  it("renders the snapshot correctly", () => {
    const component = create(<Table columns={[]} data={[]} />);

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
    const component = shallow(<Table columns={[]} data={[]} />);

    expect(component.find({ "data-test": "table" }).length).toBe(1);
    expect(component.find({ "data-test": "header-row" }).length).toBe(0);
    expect(component.find({ "data-test": "body-row" }).length).toBe(0);
  });
});

describe("given data", () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Job",
      accessor: "job",
    },
  ];

  const data = [
    {
      name: "Mr John Smith",
      job: "Being Mr Smith",
    },
    {
      name: "Mrs Fluffy Whiskers",
      job: "Receiving treats",
    },
  ];

  it("renders the snapshot correctly", () => {
    const component = create(<Table columns={columns} data={data} />);

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
            </td>
            <td
              className="govuk-table__cell"
              data-test="body-cell"
              role="cell"
            >
              Being Mr Smith
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
            </td>
            <td
              className="govuk-table__cell"
              data-test="body-cell"
              role="cell"
            >
              Receiving treats
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it("renders rows and columns to match the data", () => {
    const component = shallow(<Table columns={columns} data={data}/>)

    expect(component.find({"data-test": "header-row"}).length).toBe(1);
    expect(component.find({"data-test": "body-row"}).length).toBe(2);
    expect(component.find({"data-test": "header-column"}).length).toBe(2);
    expect(component.find({"data-test": "body-cell"}).length).toBe(4);
  })
});
