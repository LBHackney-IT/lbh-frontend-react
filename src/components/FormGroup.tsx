import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "lbh-frontend/lbh/objects/_form-group.scss";

/**
 * The proptypes for {@link FormGroup}.
 */
export interface FormGroupProps {
  id?: string;
  className?: string;
  /**
   * Whether there is an error in the form group or not.
   */
  error?: boolean;
  /**
   * The form elements.
   */
  children: React.ReactNode;
}

/**
 * A component used to group labels, controls, optional help text, and
 * form validation messaging. It can be used to wrap a {@link Fieldset}, or to
 * wrap nearly any other set of form elements.
 */
export const FormGroup: React.FunctionComponent<FormGroupProps> = (
  props: FormGroupProps
): JSX.Element => {
  const { id, className, error, children } = props;
  return (
    <div
      id={id}
      className={classNames("govuk-form-group lbh-form-group", className, {
        "govuk-form-group--error lbh-form-group--error": error
      })}
    >
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired
};
