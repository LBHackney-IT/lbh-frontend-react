import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Table } from "../src/components/Table/Table";
import moment from "moment";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";

const history = createMemoryHistory({ initialEntries: ["/"] });

const columns = [
  { Header: "Column 1", accessor: "col1", sortType: "basic" },
  { Header: "Column 2", accessor: "col2", sortType: "basic" },
  { Header: "Column 3", accessor: "col3", sortType: "basic" },
];

storiesOf("Table", module)
  .addDecorator((story) => (
    <Router
      history={createMemoryHistory({
        initialEntries: ["/?path=/story/table--with-sample-data"],
      })}
    >
      <Route path="/" component={() => story()} />
    </Router>
  ))
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
        link: "/",
      },
      {
        col1: "second row",
        col2: "adds more data",
        col3: "to each columns",
        link: "/",
      },
    ];
    return <Table columns={columns} data={data} dueDateWarning={[]} />;
  })
  .add("With due date Data", () => {
    const currentDate = moment(new Date());
    const circleDate = moment(
      moment(currentDate).add(3, "days").format("DD/MM/YYYY"),
      "DD/MM/YYYY"
    ).toDate();
    const priorDate = moment(
      moment(currentDate).subtract(1, "days").format("DD/MM/YYYY"),
      "DD/MM/YYYY"
    ).toDate();
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
