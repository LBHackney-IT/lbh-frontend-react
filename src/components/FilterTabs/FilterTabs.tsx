import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./FilterTabs.scss";

/**
 * The prop types for the {@link FilterTabs} component.
 *
 * @noInheritDoc
 */
export interface FilterTabsProps {
  /**
   * Array of React Elements that will be displayed under each tab
   */
  children: React.ReactNodeArray;
  /**
   * Array of strings containing the titles of the tabs
   */
  tabTitles: string[];
}

/**
 * A component that allows data to be shown across multiple tabs.
 */
export const FilterTabs = (props: FilterTabsProps): React.ReactElement => {
  const renderTabs = (tabTitles: string[]): React.ReactElement[] => {
    return tabTitles.map((tabTitle) => (
      <Tab data-test="tab-title" key={tabTitle}>
        <div className="tab-title">{tabTitle}</div>
      </Tab>
    ));
  };

  const renderPanels = (
    tabPanels: React.ReactNodeArray
  ): React.ReactElement[] => {
    return tabPanels.map((tabPanel: React.ReactNode) => (
      // eslint-disable-next-line react/jsx-key
      <TabPanel data-test="tab-panel">{tabPanel}</TabPanel>
    ));
  };

  return (
    <div data-test="filter-tabs">
      <Tabs>
        <TabList>{renderTabs(props.tabTitles)}</TabList>
        {renderPanels(props.children)}
      </Tabs>
    </div>
  );
};
