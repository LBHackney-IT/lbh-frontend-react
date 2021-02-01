import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Table } from "../src/components/Table/Table";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import add from "date-fns/add";
import sub from "date-fns/sub";

const history = createMemoryHistory({ initialEntries: ["/"] });

const columns = [
  { Header: "Column 1", accessor: "col1", sortType: "basic" },
  { Header: "Column 2", accessor: "col2", sortType: "basic" },
  { Header: "Column 3", accessor: "col3", sortType: "basic" },
];

storiesOf("Table", module)
  .add("With Sample Data", () => {
    const columns = [
      { Header: "Column 1", accessor: "col1", sortType: "basic" },
      { Header: "Column 2", accessor: "col2", sortType: "basic" },
      { Header: "Column 3", accessor: "col3", sortType: "basic" },
    ];

    const data = [
      {
        col1: "value",
        col2: "more values",
        col3: "even more values",
        link: "/?path=/story/phasebanner--with-beta-prop",
      },
      {
        col1: "second row",
        col2: "adds more data",
        col3: "to each columns",
        link: "/?path=/story/button--with-text",
      },
    ];
    return <Table columns={columns} data={data} dueDateWarning={[]} />;
  })
  .add("With due date Data", () => {
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
        link: "",
      },
      {
        name: "Mrs Fluffy Whiskers",
        job: "Receiving treats",
        dueDate: priorDate,
        link: "",
      },
    ];

    const dueDateWarning = ["dueDate"];
    return (
      <Table columns={columns} data={data} dueDateWarning={dueDateWarning} />
    );
  });
