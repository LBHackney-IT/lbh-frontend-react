/* eslint-disable react/jsx-key */
import React from "react";
import {useTable} from "react-table";

import "lbh-frontend/lbh/components/lbh-table/_table.scss";

export interface TableProps {
  columns: {
    Header: string;
    accessor: string;
  }[];
  data: { [key: string]: string }[];
}

export const Table = ({ columns, data }: TableProps): React.ReactElement => {
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
                {column.render("Header")}
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
                    {cell.render("Cell")}
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
