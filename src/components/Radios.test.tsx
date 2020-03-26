import React from "react";
import { create } from "react-test-renderer";

import { Radios } from "./Radios";
import { FieldsetLegend } from "./Fieldset/FieldsetLegend";
import { render, fireEvent } from "@testing-library/react";

it("renders correctly with all props", () => {
  const component = create(
    <Radios
      name="example"
      className="test-class"
      items={[
        {
          id: "yes-id",
          label: {
            children: "Yes",
          },
          value: "yes",
          hint: {
            id: "yes-hint-id",
            className: "yes-hint-class",
            children: "Choose this option to select yes",
          },
          childrenWhenChecked: <p>Here is some text</p>,
          checked: true,
        },
        {
          divider: "or",
        },
        {
          id: "no-id",
          label: {
            children: "No",
          },
          value: "no",
          hint: {
            id: "no-hint-id",
            className: "no-hint-class",
            children: "Choose this option to select no",
          },
          disabled: true,
        },
      ]}
      fieldset={{
        id: "fieldset-id",
        className: "fieldset-class",
        legend: <FieldsetLegend>Have you changed your name?</FieldsetLegend>,
      }}
      errorMessage={{
        id: "error-id",
        className: "error-class",
        visuallyHiddenText: "My error",
        children: "There has been an error",
      }}
      hint={{
        id: "hint-id",
        className: "hint-class",
        children:
          "This includes changing your last name or spelling your name differently.",
      }}
      formGroup={{
        id: "form-group-id",
        className: "form-group-class",
      }}
      idPrefix="example"
      onChange={(): void => console.log("on change")}
      required={true}
    />
  );

  expect(component).toMatchInlineSnapshot(`
  <div
    className="govuk-form-group lbh-form-group form-group-class govuk-form-group--error lbh-form-group--error"
    id="form-group-id"
  >
    <fieldset
      aria-describedby="hint-id error-id"
      className="govuk-fieldset lbh-fieldset fieldset-class"
      id="fieldset-id"
    >
      <legend
        className="govuk-fieldset__legend lbh-fieldset__legend"
      >
        Have you changed your name?
      </legend>
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
      <div
        className="govuk-radios lbh-radios test-class govuk-radios--conditional"
        data-module="govuk-radios"
      >
        <div
          className="govuk-radios__item"
        >
          <input
            aria-describedby="yes-id-item-hint"
            checked={true}
            className="govuk-radios__input"
            data-aria-controls="conditional-yes-id"
            id="yes-id"
            name="example"
            onChange={[Function]}
            required={true}
            type="radio"
            value="yes"
          />
          <label
            className="govuk-label lbh-label govuk-radios__label"
            htmlFor="yes-id"
          >
            Yes
          </label>
          <span
            className="govuk-hint lbh-hint govuk-radios__hint yes-hint-class"
            id="yes-id-item-hint"
          >
            Choose this option to select yes
          </span>
        </div>
        <div
          className="govuk-radios__conditional"
          id="conditional-yes-id"
        >
          <p>
            Here is some text
          </p>
        </div>
        <div
          className="govuk-radios__divider"
        >
          or
        </div>
        <div
          className="govuk-radios__item"
        >
          <input
            aria-describedby="no-id-item-hint"
            className="govuk-radios__input"
            disabled={true}
            id="no-id"
            name="example"
            onChange={[Function]}
            required={true}
            type="radio"
            value="no"
          />
          <label
            className="govuk-label lbh-label govuk-radios__label"
            htmlFor="no-id"
          >
            No
          </label>
          <span
            className="govuk-hint lbh-hint govuk-radios__hint no-hint-class"
            id="no-id-item-hint"
          >
            Choose this option to select no
          </span>
        </div>
      </div>
    </fieldset>
  </div>
  `);
});

it("runs onchange function correctly", () => {
  const onChange = jest.fn();
  const component = render(
    <Radios
      name="example"
      className="test-class"
      items={[
        {
          id: "yes-id",
          label: {
            children: "Yes",
          },
          value: "yes",
        },
        {
          id: "no-id",
          label: {
            children: "No",
          },
          value: "no",
        },
      ]}
      fieldset={{
        id: "fieldset-id",
        className: "fieldset-class",
        legend: <FieldsetLegend>Have you changed your name?</FieldsetLegend>,
      }}
      onChange={onChange}
    />
  );
  const label = component.getByLabelText("Yes");
  fireEvent.click(label);
  expect(onChange).toHaveBeenCalledTimes(1);
});

it("renders correctly with required props", () => {
  const component = create(
    <Radios
      name="example"
      items={[
        {
          label: {
            children: "Yes",
          },
          value: "yes",
        },
        {
          label: {
            children: "No",
          },
          value: "no",
        },
      ]}
    />
  );

  expect(component).toMatchInlineSnapshot(`
  <div
    className="govuk-form-group lbh-form-group"
  >
    <div
      className="govuk-radios lbh-radios"
    >
      <div
        className="govuk-radios__item"
      >
        <input
          className="govuk-radios__input"
          id="example-yes"
          name="example"
          type="radio"
          value="yes"
        />
        <label
          className="govuk-label lbh-label govuk-radios__label"
          htmlFor="example-yes"
        >
          Yes
        </label>
      </div>
      <div
        className="govuk-radios__item"
      >
        <input
          className="govuk-radios__input"
          id="example-no"
          name="example"
          type="radio"
          value="no"
        />
        <label
          className="govuk-label lbh-label govuk-radios__label"
          htmlFor="example-no"
        >
          No
        </label>
      </div>
    </div>
  </div>
  `);
});
