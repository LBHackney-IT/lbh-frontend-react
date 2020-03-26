import classNames from "classnames";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../../helpers/Attributes";

import "lbh-frontend/lbh/core/_typography.scss";

/**
 * The level of heading for {@link Heading}.
 */
export enum HeadingLevels {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

/**
 * The proptypes for {@link Heading}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface HeadingProps extends React.AriaAttributes, DataAttributes {
  id?: string | null;
  className?: string | null;
  level: HeadingLevels;
  /**
   * The heading text.
   */
  children: React.ReactNode;
}

/**
 * A component that creates a heading tag (`<h1>`, `<h2>`, etc.).
 */
export const Heading: React.FunctionComponent<HeadingProps> = (
  props: HeadingProps
): React.ReactElement => {
  const { id, className, level, children } = nullValuesAsUndefined(props);

  const extraAttributes = Attributes.ariaAndData(props);

  const H = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <H
      id={id}
      className={classNames(`lbh-heading-h${level}`, className)}
      {...extraAttributes}
    >
      {children}
    </H>
  );
};

Heading.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  level: PropTypes.oneOf<HeadingLevels>([
    HeadingLevels.H1,
    HeadingLevels.H2,
    HeadingLevels.H3,
    HeadingLevels.H4,
    HeadingLevels.H5,
    HeadingLevels.H6,
  ]).isRequired,
  children: PropTypes.node.isRequired,
} as PropTypes.ValidationMap<HeadingProps>;
