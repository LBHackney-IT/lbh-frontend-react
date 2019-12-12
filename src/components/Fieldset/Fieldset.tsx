import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../../helpers/Attributes";

import "lbh-frontend/lbh/components/lbh-fieldset/_fieldset.scss";

/**
 * The proptypes for {@link Fieldset}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface FieldsetProps extends React.AriaAttributes, DataAttributes {
  id?: string;
  className?: string;
  role?: string;
  /**
   * The legend for the fieldset. You should pass in a {@link FieldsetLegend}
   * component.
   */
  legend?: JSX.Element;
  describedBy?: string;
  children: React.ReactNode;
}

/**
 * A component used to group elements within a form.
 */
export const Fieldset: React.FunctionComponent<FieldsetProps> = (
  props: FieldsetProps
): JSX.Element => {
  const { id, className, legend, role, describedBy, children } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <fieldset
      id={id}
      className={classNames("govuk-fieldset lbh-fieldset", className)}
      role={role}
      {...extraAttributes}
      aria-describedby={describedBy}
    >
      {legend}
      {children}
    </fieldset>
  );
};

Fieldset.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  legend: PropTypes.element,
  describedBy: PropTypes.string,
  children: PropTypes.node.isRequired
};
