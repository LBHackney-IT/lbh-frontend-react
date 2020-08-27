import React from "react";
import { NavigationBar } from "./NavigationBar";
import { create } from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("<NavigationBar/>", () => {
  it("renders the snapshot correctly", () => {
    const component = create(
      <NavigationBar
        targets={[
          {
            name: "home",
            url: "/",
          },
        ]}
      />
    );

    expect(component).toMatchInlineSnapshot(`
      <div
        className="navigationBar-container"
      >
        <ul>
          <nav>
            <li
              className="link-text"
              data-test="navTarget-name"
            >
              <a
                className="govuk-link lbh-link"
                href="/"
              >
                home
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
            name: "home",
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

  it("Renders the correct href property in the anchor tag", () => {
    const component = mount(
      <NavigationBar
        targets={[
          {
            name: "residents",
            url: "/residents",
          },
        ]}
      />
    );

    expect(component.find("a").prop("href")).toBe("/residents");
  });

  it("Renders a full url in the href property in the anchor tag", () => {
    const component = mount(
      <NavigationBar
        targets={[
          {
            name: "residents",
            url: "www.hackney.gov.uk",
          },
        ]}
      />
    );

    expect(component.find("a").prop("href")).toBe("www.hackney.gov.uk");
  });
});
