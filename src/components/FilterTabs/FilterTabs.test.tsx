import React from "react";
import { create } from "react-test-renderer";
import { FilterTabs } from "./FilterTabs";
import { shallow } from "enzyme";

describe("<FilterTabs/>", () => {
  it("renders the snapshot correctly", () => {
    const component = create(
      <FilterTabs tabTitles={["Section 1", "Section 2"]}>
        <p>Section 1 Panel Text</p>
        <p>Section 2 Panel Text</p>
      </FilterTabs>
    );

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
          >
            <li
              aria-controls="react-tabs-1"
              aria-disabled="false"
              aria-selected="true"
              className="react-tabs__tab react-tabs__tab--selected"
              data-test="tab-title"
              id="react-tabs-0"
              role="tab"
              tabIndex="0"
            >
              <div
                className="tab-title"
              >
                Section 1
              </div>
            </li>
            <li
              aria-controls="react-tabs-3"
              aria-disabled="false"
              aria-selected="false"
              className="react-tabs__tab"
              data-test="tab-title"
              id="react-tabs-2"
              role="tab"
              tabIndex={null}
            >
              <div
                className="tab-title"
              >
                Section 2
              </div>
            </li>
          </ul>
          <div
            aria-labelledby="react-tabs-0"
            className="react-tabs__tab-panel react-tabs__tab-panel--selected"
            data-test="tab-panel"
            id="react-tabs-1"
            role="tabpanel"
          >
            <p>
              Section 1 Panel Text
            </p>
          </div>
          <div
            aria-labelledby="react-tabs-2"
            className="react-tabs__tab-panel"
            data-test="tab-panel"
            id="react-tabs-3"
            role="tabpanel"
          />
        </div>
      </div>
    `);
  });

  it("renders the correct number of tabs and panels", () => {
    const component = shallow(
      <FilterTabs tabTitles={["1", "2", "3"]}>
        <p>Section 1</p>
        <p>Section 2</p>
        <p>Section 3</p>
      </FilterTabs>
    );

    expect(component.find({ "data-test": "tab-title" }).length).toBe(3);
    expect(component.find({ "data-test": "tab-panel" }).length).toBe(3);
  });
});
