import classNames from "classnames";
import PropTypes from "prop-types";
import React, { FunctionComponent, ReactNode, ReactElement } from "react";

import "./Label.scss";

/**
 * The property types for {@link Label}.
 *
 * @property {string} [id]
 * @property {string} [className]
 * @property {string} [labelFor]
 * @property {ReactNode} children - The label content
 */
export interface LabelProps {
  id?: string;
  className?: string;
  labelFor?: string;
  children: ReactNode;
}

/**
 * A component for providing labels on inputs.
 *
 * @param {LabelProps} props
 *
 * @returns {ReactElement}
 */
export const Label: FunctionComponent<LabelProps> = ({
  id,
  className,
  labelFor,
  children
}: LabelProps): ReactElement => (
  <label
    id={id}
    className={classNames("govuk-label", "lbh-label", className)}
    htmlFor={labelFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  labelFor: PropTypes.string,
  children: PropTypes.node.isRequired
};
