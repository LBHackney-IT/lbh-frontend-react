import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "./Hint.scss";

/**
 * The proptypes for {@link Hint}.
 */
export interface HintProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A component for providing hint text to users.
 */
export const Hint: React.FunctionComponent<HintProps> = (
  props: HintProps
): JSX.Element => {
  const { id, className, children } = props;

  return (
    <span id={id} className={classNames("govuk-hint", className)}>
      {children}
    </span>
  );
};

Hint.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
