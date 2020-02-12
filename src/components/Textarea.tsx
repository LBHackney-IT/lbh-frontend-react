import PropTypes, { ValidationMap } from "prop-types";
import React from "react";
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
import "lbh-frontend/lbh/components/lbh-textarea/_textarea.scss";

export interface TextareaProps extends React.AriaAttributes, DataAttributes {
  /**
   * Id of the textarea.
   */
  id?: string;
  /**
   * Classes to add to the textarea.
   */
  className?: string;
  /**
   * Name attribute for the textarea.
   */
  name: string;
  /**
   * Number of rows for the textarea (default: 5).
   */
  rows?: number;
  /**
   * Value of the textarea.
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
   * If `true`, textarea will be disabled.
   */
  disabled?: boolean;
}

export const Textarea: React.FunctionComponent<TextareaProps> = props => {
  const {
    className,
    name,
    rows,
    label,
    hint,
    errorMessage,
    onChange,
    autocomplete,
    value,
    required,
    disabled
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
      <textarea
        className={classNames(
          "govuk-textarea lbh-textarea",
          errorMessage && "govuk-textarea--error",
          className
        )}
        id={id}
        name={name}
        rows={rows || 5}
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
        {...extraAttributes}
      />
    </FormGroup>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
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
  disabled: PropTypes.bool
};
