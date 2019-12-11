import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";

import "lbh-frontend/lbh/components/lbh-hint/_hint.scss";

/**
 * The proptypes for {@link Hint}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface HintProps extends React.AriaAttributes, DataAttributes {
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

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <span
      id={id}
      className={classNames("govuk-hint", className)}
      {...extraAttributes}
    >
      {children}
    </span>
  );
};

Hint.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
