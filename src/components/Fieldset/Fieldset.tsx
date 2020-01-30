import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { nullValuesAsUndefined } from "null-as-undefined";

import { Attributes, DataAttributes } from "../../helpers/Attributes";

import "lbh-frontend/lbh/components/lbh-fieldset/_fieldset.scss";

/**
 * The proptypes for {@link Fieldset}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface FieldsetProps extends FieldsetPropsWithoutChildren {
  children: React.ReactNode;
}

export interface FieldsetPropsWithoutChildren
  extends React.AriaAttributes,
    DataAttributes {
  id?: string | null;
  className?: string | null;
  role?: string | null;
  /**
   * The legend for the fieldset. You should pass in a {@link FieldsetLegend}
   * component.
   */
  legend?: React.ReactNode | null;
  describedBy?: string | null;
}
/**
 * A component used to group elements within a form.
 */
export const Fieldset: React.FunctionComponent<FieldsetProps> = (
  props: FieldsetProps
): React.ReactElement => {
  const {
    id,
    className,
    legend,
    role,
    describedBy,
    children
  } = nullValuesAsUndefined(props);

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

export const fieldsetWithoutChildrenPropTypes: PropTypes.ValidationMap<FieldsetPropsWithoutChildren> = {
  id: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  legend: PropTypes.element,
  describedBy: PropTypes.string
};

Fieldset.propTypes = {
  ...fieldsetWithoutChildrenPropTypes,
  children: PropTypes.node.isRequired
};
