import React from "react";

import {
  ComponentRegister,
  LinkComponent,
  LinkComponentProps
} from "./ComponentRegister";

const TestLinkComponent: LinkComponent = ({
  href,
  children
}: LinkComponentProps) => <div data-href={href}>{children}</div>;

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
    ComponentRegister.init({});

    expect(ComponentRegister.Link).toStrictEqual("a");
  });
});
it("registers link by default as an anchor tag", () => {
  expect(
    <ComponentRegister.Link href="/"> Test</ComponentRegister.Link>
  ).toStrictEqual(<a href="/"> Test</a>);
});

describe(".reset()", () => {
  it("resets ComponentRegister properties back to their default state", () => {
    ComponentRegister.init({
      components: {
        Link: TestLinkComponent
      }
    });

    ComponentRegister.reset();
    expect(ComponentRegister.Link).toStrictEqual("a");
  });
});
