import PropTypes from "prop-types";
import classnames from "classnames";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";

import "lbh-frontend/lbh/components/lbh-tag/_tag.scss";

/**
 * The proptypes for {@link Tag}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface TagProps extends React.AriaAttributes, DataAttributes {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A component for indicating the status of something, such as
 * an item on a task list or a phase banner.
 */
export const Tag: React.FunctionComponent<TagProps> = (
  props: TagProps
): React.ReactElement => {
  const { id, className, children } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <strong
      id={id}
      className={classnames("govuk-tag", "lbh-tag", className)}
      {...extraAttributes}
    >
      {children}
    </strong>
  );
};

Tag.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
