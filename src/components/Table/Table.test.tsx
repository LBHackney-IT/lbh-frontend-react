import React from "react";
import { create } from "react-test-renderer";
import { Table } from "./Table";
import { shallow, mount } from "enzyme";
import add from "date-fns/add";
import sub from "date-fns/sub";

describe("given no data", () => {
  it("renders the snapshot correctly", () => {
    const component = create(
      <Table columns={[]} data={[]} dueDateWarning={[]} />
    );

    expect(component).toMatchInlineSnapshot(`
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
  const currentDate = new Date();
  const circleDate = add(currentDate, { days: 3 });
  const priorDate = sub(currentDate, { days: 1 });
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sortType: "basic",
    },
    {
      Header: "Job",
      accessor: "job",
      sortType: "basic",
    },
    {
      Header: "Due Date",
      accessor: "dueDate",
      sortType: "datetime",
    },
  ];

  const data = [
    {
      name: "Mr John Smith",
      job: "Being Mr Smith",
      dueDate: circleDate,
    },
    {
      name: "Mrs Fluffy Whiskers",
      job: "Receiving treats",
      dueDate: priorDate,
    },
  ];

  const dueDateWarning = ["dueDate"];

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
