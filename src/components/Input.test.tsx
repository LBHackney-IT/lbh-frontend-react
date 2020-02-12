import React from "react";
import { create } from "react-test-renderer";

import { Input, InputType } from "./Input";
import { render, fireEvent } from "@testing-library/react";

it("renders correctly with all props", () => {
  const component = create(
    <Input
      id="my-input"
      name="example"
      className="test-class"
      type={InputType.Text}
      label={{
        children: "Please enter some text"
      }}
      errorMessage={{
        id: "error-id",
        className: "error-class",
        visuallyHiddenText: "My error",
        children: "There has been an error"
      }}
      hint={{
        id: "hint-id",
        className: "hint-class",
        children:
          "This includes changing your last name or spelling your name differently."
      }}
      formGroup={{
        id: "form-group-id",
        className: "form-group-class"
      }}
      autocomplete="username"
      onChange={(): void => console.log("on change")}
      required={true}
      disabled={true}
      value="Here is some text"
      pattern="[0-9]*"
    />
  );

  expect(component).toMatchInlineSnapshot(`
  <div
    className="govuk-form-group lbh-form-group form-group-class govuk-form-group--error lbh-form-group--error"
    id="form-group-id"
  >
    <label
      className="govuk-label lbh-label"
      htmlFor="my-input"
    >
      Please enter some text
    </label>
    <span
      className="govuk-hint lbh-hint hint-class"
      id="hint-id"
    >
      This includes changing your last name or spelling your name differently.
    </span>
    <span
      className="govuk-error-message lbh-error-message error-class"
      id="error-id"
    >
      <span
        className="govuk-visually-hidden"
      >
        My error
        :
      </span>
      There has been an error
    </span>
    <input
      aria-describedby="hint-id error-id"
      autoComplete="username"
      className="govuk-input lbh-input govuk-input--error test-class"
      disabled={true}
      id="my-input"
      name="example"
      onChange={[Function]}
      pattern="[0-9]*"
      required={true}
      type="text"
      value="Here is some text"
    />
  </div>
  `);
});

it("runs onchange function correctly", () => {
  const onChange = jest.fn();
  const component = render(
    <Input
      id="input-id"
      name="example"
      value=""
      label={{
        children: "Please enter some text"
      }}
      onChange={onChange}
    />
  );
  const label = component.getByLabelText("Please enter some text");
  fireEvent.change(label, { target: { value: "a" } });
  expect(onChange).toHaveBeenCalledTimes(1);
});

it("renders correctly with required props", () => {
  const component = create(
    <Input
      name="example"
      value=""
      label={{
        children: "Please enter some text"
      }}
    />
  );

  expect(component).toMatchInlineSnapshot(`
  <div
    className="govuk-form-group lbh-form-group"
  >
    <label
      className="govuk-label lbh-label"
      htmlFor="example"
    >
      Please enter some text
    </label>
    <input
      className="govuk-input lbh-input"
      id="example"
      name="example"
      type="text"
      value=""
    />
  </div>
  `);
});
