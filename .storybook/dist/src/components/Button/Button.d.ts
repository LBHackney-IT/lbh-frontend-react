import PropTypes from "prop-types";
import React from "react";
import { DataAttributes } from "../../helpers/Attributes";
import "lbh-frontend/lbh/components/lbh-button/_button.scss";
/**
 * The proptypes for {@link Button}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface ButtonProps extends React.AriaAttributes, DataAttributes {
  id?: string | null;
  className?: string | null;
  /**
   * Use for the main call to action on your service's start page. Adjusts
   * style of the button and adds a start icon as the last child.
   */
  isStartButton?: boolean | null;
  /**
   * Debounces clicks within a second of each other preventing multiple form
   * submissions.
   */
  preventDoubleClick?: boolean | null;
  name?: string | null;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] | null;
  /**
   * The text of the button.
   *
   * This is followed by the start icon if {@link ButtonProps.isStartButton} is
   * `true`.
   */
  children: React.ReactNode;
  disabled?: boolean | null;
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | null;
}
/**
 * The button element, that can be used to help users
 * carry out an action.
 *
 * @noInheritDoc
 */
export declare class Button extends React.Component<ButtonProps> {
  static propTypes: PropTypes.ValidationMap<ButtonProps>;
  private debounceContext;
  private handleClick;
  /**
   * @ignore
   */
  render(): React.ReactElement;
}
