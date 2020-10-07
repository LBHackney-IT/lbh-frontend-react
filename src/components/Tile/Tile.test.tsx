import React from "react";
import { Tile } from "./Tile";
import { Paragraph } from "../typography/Paragraph";
import { create } from "react-test-renderer";
import { shallow, mount } from "enzyme";
describe("<Tile/>", () => {
  let TileOne: {} | null | undefined;
  let TileTwo: {} | null | undefined;
  beforeEach(() => {
    TileOne = (
      <div>
        <Paragraph>Date of birth: 01/08/2000</Paragraph>
        <Paragraph>Mobile: 077070087654</Paragraph>
        <Paragraph>Home: 020888812334</Paragraph>
        <Paragraph>Work: 020777756789</Paragraph>
        <Paragraph>
          Email: <a href="mailto:someone@email.com">fake@dummy.com</a>
        </Paragraph>
      </div>
    );
    TileTwo = (
      <div>
        <Paragraph>Date of birth: 10/06/2010</Paragraph>
        <Paragraph>Mobile: 073070087234</Paragraph>
        <Paragraph>Home: 020888812334</Paragraph>
        <Paragraph>Work: 020777756543</Paragraph>
        <Paragraph>
          Email: <a href="mailto:someone@email.com">fake@dummy.com</a>
        </Paragraph>
      </div>
    );
  });

  it("renders the snapshot correctly", () => {
    const component = create(
      <Tile link="www.google.com" title="Mrs Sally Fisher">
        {TileOne}
      </Tile>
    );
    expect(component).toMatchInlineSnapshot(`
      <div
        className="govuk-container"
      >
        <div
          className="tile"
          data-test="tile-container"
        >
          <h3
            className="lbh-heading-h3"
          >
            <a
              data-test="tile-link"
              href="www.google.com"
            >
              Mrs Sally Fisher
            </a>
          </h3>
          <p
            className="lbh-body"
          >
            <div>
               
              <div>
                <p
                  className="lbh-body"
                >
                  <div>
                     
                    Date of birth: 01/08/2000
                  </div>
                </p>
                <p
                  className="lbh-body"
                >
                  <div>
                     
                    Mobile: 077070087654
                  </div>
                </p>
                <p
                  className="lbh-body"
                >
                  <div>
                     
                    Home: 020888812334
                  </div>
                </p>
                <p
                  className="lbh-body"
                >
                  <div>
                     
                    Work: 020777756789
                  </div>
                </p>
                <p
                  className="lbh-body"
                >
                  <div>
                     
                    Email: 
                    <a
                      href="mailto:someone@email.com"
                    >
                      fake@dummy.com
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    `);
  });
  it("renders the correct number of Tiles", () => {
    const component = mount(
      <>
        <Tile link="www.facebook.com" title="Ms Joan Fisher">
          {TileTwo}
        </Tile>
        <Tile link="www.google.com" title="Mrs Sally Fisher">
          {TileOne}
        </Tile>
      </>
    );
    expect(component.find({ "data-test": "tile-container" }).length).toBe(2);
  });
  it("Renders the correct title in the anchor tag", () => {
    const component = shallow(
      <Tile link="www.google.com" title="Mrs Sally Fisher">
        {TileOne}
      </Tile>
    );
    expect(component.find({ "data-test": "tile-link" }).text()).toBe(
      "Mrs Sally Fisher"
    );
  });
  it("Renders a full url in the href property in the anchor tag", () => {
    const component = shallow(
      <Tile link="www.hackney.gov.uk" title="Mrs Sally Fisher">
        {TileTwo}
      </Tile>
    );

    expect(component.find({ "data-test": "tile-link" }).prop("href")).toBe(
      "www.hackney.gov.uk"
    );
  });
  it("Renders contents of children props correctly", () => {
    const childrenOutput =
      "Mrs Sally Fisher  Date of birth: 10/06/2010 Mobile: 073070087234 Home: 020888812334 Work: 020777756543 Email: fake@dummy.com";
    const component = mount(
      <Tile link="www.hackney.gov.uk" title="Mrs Sally Fisher">
        {TileTwo}
      </Tile>
    );

    expect(component.text()).toEqual(childrenOutput);
  });
});
