import React from "react";
import { create } from "react-test-renderer";

import { ColourSchemes, Header } from "./Header";
import { Link } from "./Link";

it("renders correctly with all props", () => {
  const component = create(
    <Header
      id="test-id"
      className="test-class"
      homepageUrl="/test-home"
      serviceName="Test service"
      isServiceNameShort
      isHome
      isFixed
      isStackedOnMobile
      colourScheme={ColourSchemes.Red}
    >
      <Link href="/test-1">Test Nav 1</Link>
      <Link href="/test-2">Test Nav 2</Link>
    </Header>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without flags", () => {
  const component = create(
    <Header
      id="test-id"
      className="test-class"
      homepageUrl="/test-home"
      serviceName="Test service"
      colourScheme={ColourSchemes.Purple}
    >
      <Link href="/test-1">Test Nav 1</Link>
      <Link href="/test-2">Test Nav 2</Link>
    </Header>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<Header />);

  expect(component).toMatchSnapshot();
});
