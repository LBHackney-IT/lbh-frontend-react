import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";
import { ComponentRegister } from "../helpers/ComponentRegister";

import "lbh-frontend/lbh/core/_links.scss";

/**
 * The proptypes for {@link Link}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface LinkProps extends React.AriaAttributes, DataAttributes {
  id?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
}

/**
 * A component for creating an anchor linking to other pages. You can customize
 * the component used internally for integration with routers using
 * {@link ComponentRegister.init}. By default, it uses an `<a>` tag.
 */
export const Link: React.FunctionComponent<LinkProps> = (
  props: LinkProps
): React.ReactElement => {
  const { id, className, href, children } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <ComponentRegister.Link
      id={id}
      className={classNames("govuk-link", "lbh-link", className)}
      href={href}
      {...extraAttributes}
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
