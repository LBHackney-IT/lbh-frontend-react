import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Table } from "../src/components/Table/Table";

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
  },
  {
    col1: "second row",
    col2: "adds more data",
    col3: "to each columns",
  },
];

storiesOf("Table", module).add("With Sample Data", () => (
  <Table columns={columns} data={data} dueDateWarning={[]} />
));
