import GovukButton from "govuk-frontend/govuk/components/button/button";
import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";

import { LinkButton } from "./LinkButton";
import {
  LinkButtonComponentType,
  LinkButtonComponentTypeProps
} from "../../helpers/LinkButtonComponentType";
import { ComponentRegister } from "../../helpers/ComponentRegister";

it("renders correctly with all props", () => {
  const component = create(
    <LinkButton id="1234" className="class1 class2" isStartButton href="/">
      Testchildren
    </LinkButton>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<LinkButton href="/">Testchildren</LinkButton>);

  expect(component).toMatchSnapshot();
});

it("clicks the button when the space key is pressed", () => {
  const mockClickHandler = jest.fn();

  const handleKeydownSpy = jest.spyOn(GovukButton.prototype, "handleKeyDown");

  const wrapper = mount(<LinkButton href="/">Testchildren</LinkButton>);

  const a = wrapper.find("a");

  a.getDOMNode().addEventListener("click", mockClickHandler);

  // 32 is the javascript event keycode for the space key
  a.simulate("keydown", { keyCode: 32 });

  expect(handleKeydownSpy).toHaveBeenCalledTimes(1);
  expect(mockClickHandler).toHaveBeenCalledTimes(1);
});

it("doesn't click the button when a key that isn't space is pressed ", () => {
  const mockClickHandler = jest.fn();

  const handleKeydownSpy = jest.spyOn(GovukButton.prototype, "handleKeyDown");

  const wrapper = mount(<LinkButton href="/">Testchildren</LinkButton>);

  const a = wrapper.find("a");

  a.getDOMNode().addEventListener("click", mockClickHandler);

  // 74 is the javascript event keycode for the "J" key
  a.simulate("keydown", { keyCode: 74 });

  expect(handleKeydownSpy).toHaveBeenCalledTimes(1);
  expect(mockClickHandler).toHaveBeenCalledTimes(0);
});

// it("allows the user to click a button via pressing the space key when a `LinkButton` property is initialised inside ComponentRegister without the `onKeyDown` property", () => {
//   const mockClickHandler = jest.fn();

//   const ComponentWithoutKeydown: LinkButtonComponentType = ({
//     href,
//     children
//   }: LinkButtonComponentTypeProps) => <div data-href={href}>{children}</div>;

//   const handleKeydownSpy = jest.spyOn(GovukButton.prototype, "handleKeyDown");

//   ComponentRegister.init({
//     components: {
//       LinkButton: ComponentWithoutKeydown
//     }
//   });

//   const wrapper = mount(<LinkButton href="/">Testchildren</LinkButton>);

//   const div = wrapper.find("div");

//   div.getDOMNode().addEventListener("click", mockClickHandler);

//   // 32 is the javascript event keycode for the space key
//   div.simulate("keydown", { keyCode: 32 });

//   expect(handleKeydownSpy).toHaveBeenCalledTimes(1);
//   expect(mockClickHandler).toHaveBeenCalledTimes(1);
// });
