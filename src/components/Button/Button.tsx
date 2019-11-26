import classNames from "classnames";
import GovukButton from "govuk-frontend/govuk/components/button/button";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { StartButtonIcon } from "../icons/StartButtonIcon";

import "lbh-frontend/lbh/components/lbh-button/_button.scss";

/**
 * The proptypes for {@link Button}.
 */
export interface ButtonProps {
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
 */
export class Button extends React.Component<ButtonProps> {
  static propTypes: PropTypes.ValidationMap<ButtonProps> = {
    id: PropTypes.string,
    className: PropTypes.string,
    isStartButton: PropTypes.bool,
    preventDoubleClick: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  // This is used by `Button.prototype.debounce`.
  private debounceFormSubmitTimer: NodeJS.Timeout | null = null;

  private handleClick(event: React.MouseEvent<HTMLElement>): void {
    const { onClick, disabled } = this.props;

    if (disabled) {
      return;
    }

    // `debounce` calls `event.preventDefault()` for us, so we don't need to
    // repeat that behaviour.
    const shouldHandleClick = GovukButton.prototype.debounce.call(this, event);

    if (shouldHandleClick === false) {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  render(): JSX.Element {
    const {
      id,
      className,
      isStartButton,
      preventDoubleClick,
      name,
      type,
      children,
      disabled
    } = nullValuesAsUndefined(this.props);
    return (
      <button
        id={id}
        className={classNames("govuk-button lbh-button", className, {
          "govuk-button--start": isStartButton
        })}
        name={name}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        data-prevent-double-click={preventDoubleClick}
        onClick={this.handleClick.bind(this)}
      >
        {children}
        {isStartButton && (
          <StartButtonIcon className="govuk-button__start-icon" />
        )}
      </button>
    );
  }
}
