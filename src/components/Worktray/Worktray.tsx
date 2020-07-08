import React from "react";

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

export class WorkTray extends React.Component<WorkTrayProps> {
  render(): React.ReactElement {
    return <div data-test="worktray-container" />;
  }
}