import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import { Button } from "./Button";

it("renders correctly with all props", () => {
  const component = create(
    <Button
      id="1234"
      className="class1 class2"
      isStartButton
      preventDoubleClick
      name="Testname"
      type="button"
      disabled
      onClick={(): void => {}}
    >
      Testchildren
    </Button>
  );

  expect(component).toMatchSnapshot();
});

it("renders correctly without optional props", () => {
  const component = create(<Button>Testchildren</Button>);

  expect(component).toMatchSnapshot();
});

it("calls the onClick prop when clicked", () => {
  const mockClickHandler = jest.fn();

  const wrapper = mount(
    <Button
      id="1234"
      className="class1 class2"
      preventDoubleClick
      name="Testname"
      type="button"
      onClick={mockClickHandler}
    >
      Testchildren
    </Button>
  );

  const button = wrapper.find("button");
  const buttonOnClick = button.props().onClick;

  expect(buttonOnClick).toBeDefined();

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: button.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).toHaveBeenCalledTimes(1);
  expect(mockClickHandler).toHaveBeenCalledWith(mockClickEvent);
  expect(mockPreventDefault).not.toHaveBeenCalled();
});

it("prevents a second click within a second from executing the button a second time when preventDoubleClick is true", () => {
  const mockClickHandler = jest.fn();

  const wrapper = mount(
    <Button preventDoubleClick onClick={mockClickHandler}>
      Testchildren
    </Button>
  );

  const button = wrapper.find("button");
  const buttonOnClick = button.props().onClick;

  expect(buttonOnClick).toBeDefined();

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: button.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).toHaveBeenCalledTimes(1);
  expect(mockClickHandler).toHaveBeenCalledWith(mockClickEvent);
  expect(mockPreventDefault).not.toHaveBeenCalled();

  mockClickHandler.mockReset();

  jest.advanceTimersByTime(999);

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).not.toHaveBeenCalled();
  expect(mockPreventDefault).toHaveBeenCalledTimes(1);
});

it("allows a second click after a second to execute the button a second time when preventDoubleClick is true", () => {
  const mockClickHandler = jest.fn();

  const wrapper = mount(
    <Button preventDoubleClick onClick={mockClickHandler}>
      Testchildren
    </Button>
  );

  const button = wrapper.find("button");
  const buttonOnClick = button.props().onClick;

  expect(buttonOnClick).toBeDefined();

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: button.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).toHaveBeenCalledTimes(1);
  expect(mockClickHandler).toHaveBeenCalledWith(mockClickEvent);
  expect(mockPreventDefault).not.toHaveBeenCalled();

  mockClickHandler.mockReset();

  jest.advanceTimersByTime(1000);

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).toHaveBeenCalledTimes(1);
  expect(mockClickHandler).toHaveBeenCalledWith(mockClickEvent);
  expect(mockPreventDefault).not.toHaveBeenCalled();
});

it("prevents a click from executing the button when disabled is true", () => {
  const mockClickHandler = jest.fn();

  const wrapper = mount(
    <Button preventDoubleClick onClick={mockClickHandler} disabled>
      Testchildren
    </Button>
  );

  const button = wrapper.find("button");
  const buttonOnClick = button.props().onClick;

  const mockPreventDefault = jest.fn();
  const mockClickEvent = {
    ...jest.fn()(),
    target: button.getDOMNode(),
    preventDefault: mockPreventDefault
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).not.toHaveBeenCalled();
  expect(mockPreventDefault).toHaveBeenCalledTimes(1);
});
