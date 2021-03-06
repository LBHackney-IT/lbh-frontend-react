import {
  Fieldset,
  FieldsetPropsWithoutChildren,
  fieldsetWithoutChildrenPropTypes,
} from "./Fieldset/Fieldset";
import PropTypes, { ValidationMap } from "prop-types";
import React from "react";
import { Hint, HintProps } from "./Hint";
import { ErrorMessage, ErrorMessageProps } from "./ErrorMessage";
import {
  FormGroup,
  FormGroupPropsWithoutChildren,
  formGroupWithoutChildrenPropTypes,
} from "./FormGroup";
import { Label, LabelProps } from "./Label";
import { Attributes, DataAttributes } from "../helpers/Attributes";
import classNames from "classnames";
import "lbh-frontend/lbh/components/lbh-radios/_radios.scss";
import { getInputId } from "../helpers/inputs";
import { nullValuesAsUndefined } from "null-as-undefined";

export interface RadioButton extends React.AriaAttributes, DataAttributes {
  /**
   * Specific id attribute for the radio item. If omitted, then {@link RadiosProps.idPrefix} string will be applied.
   */
  id?: string | null;
  /**
   * Value for the radio input.
   */
  value: string;
  /**
   * Provide attributes and classes to each radio item label.
   */
  label: LabelProps;
  /**
   * Provide hint to each checkbox item.
   */
  hint?: HintProps | null;
  /**
   * If present, radio will be checked.
   */
  checked?: boolean | null;
  /**
   * If present content provided will be revealed when the item is checked.
   * Maps to govuk's conditional prop
   */
  childrenWhenChecked?: React.ReactNode | null;
  /**
   * If true, radio will be disabled.
   */
  disabled?: boolean | null;
}

export interface Divider extends React.AriaAttributes, DataAttributes {
  /**
   * Divider text to separate radio items, for example the text "or".
   */
  divider: string;
}

export interface RadiosProps extends React.AriaAttributes, DataAttributes {
  /**
   * Classes to add to the radio container.
   */
  className?: string | null;
  /**
   * Name attribute for each radio item.
   */
  name: string;
  /**
   * Array of {@link RadioButton} objects.
   */
  items: (RadioButton | Divider)[];
  /**
   * Options for the wrapping {@link Fieldset} component (e.g. legend).
   */
  fieldset?: FieldsetPropsWithoutChildren | null;
  /**
   * Options for the {@link Hint} component (e.g. text).
   */
  hint?: HintProps | null;
  /**
   * Options for the {@link ErrorMessage} component (e.g. text).
   */
  errorMessage?: ErrorMessageProps | null;
  /**
   * Options for the form-group wrapper
   */
  formGroup?: FormGroupPropsWithoutChildren | null;
  /**
   * String to prefix id for each checkbox item if no id is specified on each item.
   * If `idPrefix` is not passed, fallback to using the name attribute instead.
   */
  idPrefix?: string | null;
  /**
   * Function to perform when the onChange event is fired
   */
  onChange?(value: string): void | null;
  /**
   * Set to true if this is a required field
   */
  required?: boolean | null;
}

const renderRadio = (
  item: RadioButton,
  name: string,
  index: number,
  idPrefix: string,
  radioExtraAttributes: React.AriaAttributes & DataAttributes,
  onChange?: (value: string) => void,
  required?: boolean
): JSX.Element => {
  const itemWithNoNull = nullValuesAsUndefined(item);
  const id = getInputId(itemWithNoNull, idPrefix);
  const itemHintId = `${id}-item-hint`;
  return (
    <React.Fragment key={index}>
      <div className="govuk-radios__item">
        <input
          className="govuk-radios__input"
          id={id}
          name={name}
          type="radio"
          value={item.value}
          checked={itemWithNoNull.checked}
          disabled={itemWithNoNull.disabled}
          required={required}
          data-aria-controls={
            item.childrenWhenChecked ? `conditional-${id}` : undefined
          }
          aria-describedby={item.hint?.children ? itemHintId : undefined}
          {...radioExtraAttributes}
          onChange={
            onChange !== undefined
              ? (): void => {
                  onChange(item.value);
                }
              : undefined
          }
        />
        <Label
          className={classNames("govuk-radios__label", item.label.className)}
          labelFor={id}
          {...item.label}
        >
          {item.label.children}
        </Label>
        {item.hint?.children && (
          <Hint
            id={itemHintId}
            className={classNames("govuk-radios__hint", item.hint?.className)}
          >
            {item.hint?.children}
          </Hint>
        )}
      </div>
      {item.childrenWhenChecked && (
        <div
          className={classNames("govuk-radios__conditional", {
            "govuk-radios__conditional--hidden": !item.checked,
          })}
          id={`conditional-${id}`}
        >
          {item.childrenWhenChecked}
        </div>
      )}
    </React.Fragment>
  );
};

const renderDivider = (
  item: Divider,
  index: number,
  radioExtraAttributes: React.AriaAttributes & DataAttributes
): JSX.Element => {
  return (
    <div
      className="govuk-radios__divider"
      key={index}
      {...radioExtraAttributes}
    >
      {item.divider}
    </div>
  );
};

const renderItem = (
  item: RadioButton | Divider,
  name: string,
  index: number,
  idPrefix: string,
  onChange?: (value: string) => void,
  required?: boolean
): JSX.Element => {
  const radioExtraAttributes = Attributes.ariaAndData(item);
  if ((item as Divider).divider) {
    return renderDivider(item as Divider, index, radioExtraAttributes);
  } else {
    return renderRadio(
      item as RadioButton,
      name,
      index,
      idPrefix,
      radioExtraAttributes,
      onChange,
      required
    );
  }
};

export const Radios: React.FunctionComponent<RadiosProps> = (props) => {
  const {
    className,
    name,
    items,
    fieldset,
    hint: radiosHint,
    errorMessage,
    onChange,
    required,
  } = nullValuesAsUndefined(props);
  const formGroup = props.formGroup || {};
  const idPrefix = props.idPrefix ? props.idPrefix : name;
  const describedBy = [];
  if (fieldset && fieldset.describedBy) {
    describedBy.push(fieldset.describedBy);
  }
  let hintComponent: React.ReactNode;
  let errorMessageComponent: React.ReactNode;
  const hasConditional = items.some(
    (item) => (item as RadioButton).childrenWhenChecked
  );

  if (radiosHint) {
    const hintId = radiosHint.id ? radiosHint.id : `${idPrefix}-hint`;
    describedBy.push(hintId);
    hintComponent = <Hint id={hintId} {...radiosHint} />;
  }

  if (errorMessage) {
    const errorId = errorMessage.id ? errorMessage.id : `${idPrefix}-error`;
    describedBy.push(errorId);
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />;
    formGroup.error = true;
  }

  const extraAttributes = Attributes.ariaAndData(props);
  const radioClassNames = classNames("govuk-radios lbh-radios", className, {
    "govuk-radios--conditional": hasConditional,
  });

  const innerContent = (
    <>
      {radiosHint && hintComponent}
      {errorMessage && errorMessageComponent}
      <div
        className={radioClassNames}
        data-module={hasConditional ? "govuk-radios" : undefined}
        {...extraAttributes}
      >
        {items.map((item, index) =>
          renderItem(item, name, index, idPrefix, onChange, required)
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

Radios.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string.isRequired,
        label: PropTypes.exact(Label.propTypes as ValidationMap<LabelProps>)
          .isRequired,
        hint: PropTypes.exact(Hint.propTypes as ValidationMap<HintProps>),
        checked: PropTypes.bool,
        childrenWhenChecked: PropTypes.node,
        disabled: PropTypes.bool,
      }).isRequired,
      PropTypes.exact({
        divider: PropTypes.string.isRequired,
      }).isRequired,
    ]).isRequired
  ).isRequired,
  fieldset: PropTypes.shape(fieldsetWithoutChildrenPropTypes),
  hint: PropTypes.exact(Hint.propTypes as ValidationMap<HintProps>),
  errorMessage: PropTypes.shape(
    ErrorMessage.propTypes as ValidationMap<ErrorMessageProps>
  ),
  formGroup: PropTypes.shape(formGroupWithoutChildrenPropTypes),
  idPrefix: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
