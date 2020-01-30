import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { nullValuesAsUndefined } from "null-as-undefined";

import { Attributes, DataAttributes } from "../helpers/Attributes";

import "lbh-frontend/lbh/objects/_form-group.scss";

/**
 * The proptypes for {@link FormGroup}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface FormGroupProps extends FormGroupPropsWithoutChildren {
  /**
   * The form elements.
   */
  children: React.ReactNode;
}

export interface FormGroupPropsWithoutChildren
  extends React.AriaAttributes,
    DataAttributes {
  id?: string | null;
  className?: string | null;
  /**
   * Whether there is an error in the form group or not.
   */
  error?: boolean | null;
}

/**
 * A component used to group labels, controls, optional help text, and
 * form validation messaging. It can be used to wrap a {@link Fieldset}, or to
 * wrap nearly any other set of form elements.
 */
export const FormGroup: React.FunctionComponent<FormGroupProps> = (
  props: FormGroupProps
): React.ReactElement => {
  const { id, className, error, children } = nullValuesAsUndefined(props);

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <div
      id={id}
      className={classNames("govuk-form-group lbh-form-group", className, {
        "govuk-form-group--error lbh-form-group--error": error
      })}
      {...extraAttributes}
    >
      {children}
    </div>
  );
};

export const formGroupWithoutChildrenPropTypes: PropTypes.ValidationMap<FormGroupPropsWithoutChildren> = {
  id: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool
};

FormGroup.propTypes = {
  ...formGroupWithoutChildrenPropTypes,
  children: PropTypes.node.isRequired
};
