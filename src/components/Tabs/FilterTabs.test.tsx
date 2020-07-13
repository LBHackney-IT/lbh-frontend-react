import React from "react";
import { create } from "react-test-renderer";
import { FilterTabs } from "./FilterTabs";
import { shallow } from "enzyme";

describe("<FilterTabs/>", () => {
  it("renders the snapshot correctly", () => {
    const component = create(<FilterTabs />);

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
              id="react-tabs-0"
              role="tab"
              tabIndex="0"
            >
              Title 1
            </li>
            <li
              aria-controls="react-tabs-3"
              aria-disabled="false"
              aria-selected="false"
              className="react-tabs__tab"
              id="react-tabs-2"
              role="tab"
              tabIndex={null}
            >
              Title 2
            </li>
          </ul>
          <div
            aria-labelledby="react-tabs-0"
            className="react-tabs__tab-panel react-tabs__tab-panel--selected"
            id="react-tabs-1"
            role="tabpanel"
          >
            <p>
              Here is some content for section 1
            </p>
          </div>
          <div
            aria-labelledby="react-tabs-2"
            className="react-tabs__tab-panel"
            id="react-tabs-3"
            role="tabpanel"
          />
        </div>
      </div>
    `);
  });
});
