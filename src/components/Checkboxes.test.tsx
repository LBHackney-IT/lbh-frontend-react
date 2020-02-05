import React from "react";
import { create } from "react-test-renderer";

import { Checkboxes } from "./Checkboxes";
import { FieldsetLegend } from "./Fieldset/FieldsetLegend";
import { render, fireEvent } from "@testing-library/react";

it("renders correctly with all props", () => {
  const component = create(
    <Checkboxes
      name="example"
      className="test-class"
      items={[
        {
          id: "bus-id",
          label: {
            children: "Bus"
          },
          value: "bus",
          hint: {
            id: "bus-hint-id",
            className: "bus-hint-class",
            children: "Choose this option to select bus"
          },
          childrenWhenChecked: <p>Here is some text</p>,
          checked: true
        },
        {
          id: "train-id",
          label: {
            children: "Train"
          },
          value: "train",
          hint: {
            id: "train-hint-id",
            className: "train-hint-class",
            children: "Choose this option to select train"
          },
          disabled: true,
          checked: true
        }
      ]}
      fieldset={{
        id: "fieldset-id",
        className: "fieldset-class",
        legend: <FieldsetLegend>How do you commute?</FieldsetLegend>
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
        children: "This includes journeys lasting 15 minutes or longer."
      }}
      formGroup={{
        id: "form-group-id",
        className: "form-group-class"
      }}
      idPrefix="example"
      onChange={(): void => console.log("on change")}
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
        How do you commute?
      </legend>
      <span
        className="govuk-hint lbh-hint hint-class"
        id="hint-id"
      >
        This includes journeys lasting 15 minutes or longer.
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
        className="govuk-checkboxes lbh-checkboxes test-class govuk-checkboxes--conditional"
        data-module="govuk-checkboxes"
      >
        <div
          className="govuk-checkboxes__item"
        >
          <input
            aria-describedby="bus-id-item-hint"
            checked={true}
            className="govuk-checkboxes__input"
            data-aria-controls="conditional-bus-id"
            id="bus-id"
            name="example"
            onChange={[Function]}
            type="checkbox"
            value="bus"
          />
          <label
            className="govuk-label lbh-label govuk-checkboxes__label"
            htmlFor="bus-id"
          >
            Bus
          </label>
          <span
            className="govuk-hint lbh-hint govuk-checkboxes__hint bus-hint-class"
            id="bus-id-item-hint"
          >
            Choose this option to select bus
          </span>
        </div>
        <div
          className="govuk-checkboxes__conditional"
          id="conditional-bus-id"
        >
          <p>
            Here is some text
          </p>
        </div>
        <div
          className="govuk-checkboxes__item"
        >
          <input
            aria-describedby="train-id-item-hint"
            checked={true}
            className="govuk-checkboxes__input"
            disabled={true}
            id="train-id"
            name="example"
            onChange={[Function]}
            type="checkbox"
            value="train"
          />
          <label
            className="govuk-label lbh-label govuk-checkboxes__label"
            htmlFor="train-id"
          >
            Train
          </label>
          <span
            className="govuk-hint lbh-hint govuk-checkboxes__hint train-hint-class"
            id="train-id-item-hint"
          >
            Choose this option to select train
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
    <Checkboxes
      name="example"
      className="test-class"
      items={[
        {
          id: "html-id",
          label: {
            children: "HTML"
          },
          value: "html"
        },
        {
          id: "css-id",
          label: {
            children: "CSS"
          },
          value: "css"
        }
      ]}
      fieldset={{
        id: "fieldset-id",
        className: "fieldset-class",
        legend: <FieldsetLegend>Do you know the following?</FieldsetLegend>
      }}
      onChange={onChange}
    />
  );
  const label = component.getByLabelText("HTML");
  fireEvent.click(label);
  expect(onChange).toHaveBeenCalledTimes(1);
});

it("renders correctly with required props", () => {
  const component = create(
    <Checkboxes
      name="example"
      items={[
        {
          label: {
            children: "A"
          },
          value: "a"
        },
        {
          label: {
            children: "B"
          },
          value: "b"
        }
      ]}
    />
  );

  expect(component).toMatchInlineSnapshot(`
  <div
    className="govuk-form-group lbh-form-group"
  >
    <div
      className="govuk-checkboxes lbh-checkboxes"
    >
      <div
        className="govuk-checkboxes__item"
      >
        <input
          className="govuk-checkboxes__input"
          id="example-a"
          name="example"
          type="checkbox"
          value="a"
        />
        <label
          className="govuk-label lbh-label govuk-checkboxes__label"
          htmlFor="example-a"
        >
          A
        </label>
      </div>
      <div
        className="govuk-checkboxes__item"
      >
        <input
          className="govuk-checkboxes__input"
          id="example-b"
          name="example"
          type="checkbox"
          value="b"
        />
        <label
          className="govuk-label lbh-label govuk-checkboxes__label"
          htmlFor="example-b"
        >
          B
        </label>
      </div>
    </div>
  </div>
  `);
});
