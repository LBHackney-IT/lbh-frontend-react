import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { ComponentRegister } from "../ComponentRegister";

import "lbh-frontend/lbh/core/_links.scss";

/**
 * The property types for {@link Link}.
 *
 * @param {string} [id]
 * @param {string} [className]
 * @param {string} href
 * @param {ReactNode} children
 */
export interface LinkProps {
  id?: string;
  className?: string;
  href: string;
  children: ReactNode;
}

/**
 * A component for creating an anchor linking to other pages. You can customize
 * the component used internally for integration with routers using
 * {@link ComponentRegister.init}. By default, it uses an <a> tag.
 *
 * @param {LinkProps} props
 *
 * @returns {ReactElement}
 */
export const Link: FunctionComponent<LinkProps> = ({
  id,
  className,
  href,
  children
}: LinkProps): ReactElement => {
  return (
    <ComponentRegister.Link
      id={id}
      className={classNames("govuk-link lbh-link", className)}
      href={href}
    >
      {children}
    </ComponentRegister.Link>
  );
};

Link.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
