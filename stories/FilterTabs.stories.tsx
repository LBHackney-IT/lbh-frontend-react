import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FilterTabs } from "../src/components/Tabs/FilterTabs";

storiesOf("FilterTabs", module).add("hardcoded", () => (
  <FilterTabs tabTitles={["In Progress", "Completed", "All Items"]}>
    <p>Here is some text for the In Progress section</p>
    <p>Here is some text for the Completed section</p>
    <div>
      <p>Here is some text for the In Progress section</p>
      <p>Here is some text for the Completed section</p>
    </div>
  </FilterTabs>
));
