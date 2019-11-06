import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { ComponentRegister, LinkComponent } from "../ComponentRegister";

import "lbh-frontend/lbh/core/_links.scss";

/**
 * A component for creating an anchor linking to other pages. You can customize the component used internally for
 * integration with routers using {@link ComponentRegister.init}. By default, it uses an <a> tag.
 *
 * @param {string} [className]
 * @param {string} href
 * @param {ReactNode} children
 *
 * @returns {LinkComponent}
 */
export const Link: LinkComponent = ({ className, href, children }) => {
  return (
    <ComponentRegister.Link
      className={classNames("govuk-link lbh-link", className)}
      href={href}
    >
      {children}
    </ComponentRegister.Link>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
