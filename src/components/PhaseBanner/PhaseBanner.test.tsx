import React from "react";
import { create } from "react-test-renderer";
import { PhaseBanner } from "./PhaseBanner";
import { shallow } from "enzyme";

describe("phase banner", () => {
  it("renders the component successfully", () => {
    const component = create(
      <PhaseBanner phase={"BETA"} url={"https://www.hackney.gov.uk"} />
    );

    expect(component).toMatchInlineSnapshot(`
      <div
        className="phase-banner"
      >
        <p
          className="lbh-body"
        >
          <div>
             
            <strong
              className="govuk-tag lbh-tag"
            >
              <span
                data-test="phase"
              >
                BETA
              </span>
            </strong>
             
            This is a new service – your
             
            <a
              className="govuk-link lbh-link"
              href="https://www.hackney.gov.uk"
              target="_blank"
            >
              feedback
            </a>
             
            (online only, opens in a new tab) will help us to improve it.
          </div>
        </p>
        <hr />
      </div>
    `);
  });

  it("displays the phase it is passed", () => {
    const alphaComponent = shallow(<PhaseBanner phase="ALPHA" url="" />);
    const betaComponent = shallow(<PhaseBanner phase="BETA" url="" />);

    expect(alphaComponent.find({ "data-test": "phase" }).text()).toBe("ALPHA");
    expect(betaComponent.find({ "data-test": "phase" }).text()).toBe("BETA");
  });
});
