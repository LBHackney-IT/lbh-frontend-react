/* eslint-disable react/jsx-key */
import React from "react";
import { useTable, useSortBy } from "react-table";

import "./Table.scss";
import "lbh-frontend/lbh/components/lbh-table/_table.scss";

/**
 * The prop types for the {@link Table} component.
 *
 * @noInheritDoc
 */

export interface TableProps {
  /**
   * An array of column objects, containing a Header (the title to be displayed at the head of the column) and an accessor (a unique string to assign row cells to the correct column)
   */
  columns: {
    Header: string;
    accessor: string;
  }[];
  /**
   * An array of cell objects to be displayed as a row.
   * Each key should be set to match the column accessor whilst the value is set to data to be displayed
   */
  data: {
    [key: string]: string;
  }[];
  /**
   * An array of column accessors which you wish to apply due date icons upon.
   */
  dueDateWarning: string[];
}

/**
 * A component that can be used to display data in a table format.
 */
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
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  interface RenderWarningProps {
    columnId: string;
    cellValue: string;
  }

  const downCaret = (): React.ReactElement => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-caret-down-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    );
  };

  const upCaret = (): React.ReactElement => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-caret-up-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    );
  };

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
    <div className="padding">
      <table data-test="table" className="govuk-table" {...getTableProps()}>
        <thead className="govuk-table__head">
          {headerGroups.map((headerGroup) => (
            <tr
              className="govuk-table__row"
              data-test="header-row"
              {...headerGroup.getHeaderGroupProps()}
            >
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {headerGroup.headers.map((column: any) => (
                <th
                  data-test="header-column"
                  className="govuk-table__header"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? downCaret()
                        : upCaret()
                      : ""}
                  </span>
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
    </div>
  );
};
