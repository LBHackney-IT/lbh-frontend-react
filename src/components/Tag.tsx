import PropTypes from "prop-types";
import classnames from "classnames";
import React from "react";

import "lbh-frontend/lbh/components/lbh-tag/_tag.scss";

/**
 * The proptypes for {@link Tag}.
 */
export interface TagProps {
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
): JSX.Element => {
  const { id, className, children } = props;
  return (
    <strong id={id} className={classnames("govuk-tag", "lbh-tag", className)}>
      {children}
    </strong>
  );
};

Tag.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
