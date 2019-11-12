import classNames from "classnames";
import PropTypes from "prop-types";
import React, { FunctionComponent, ReactElement, ReactNode } from "react";

import "./Hint.scss";

/**
 * The property types for {@link Hint}.
 *
 * @property {string} [id]
 * @property {string} [className]
 * @property {ReactNode} children - The hint message
 */
export interface HintProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * A component for providing hint text to users.
 *
 * @param {HintProps} props
 *
 * @returns {ReactElement}
 */
export const Hint: FunctionComponent<HintProps> = ({
  id,
  className,
  children
}: HintProps): ReactElement => (
  <span id={id} className={classNames("govuk-hint", className)}>
    {children}
  </span>
);

Hint.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
