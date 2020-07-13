import React from "react";
import { create } from "react-test-renderer";
import { FilterTabs } from "./FilterTabs";
import { shallow } from "enzyme";

describe("<FilterTabs/>", () => {
  it("renders the snapshot correctly", () => {
    const component = create(<FilterTabs tabTitles={[]} />);

    expect(component).toMatchInlineSnapshot(`
      <div
        data-test="filter-tabs"
      >
        <div
          className="react-tabs"
          data-tabs={true}
          onClick={[Function]}
          onKeyDown={[Function]}
        >
          <ul
            className="react-tabs__tab-list"
            role="tablist"
          />
          <div
            className="react-tabs__tab-panel"
            role="tabpanel"
          />
          <div
            className="react-tabs__tab-panel"
            role="tabpanel"
          />
        </div>
      </div>
    `);
  });

  it("renders the correct number of tabs", () => {
    const component = shallow(<FilterTabs tabTitles={["1", "2", "3"]} />);

    expect(component.find({ "data-test": "tab-title" }).length).toBe(3);
  });
});
