import classNames from "classnames";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../../helpers/Attributes";

import "lbh-frontend/lbh/core/_typography.scss";

/**
 * The possible sizes for {@link Paragraph}.
 */
export enum ParagraphSize {
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",

  /**
   * An alias for styling paragraph text as a lead paragraph.
   */
  Lead = "lead",
}

/**
 * The proptypes for {@link Paragraph}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface ParagraphProps extends React.AriaAttributes, DataAttributes {
  id?: string | null;
  className?: string | null;
  /**
   * The size of the paragraph text.
   *
   * Defaults to standard sized paragraph text.
   */
  size?: ParagraphSize | null;
  /**
   * The Paragraph text.
   */
  children: React.ReactNode;
}

/**
 * A component for creating paragraph text.
 */
export const Paragraph: React.FunctionComponent<ParagraphProps> = (
  props: ParagraphProps
): React.ReactElement => {
  const { id, className, size, children } = nullValuesAsUndefined(props);

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <p
      id={id}
      className={classNames(`lbh-body${size ? `-${size}` : ""}`, className)}
      {...extraAttributes}
    >
      <div>{children}</div>
    </p>
  );
};

Paragraph.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf<ParagraphSize>([
    ParagraphSize.XS,
    ParagraphSize.S,
    ParagraphSize.M,
    ParagraphSize.L,
  ]),
  children: PropTypes.node.isRequired,
} as PropTypes.ValidationMap<ParagraphProps>;
