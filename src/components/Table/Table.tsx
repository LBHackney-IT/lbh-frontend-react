/* eslint-disable react/jsx-key */
import React from "react";
import { useTable } from "react-table";
// import { FaSort } from "react-icons/fa";
// import { BsTriangleFill } from "react-icons/bs";
// import { BsFillCircleFill } from "react-icons/bs";

import "./Table.scss";
import "lbh-frontend/lbh/components/lbh-table/_table.scss";

export interface TableProps {
  columns: {
    Header: string;
    accessor: string;
  }[];
  data: { [key: string]: string }[];
  dueDateWarning: string[];
}
export const Table = ({
  columns,
  data,
  dueDateWarning,
}: TableProps): React.ReactElement => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  interface RenderWarningProps {
    columnId: string;
    cellValue: string;
  }

  const RenderWarning = (props: RenderWarningProps): React.ReactElement => {
    {
      if (dueDateWarning.includes(props.columnId)) {
        const fixedDate = new Date();
        const formattedDate = props.cellValue.split("/").reverse().join("-");
        const cellDate = new Date(formattedDate);
        if (fixedDate > cellDate) {
          return (
            <span className="icon" data-test="triangle-icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-triangle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                color={"#d0081c"}
              >
                <path
                  fillRule="evenodd"
                  d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                />
              </svg>
            </span>
          );
        }
        if (
          (cellDate.getTime() - fixedDate.getTime()) / (1000 * 60 * 60 * 24) <=
          4
        ) {
          return (
            <span className="icon" data-test="circle-icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                color={"#f5a623"}
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
          );
        }
      }
      return <div />;
    }
  };

  return (
    <table data-test="table" className="govuk-table" {...getTableProps()}>
      <thead className="govuk-table__head">
        {headerGroups.map((headerGroup) => (
          <tr
            className="govuk-table__row"
            data-test="header-row"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th
                data-test="header-column"
                className="govuk-table__header"
                {...column.getHeaderProps()}
              >
                {column.render("Header")} <span>Sorting Icon</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="govuk-table__body" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              data-test="body-row"
              className="govuk-table__row"
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    data-test="body-cell"
                    className="govuk-table__cell"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}{" "}
                    {
                      <RenderWarning
                        cellValue={cell.value}
                        columnId={cell.column.id}
                      />
                    }
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
