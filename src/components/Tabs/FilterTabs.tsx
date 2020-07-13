import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./FilterTabs.scss";

export interface FilterTabsProps {
  children: React.ReactNodeArray;
  tabTitles: string[];
}

export const FilterTabs = (props: FilterTabsProps): React.ReactElement => {
  const renderTabs = (tabTitles: string[]): React.ReactElement[] => {
    return tabTitles.map((tabTitle) => (
      <Tab data-test="tab-title" key={tabTitle}>
        {tabTitle}
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
