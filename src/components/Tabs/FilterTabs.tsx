import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./FilterTabs.scss";
// import "lbh-frontend/lbh/components/lbh-tabs/_tabs.scss";

export interface FilterTabsProps {
  tabTitles: string[];
}

export const FilterTabs = (): React.ReactElement => {
  return (
    <div data-test="filter-tabs">
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

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
