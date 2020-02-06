import React from "react";
import { create } from "react-test-renderer";

import { Textarea } from "./Textarea";
import { render, fireEvent } from "@testing-library/react";

it("renders correctly with all props", () => {
  const component = create(
    <Textarea
      id="my-textarea"
      name="example"
      className="test-class"
      rows={10}
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
    />
  );

  expect(component).toMatchInlineSnapshot(`
  <div
    className="govuk-form-group lbh-form-group form-group-class govuk-form-group--error lbh-form-group--error"
    id="form-group-id"
  >
    <label
      className="govuk-label lbh-label"
      htmlFor="my-textarea"
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
    <textarea
      aria-describedby="hint-id error-id"
      autoComplete="username"
      className="govuk-textarea lbh-textarea govuk-textarea--error test-class"
      disabled={true}
      id="my-textarea"
      name="example"
      onChange={[Function]}
      required={true}
      rows={10}
    >
      Here is some text
    </textarea>
  </div>
  `);
});

it("runs onchange function correctly", () => {
  const onChange = jest.fn();
  const component = render(
    <Textarea
      id="textarea-id"
      name="example"
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
    <Textarea
      name="example"
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
    <textarea
      className="govuk-textarea lbh-textarea"
      id="example"
      name="example"
      rows={5}
    />
  </div>
  `);
});
