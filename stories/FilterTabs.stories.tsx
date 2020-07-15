import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FilterTabs } from "../src/components/FilterTabs/FilterTabs";

storiesOf("FilterTabs", module).add("With Sample Tabs", () => (
  <FilterTabs
    tabTitles={["Section 1", "Section 2", "Section 3", "Another Section"]}
  >
    <div style={{ padding: "1em" }}>
      Here is some text for the first section
    </div>
    <div style={{ padding: "1em" }}>
      Here is some text for the second section
    </div>
    <div style={{ padding: "1em" }}>
      <p>Here is some text for the first section</p>
      <p>Here is some text for the second section</p>
    </div>
    <div style={{ padding: "1em" }}>Even more sections!</div>
  </FilterTabs>
));
