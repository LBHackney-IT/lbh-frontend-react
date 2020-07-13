import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./FilterTabs.scss";
// import "lbh-frontend/lbh/components/lbh-tabs/_tabs.scss";

export interface FilterTabsProps {
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

  return (
    <div data-test="filter-tabs">
      <Tabs>
        <TabList>{renderTabs(props.tabTitles)}</TabList>

        <TabPanel>
          <p>Here is some content for section 1</p>
        </TabPanel>

        <TabPanel>
          <p>Here is some content for section 2</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};
