import React from "react";
import { NavigationBar } from "./NavigationBar";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";

describe("<NavigationBar/>", () => {
  it("renders the snapshot correctly", () => {
    const component = create(
      <NavigationBar
        targets={[
          {
            name: "Home",
            url: "/",
          },
        ]}
      />
    );

    expect(component).toMatchInlineSnapshot(`
      <div>
        <ul>
          <nav>
            <li
              data-test="navTarget-name"
            >
              <a
                className="govuk-link lbh-link"
                href="//"
              >
                Home
              </a>
            </li>
          </nav>
        </ul>
      </div>
    `);
  });

  it("renders the correct number of nav links", () => {
    const component = shallow(
      <NavigationBar
        targets={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "residents",
            url: "/residents",
          },
        ]}
      />
    );

    expect(component.find({ "data-test": "navTarget-name" }).length).toBe(2);
  });
});
