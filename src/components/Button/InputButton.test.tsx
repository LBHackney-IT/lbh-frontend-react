import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";

import { InputButton } from "./InputButton";

jest.useFakeTimers();

it("renders correctly with all props", () => {
  const component = create(
    <InputButton
      id="1234"
      className="class1 class2"
      isStartButton
      preventDoubleClick
      name="Testname"
      type="submit"
      value="Testvalue"
      disabled
    />
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<InputButton type="submit" />);

  expect(component).toMatchSnapshot();
});

it("prevents a second click within a second from executing the button a second time when preventDoubleClick is true", () => {
  const wrapper = mount(
    <InputButton preventDoubleClick type="submit">
      Testchildren
    </InputButton>
  );

  const input = wrapper.find("input");
  const inputOnClick = input.props().onClick;

  expect(inputOnClick).toBeDefined();

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: input.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  inputOnClick!.call(input, mockClickEvent);

  expect(mockPreventDefault).not.toHaveBeenCalled();

  jest.advanceTimersByTime(900);

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  inputOnClick!.call(input, mockClickEvent);

  expect(mockPreventDefault).toHaveBeenCalledTimes(1);
});

it("allows a second click after a second to execute the button a second time when preventDoubleClick is true", () => {
  const wrapper = mount(
    <InputButton preventDoubleClick type="submit">
      Testchildren
    </InputButton>
  );

  const input = wrapper.find("input");
  const inputOnClick = input.props().onClick;

  expect(inputOnClick).toBeDefined();

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: input.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  inputOnClick!.call(input, mockClickEvent);

  jest.advanceTimersByTime(1000);

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  inputOnClick!.call(input, mockClickEvent);

  expect(mockPreventDefault).not.toHaveBeenCalled();
});

it("prevents a click from executing the button when disabled is true", () => {
  const wrapper = mount(
    <InputButton preventDoubleClick type="submit" disabled>
      Testchildren
    </InputButton>
  );

  const input = wrapper.find("input");
  const inputOnClick = input.props().onClick;

  expect(inputOnClick).toBeDefined();

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: input.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  inputOnClick!.call(input, mockClickEvent);

  expect(mockPreventDefault).toHaveBeenCalledTimes(1);
});