import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FilterTabs } from "../src/components/FilterTabs/FilterTabs";

storiesOf("FilterTabs", module).add("hardcoded", () => (
  <FilterTabs tabTitles={["In Progress", "Completed", "All Items"]}>
    <div style={{ padding: "1em" }}>
      Here is some text for the In Progress section
    </div>
    <div style={{ padding: "1em" }}>
      Here is some text for the Completed section
    </div>
    <div style={{ padding: "1em" }}>
      <p>Here is some text for the In Progress section</p>
      <p>Here is some text for the Completed section</p>
    </div>
  </FilterTabs>
));
