import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "./Label.scss";

/**
 * The property types for {@link Label}.
 */
export interface LabelProps {
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
): JSX.Element => {
  const { id, className, labelFor, children } = props;

  return (
    <label
      id={id}
      className={classNames("govuk-label", "lbh-label", className)}
      htmlFor={labelFor}
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
