import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";

import "lbh-frontend/lbh/objects/_width-container.scss";

/**
 * The proptypes for {@link Container}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface ContainerProps extends React.AriaAttributes, DataAttributes {
  id?: string;
  className?: string;
  /**
   * The elements inside {@link Container}.
   */
  children: React.ReactNode;
}

/**
 * A component that wraps a set of elements within a single container. Can be
 * used to provide consistency in layout, for example, for all elements on a
 * page to have a certain width.
 */
export const Container: React.FunctionComponent<ContainerProps> = (
  props: ContainerProps
): JSX.Element => {
  const { id, className, children } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <div
      id={id}
      className={classNames("govuk-container", "lbh-container", className)}
      {...extraAttributes}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
