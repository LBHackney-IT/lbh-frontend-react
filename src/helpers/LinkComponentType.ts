import React from "react";

import { DataAttributes } from "./Attributes";

/**
 * The proptypes for {@link LinkComponentType}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface LinkComponentTypeProps
  extends React.AriaAttributes,
    DataAttributes {
  id?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
}

/**
 * The type of a link component to be passed to {@link ComponentRegister}.
 *
 * It allows any valid React component (including tag strings) that accept
 * {@link LinkComponentTypeProps} as proptypes.
 */
export type LinkComponentType = React.ElementType<LinkComponentTypeProps>;
