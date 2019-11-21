import React from "react";

import {
  ComponentRegister,
  defaultComponentRegisterOptions
} from "./ComponentRegister";
import { LinkComponentType, LinkComponentTypeProps } from "./LinkComponentType";
import {
  LinkButtonComponentType,
  LinkButtonComponentTypeProps
} from "./LinkButtonComponentType";

const TestLinkComponent: LinkComponentType = ({
  href,
  children
}: LinkComponentTypeProps) => <div data-href={href}>{children}</div>;

const TestLinkButtonComponent: LinkButtonComponentType = ({
  href,
  children
}: LinkButtonComponentTypeProps) => (
  <a role="button" href={href}>
    {children}
  </a>
);

describe("defaultComponentOptions", () => {
  it("has the correct properties", () => {
    expect(defaultComponentRegisterOptions).toEqual({
      components: {
        Link: "a",
        LinkButton: "a"
      }
    });
  });
});

describe(".init()", () => {
  it("registers all of the components provided", () => {
    ComponentRegister.init({
      components: {
        Link: TestLinkComponent,
        LinkButton: TestLinkButtonComponent
      }
    });

    expect(ComponentRegister.Link).toStrictEqual(TestLinkComponent);
    expect(ComponentRegister.LinkButton).toStrictEqual(TestLinkButtonComponent);
  });

  it("does not alter properties if none are provided", () => {
    ComponentRegister.init();

    expect(ComponentRegister.Link).toStrictEqual(
      defaultComponentRegisterOptions.components.Link
    );
    expect(ComponentRegister.LinkButton).toStrictEqual(
      defaultComponentRegisterOptions.components.LinkButton
    );
  });
});

describe(".Link", () => {
  it("defaults to 'a'", () => {
    expect(ComponentRegister.Link).toEqual(
      defaultComponentRegisterOptions.components.Link
    );
  });
});

describe(".LinkButton", () => {
  it("defaults to 'a'", () => {
    expect(ComponentRegister.LinkButton).toEqual(
      defaultComponentRegisterOptions.components.LinkButton
    );
  });
});

describe(".reset()", () => {
  it("resets ComponentRegister properties back to their default state", () => {
    ComponentRegister.init({
      components: {
        Link: TestLinkComponent,
        LinkButton: TestLinkButtonComponent
      }
    });

    ComponentRegister.reset();

    expect(ComponentRegister.Link).toEqual(
      defaultComponentRegisterOptions.components.Link
    );
    expect(ComponentRegister.LinkButton).toEqual(
      defaultComponentRegisterOptions.components.LinkButton
    );
  });
});
