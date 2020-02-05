import {
  Fieldset,
  FieldsetPropsWithoutChildren,
  fieldsetWithoutChildrenPropTypes
} from "./Fieldset/Fieldset";
import PropTypes, { ValidationMap } from "prop-types";
import React, { ChangeEvent } from "react";
import { Hint, HintProps } from "./Hint";
import { ErrorMessage, ErrorMessageProps } from "./ErrorMessage";
import {
  FormGroup,
  FormGroupPropsWithoutChildren,
  formGroupWithoutChildrenPropTypes
} from "./FormGroup";
import { Label, LabelProps } from "./Label";
import { Attributes, DataAttributes } from "../helpers/Attributes";
import classNames from "classnames";
import "lbh-frontend/lbh/components/lbh-checkboxes/_checkboxes.scss";
import { getInputId } from "../helpers/inputs";

export interface CheckboxItem extends React.AriaAttributes, DataAttributes {
  /**
   * Specific id attribute for the checkbox item. If omitted, then {@link CheckboxesProps.idPrefix} string will be applied.
   */
  id?: string;
  /**
   * Value for the checkbox input.
   */
  value: string;
  /**
   * Provide attributes and classes to each checkbox item label.
   */
  label: LabelProps;
  /**
   * Provide hint to each checkbox item.
   */
  hint?: HintProps;
  /**
   * If present, checkbox will be checked.
   */
  checked?: boolean;
  /**
   * If present content provided will be revealed when the item is checked.
   * Maps to govuk's conditional prop
   */
  childrenWhenChecked?: React.ReactNode;
  /**
   * If true, checkbox will be disabled.
   */
  disabled?: boolean;
}

export interface CheckboxesProps extends React.AriaAttributes, DataAttributes {
  /**
   * Classes to add to the checkbox container.
   */
  className?: string;
  /**
   * Name attribute for each checkbox item.
   */
  name: string;
  /**
   * Array of {@link Checkbox} objects.
   */
  items: CheckboxItem[];
  /**
   * Options for the wrapping {@link Fieldset} component (e.g. legend).
   */
  fieldset?: FieldsetPropsWithoutChildren;
  /**
   * Options for the {@link Hint} component (e.g. text).
   */
  hint?: HintProps;
  /**
   * Options for the {@link ErrorMessage} component (e.g. text).
   */
  errorMessage?: ErrorMessageProps;
  /**
   * Options for the form-group wrapper
   */
  formGroup?: FormGroupPropsWithoutChildren;
  /**
   * String to prefix id for each checkbox item if no id is specified on each item.
   * If `idPrefix` is not passed, fallback to using the name attribute instead.
   */
  idPrefix?: string;

  onChange?(values: string[]): void;
}

const renderCheckbox = (
  items: CheckboxItem[],
  item: CheckboxItem,
  name: string,
  index: number,
  idPrefix: string,
  onChange?: (values: string[]) => void
): JSX.Element => {
  const checkboxExtraAttributes = Attributes.ariaAndData(item);
  const id = getInputId(item, idPrefix);
  const itemHintId = `${id}-item-hint`;
  let currentValues = items
    .filter(item => item.checked)
    .map(item => item.value);
  return (
    <React.Fragment key={index}>
      <div className="govuk-checkboxes__item">
        <input
          className="govuk-checkboxes__input"
          id={id}
          name={name}
          type="checkbox"
          value={item.value}
          checked={item.checked}
          disabled={item.disabled}
          data-aria-controls={
            item.childrenWhenChecked ? `conditional-${id}` : undefined
          }
          aria-describedby={item.hint?.children ? itemHintId : undefined}
          {...checkboxExtraAttributes}
          onChange={
            onChange !== undefined
              ? (event: ChangeEvent<HTMLInputElement>): void => {
                  let newValues = currentValues;
                  const target = event.target;
                  if (target && target.checked) {
                    if (!currentValues.includes(target.value)) {
                      newValues.push(target.value);
                    }
                  } else {
                    newValues = newValues.filter(v => v !== target.value);
                  }
                  currentValues = newValues;
                  onChange(newValues);
                }
              : undefined
          }
        />
        <Label
          className={classNames(
            "govuk-checkboxes__label",
            item.label.className
          )}
          labelFor={id}
          {...item.label}
        >
          {item.label.children}
        </Label>
        {item.hint?.children && (
          <Hint
            id={itemHintId}
            className={classNames(
              "govuk-checkboxes__hint",
              item.hint?.className
            )}
          >
            {item.hint?.children}
          </Hint>
        )}
      </div>
      {item.childrenWhenChecked && (
        <div
          className={classNames("govuk-checkboxes__conditional", {
            "govuk-checkboxes__conditional--hidden": !item.checked
          })}
          id={`conditional-${id}`}
        >
          {item.childrenWhenChecked}
        </div>
      )}
    </React.Fragment>
  );
};

export const Checkboxes: React.FunctionComponent<CheckboxesProps> = props => {
  const {
    className,
    name,
    items,
    fieldset,
    hint: checkboxesHint,
    errorMessage,
    onChange
  } = props;
  const formGroup = props.formGroup || {};
  const idPrefix = props.idPrefix ? props.idPrefix : name;
  const describedBy = [];
  if (fieldset && fieldset.describedBy) {
    describedBy.push(fieldset.describedBy);
  }
  let hintComponent: React.ReactNode;
  let errorMessageComponent: React.ReactNode;
  const hasConditional = items.some(item => item.childrenWhenChecked);

  if (checkboxesHint) {
    const hintId = checkboxesHint.id ? checkboxesHint.id : `${idPrefix}-hint`;
    describedBy.push(hintId);
    hintComponent = <Hint id={hintId} {...checkboxesHint} />;
  }

  if (errorMessage) {
    const errorId = errorMessage.id ? errorMessage.id : `${idPrefix}-error`;
    describedBy.push(errorId);
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />;
    formGroup.error = true;
  }

  const extraAttributes = Attributes.ariaAndData(props);
  const checkboxClassNames = classNames(
    "govuk-checkboxes lbh-checkboxes",
    className,
    {
      "govuk-checkboxes--conditional": hasConditional
    }
  );

  const innerContent = (
    <>
      {checkboxesHint && hintComponent}
      {errorMessage && errorMessageComponent}
      <div
        className={checkboxClassNames}
        data-module={hasConditional ? "govuk-checkboxes" : undefined}
        {...extraAttributes}
      >
        {items.map((item, index) =>
          renderCheckbox(items, item, name, index, idPrefix, onChange)
        )}
      </div>
    </>
  );

  return (
    <FormGroup {...formGroup}>
      {fieldset ? (
        <Fieldset
          describedBy={
            describedBy.length > 0 ? describedBy.join(" ") : undefined
          }
          {...fieldset}
        >
          {innerContent}
        </Fieldset>
      ) : (
        innerContent
      )}
    </FormGroup>
  );
};

Checkboxes.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string.isRequired,
      label: PropTypes.exact(Label.propTypes as ValidationMap<LabelProps>)
        .isRequired,
      hint: PropTypes.exact(Hint.propTypes as ValidationMap<HintProps>),
      checked: PropTypes.bool,
      childrenWhenChecked: PropTypes.node,
      disabled: PropTypes.bool
    }).isRequired
  ).isRequired,
  fieldset: PropTypes.shape(fieldsetWithoutChildrenPropTypes),
  hint: PropTypes.exact(Hint.propTypes as ValidationMap<HintProps>),
  errorMessage: PropTypes.shape(
    ErrorMessage.propTypes as ValidationMap<ErrorMessageProps>
  ),
  formGroup: PropTypes.shape(formGroupWithoutChildrenPropTypes),
  idPrefix: PropTypes.string,
  onChange: PropTypes.func
};
