import React from "react";

import {
  ComponentRegister,
  LinkComponent,
  LinkComponentProps,
  defaultComponentOptions
} from "./ComponentRegister";

const TestLinkComponent: LinkComponent = ({
  href,
  children
}: LinkComponentProps) => <div data-href={href}>{children}</div>;

const defaultLinkComponentOption = defaultComponentOptions.components.Link;

describe("defaultComponentOptions", () => {
  it("has the correct properties", () => {
    expect(defaultComponentOptions).toEqual({
      components: {
        Link: "a"
      }
    });
  });
});

describe(".init()", () => {
  it("registers all of the components provided", () => {
    ComponentRegister.init({
      components: {
        Link: TestLinkComponent
      }
    });

    expect(ComponentRegister.Link).toStrictEqual(TestLinkComponent);
  });

  it("does not alter properties if none are provided", () => {
    ComponentRegister.init();

    expect(ComponentRegister.Link).toStrictEqual(defaultLinkComponentOption);
  });
});

describe(".Link", () => {
  it("defaults to 'a'", () => {
    expect(ComponentRegister.Link).toEqual(defaultLinkComponentOption);
  });
});

describe(".reset()", () => {
  it("resets ComponentRegister properties back to their default state", () => {
    ComponentRegister.init({
      components: {
        Link: TestLinkComponent
      }
    });

    ComponentRegister.reset();
    expect(ComponentRegister.Link).toEqual(defaultLinkComponentOption);
  });
});
