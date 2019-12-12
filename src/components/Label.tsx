import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";

import "lbh-frontend/lbh/components/lbh-label/_label.scss";

/**
 * The property types for {@link Label}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface LabelProps extends React.AriaAttributes, DataAttributes {
  id?: string;
  className?: string;
  labelFor?: string;
  children: React.ReactNode;
}

/**
 * A component for labelling inputs.
 */
export const Label: React.FunctionComponent<LabelProps> = (
  props: LabelProps
): React.ReactElement => {
  const { id, className, labelFor, children } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <label
      id={id}
      className={classNames("govuk-label", "lbh-label", className)}
      htmlFor={labelFor}
      {...extraAttributes}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  labelFor: PropTypes.string,
  children: PropTypes.node.isRequired
};
