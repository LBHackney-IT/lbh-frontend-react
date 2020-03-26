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
import "lbh-frontend/lbh/components/lbh-input/_input.scss";

export enum InputType {
  Text = "text",
  Email = "email",
  Password = "password",
  Number = "number",
  Search = "search",
  Tel = "tel",
  Url = "url",
}

export interface InputProps extends React.AriaAttributes, DataAttributes {
  /**
   * Id of the input.
   */
  id?: string;
  /**
   * Classes to add to the input.
   */
  className?: string;
  /**
   * Name attribute for the input.
   */
  name: string;
  /**
   * Type attribute for the input.
   */
  type?: InputType;
  /**
   * Value of the input.
   */
  value: string;
  /**
   * Options for the {@link Label} component.
   */
  label: LabelProps;
  /**
   * Options for the {@link Hint} component (e.g. text).
   */
  hint?: HintProps;
  /**
   * Options for the {@link ErrorMessage} component (e.g. text).
   */
  errorMessage?: ErrorMessageProps;
  /**
   * Options for the {@link FormGroup} wrapper.
   */
  formGroup?: FormGroupPropsWithoutChildren;
  /**
   * Function to perform when the onChange event is fired.
   */
  onChange?(value: string): void;
  /**
   * Attribute to
   * {@link https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html|identify input purpose}
   * for instance "postal-code" or "username". See
   * {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill|autofill})
   * for full list of attributes that can be used.
   */
  autocomplete?: string;
  /**
   * Set to `true` if this is a required field.
   */
  required?: boolean;
  /**
   * If `true`, input will be disabled.
   */
  disabled?: boolean;
  /**
   * Attribute to {@link https://www.w3.org/TR/html51/sec-forms.html#the-pattern-attribute provide a regular expression pattern}, used to match allowed character combinations for the input value
   */
  pattern?: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const {
    className,
    name,
    type,
    label,
    hint,
    errorMessage,
    onChange,
    autocomplete,
    value,
    required,
    disabled,
    pattern,
  } = props;
  const id = props.id || name;
  const formGroup = props.formGroup || {};
  const describedBy = [];
  let hintComponent: React.ReactNode;
  let errorMessageComponent: React.ReactNode;

  if (hint) {
    const hintId = hint.id ? hint.id : `${id}-hint`;
    describedBy.push(hintId);
    hintComponent = <Hint id={hintId} {...hint} />;
  }

  if (errorMessage) {
    const errorId = errorMessage.id ? errorMessage.id : `${id}-error`;
    describedBy.push(errorId);
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />;
    formGroup.error = true;
  }

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <FormGroup {...formGroup}>
      <Label labelFor={id} {...label} />
      {hint && hintComponent}
      {errorMessage && errorMessageComponent}
      <input
        className={classNames(
          "govuk-input lbh-input",
          errorMessage && "govuk-input--error",
          className
        )}
        type={type || InputType.Text}
        id={id}
        name={name}
        aria-describedby={
          describedBy.length > 0 ? describedBy.join(" ") : undefined
        }
        autoComplete={autocomplete}
        required={required}
        disabled={disabled}
        onChange={
          onChange !== undefined
            ? (event): void => {
                onChange(event.target.value);
              }
            : undefined
        }
        value={value}
        pattern={pattern}
        {...extraAttributes}
      />
    </FormGroup>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string as PropTypes.Requireable<InputType>,
  label: PropTypes.exact(Label.propTypes as ValidationMap<LabelProps>)
    .isRequired,
  value: PropTypes.string.isRequired,
  hint: PropTypes.exact(Hint.propTypes as ValidationMap<HintProps>),
  errorMessage: PropTypes.shape(
    ErrorMessage.propTypes as ValidationMap<ErrorMessageProps>
  ),
  formGroup: PropTypes.shape(formGroupWithoutChildrenPropTypes),
  onChange: PropTypes.func,
  autocomplete: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  pattern: PropTypes.string,
};
