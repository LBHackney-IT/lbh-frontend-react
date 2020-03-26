import { mount } from "enzyme";
import React from "react";
import { create } from "react-test-renderer";
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
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick={(): void => {}}
      aria-label="test button"
      data-test="test data"
    >
      Testchildren
    </Button>
  );

  expect(component).toMatchInlineSnapshot(`
    <button
      aria-disabled={true}
      aria-label="test button"
      className="govuk-button lbh-button class1 class2 govuk-button--start"
      data-prevent-double-click={true}
      data-test="test data"
      disabled={true}
      id="1234"
      name="Testname"
      onClick={[Function]}
      type="button"
    >
      Testchildren
      <svg
        className="govuk-button__start-icon"
        focusable="false"
        height="19"
        role="presentation"
        viewBox="0 0 33 40"
        width="17.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0h13l20 20-20 20H0l20-20z"
          fill="currentColor"
        />
      </svg>
    </button>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<Button>Testchildren</Button>);

  expect(component).toMatchInlineSnapshot(`
    <button
      className="govuk-button lbh-button"
      onClick={[Function]}
    >
      Testchildren
    </button>
  `);
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
    preventDefault: mockPreventDefault,
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
    preventDefault: mockPreventDefault,
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
    preventDefault: mockPreventDefault,
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
    preventDefault: mockPreventDefault,
  };

  //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  buttonOnClick!.call(button, mockClickEvent);

  expect(mockClickHandler).not.toHaveBeenCalled();
  expect(mockPreventDefault).toHaveBeenCalledTimes(1);
});
