import React from "react";
import { DataAttributes } from "../../helpers/Attributes";
/**
 * The proptypes for {@link StartButtonIcon}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface StartButtonIconProps
  extends React.AriaAttributes,
    DataAttributes {
  className?: string;
}
/**
 * An icon to display in the start button on the start page of a service.
 */
export declare const StartButtonIcon: React.FunctionComponent<StartButtonIconProps>;
