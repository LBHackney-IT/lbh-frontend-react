import React from "react";

/**
 * The WorkTray component, that can be used to display a user's current work items.
 *
 * @noInheritDoc
 */

export interface WorkTrayProps {
  rows: WorkTrayRow[]
  columns: WorkTrayColumn[]
}

export interface WorkTrayRow {
  row: WorkTrayItem[]
}

export interface WorkTrayItem {
  key: string;
  value: string;
  cautionaryContact?: boolean
  completionStatus?: CompletionStatus
}

export interface WorkTrayColumn {
  name: string;
  key: string;
}

enum CompletionStatus {
  inProgress,
  inManagerReview,
  approved,
  declined,
}

export class WorkTray extends React.Component {
  render(): React.ReactElement {
    return <div data-test="worktray-container" />;
  }
}
