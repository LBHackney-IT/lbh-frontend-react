import React from "react";
import { Tile } from "./Tile";
import { Paragraph } from "../typography/Paragraph";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";

describe("<Tile/>", () => {
  it("renders the snapshot correctly", () => {
    const TileOne = (
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

    const TileTwo = (
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

    const component = create(
      <Tile
        targets={[
          {
            link: "www.google.com",
            title: "Mrs Sally Fisher",
            children: TileOne,
          },
          {
            link: "www.facebook.com",
            title: "Ms Joan Fisher",
            children: TileTwo,
          },
        ]}
      />
    );

    expect(component).toMatchInlineSnapshot(`
      <div
        className="govuk-container"
      >
        <ul>
          <nav>
            <div
              className="govuk-grid-row"
            >
              <div
                className="govuk-grid-column-one-quarter"
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
                      <p
                        className="lbh-body"
                      >
                        Date of birth: 01/08/2000
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Mobile: 077070087654
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Home: 020888812334
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Work: 020777756789
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Email: 
                        <a
                          href="mailto:someone@email.com"
                        >
                          fake@dummy.com
                        </a>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="govuk-grid-row"
            >
              <div
                className="govuk-grid-column-one-quarter"
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
                      href="www.facebook.com"
                    >
                      Ms Joan Fisher
                    </a>
                  </h3>
                  <p
                    className="lbh-body"
                  >
                    <div>
                      <p
                        className="lbh-body"
                      >
                        Date of birth: 10/06/2010
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Mobile: 073070087234
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Home: 020888812334
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Work: 020777756543
                      </p>
                      <p
                        className="lbh-body"
                      >
                        Email: 
                        <a
                          href="mailto:someone@email.com"
                        >
                          fake@dummy.com
                        </a>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </ul>
      </div>
    `);
  });

  it("renders the correct number of Tiles", () => {
    const TileOne = (
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

    const TileTwo = (
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

    const component = shallow(
      <Tile
        targets={[
          {
            link: "www.google.com",
            title: "Mrs Sally Fisher",
            children: TileOne,
          },
          {
            link: "www.facebook.com",
            title: "Ms Joan Fisher",
            children: TileTwo,
          },
        ]}
      />
    );

    expect(component.find({ "data-test": "tile-container" }).length).toBe(2);
  });

  it("Renders the correct title in the anchor tag", () => {
    const TileOne = (
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

    const component = shallow(
      <Tile
        targets={[
          {
            link: "www.google.com",
            title: "Mrs Sally Fisher",
            children: TileOne,
          },
        ]}
      />
    );

    expect(component.find({ "data-test": "tile-link" }).text()).toBe(
      "Mrs Sally Fisher"
    );
  });

  it("Renders a full url in the href property in the anchor tag", () => {
    const TileOne = (
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

    const component = shallow(
      <Tile
        targets={[
          {
            link: "www.hackney.gov.uk",
            title: "Mrs Sally Fisher",
            children: TileOne,
          },
        ]}
      />
    );

    expect(component.find({ "data-test": "tile-link" }).prop("href")).toBe(
      "www.hackney.gov.uk"
    );
  });
});
