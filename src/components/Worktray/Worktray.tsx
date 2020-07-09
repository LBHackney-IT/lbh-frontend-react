/* eslint-disable react/jsx-key */
import React from "react";
import { useTable } from "react-table";
import { Header } from "../Header";

import "lbh-frontend/lbh/components/lbh-table/_table.scss";

/**
 * The WorkTray component, that can be used to display a user's current work items.
 *
 * @noInheritDoc
 */

export interface WorkTrayProps {
  /**
   * Array of {@link WorkTrayRow} that defines the number of rows within the Work Tray
   */
  rows: WorkTrayRow[];
  /**
   * Array of {@link WorkTrayColumn} that defines the number of columns within the Work Tray
   */
  columns: WorkTrayColumn[];
  /**
   * Callback function used to reassign a work item to another user. If this function returns true, the item will be removed from the work tray.
   */
  reassignWorkItem: (workItemId: string) => boolean;
  /**
   * Callback function used to cancel a work item. If this function returns true, the item will be removed from the work tray.
   */
  cancelWorkItem: (workItemId: string) => boolean;
  /**
   * Callback function used to pass a search query back to your API and update the data being passed to {@link WorkTrayProps.rows}
   */
  searchWorkItems: (searchTerm: string) => void;
}

export interface WorkTrayRow {
  /**
   * Array of {@link WorkTrayItem} that defines the data that will be displayed in a particular row on the Work Tray
   */
  row: WorkTrayCell[];
  /**lxs
   * When a {@link WorkTrayColumn.key} is provided, an icon marking a Cautionary Contact will be display in that cell for the row.
   */
  cautionaryContactKey?: string;
  /**
   * Contains a URL to open the Work Item in its original application.
   */
  workItemLink: string;
  /**
   * A unique ID to identify a Work Item
   */
  workItemId: string;
  /**
   * Identifies the status of the Work Item for sorting.
   */
  workItemStatus: Status;
}

export interface WorkTrayCell {
  /**
   * The key is used to identify which column this data point should be displayed under. See {@link WorkTrayColumn.key}
   */
  key: string;
  /**
   * The value which will be displayed in the cell. Will be parsed according to the value in {@link WorkTrayColumn.dataType}
   */
  value: string;
}

export interface WorkTrayColumn {
  /**
   * Title of the Column to be displayed in the Work Tray
   */
  name: string;
  /**
   * Used to identify which column a {@link WorkTrayItem} should be displayed under
   */
  key: string;
  /**
   * Used to determine how data within the column should be parsed.
   * Valid options can be seen in the enum {@link DataType}
   */
  dataType: DataType;
  /**
   * Used with the {@link WorkTrayColumn.dataType} when set to date to determine whether to show icons alerting users to approaching due dates
   */
  dueDateWarning?: boolean;
}

export enum Status {
  /**
   * Work Items marked as inProgress will be sorted with other In Progress items
   */
  inProgress,
  /**
   * Work Items marked as complete will be sorted with other Complete items
   */
  complete,
}

enum DataType {
  /**
   * Data types marked as text will be parsed as strings
   */
  text,
  /**
   * Data types marked as number will be parsed as floats
   */
  number,
  /**
   * Data types marked as date will be parsed as dates
   */
  date,
}

// eslint-disable-next-line react/prop-types
const Table = ({ columns, data }: any): React.ReactElement => {
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
    <table className="govuk-table" {...getTableProps()}>
      <thead className="govuk-table__head">
        {headerGroups.map((headerGroup) => (
          <tr
            className="govuk-table__row"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th className="govuk-table__header" {...column.getHeaderProps()}>
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
            <tr className="govuk-table__row" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="govuk-table__cell" {...cell.getCellProps()}>
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
export const WorkTray = (props: WorkTrayProps): React.ReactElement => {
  const columns = React.useMemo(
    () => [
      // Example structure:
      // {
      //   Header: "Created",
      //   accessor: "created",
      // },
      // {
      //   Header: "Process/action",
      //   accessor: "processAction",
      // },
      // {
      //   Header: "Name",
      //   accessor: "name",
      // },
      // {
      //   Header: "Address",
      //   accessor: "address",
      // },
      // {
      //   Header: "Due/Completed",
      //   accessor: "dueCompleted",
      // },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      // Example structure:
      // {
      //   created: "16/09/90",
      //   processAction: "Introductory Bear Visit",
      //   name: "Mr John Smith",
      //   address: "111 Smith Street",
      //   dueCompleted: "01/08/91",
      // },
    ],
    []
  );

  console.log(props);
  return (
    <div data-test="worktray-container">
      <Table columns={columns} data={data} />
    </div>
  );
};
