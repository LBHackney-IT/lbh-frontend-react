import classNames from "classnames";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../../helpers/Attributes";
import { debounce, makeDebounceContext } from "../../helpers/debounce";
import { StartButtonIcon } from "../icons/StartButtonIcon";

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

  private debounceContext = makeDebounceContext();

  private handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const { onClick, disabled } = this.props;

    if (disabled) {
      event.preventDefault();
      return;
    }

    if (debounce(event, this.debounceContext)) {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  /**
   * @ignore
   */
  render(): React.ReactElement {
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

    const extraAttributes = Attributes.ariaAndData(this.props);

    return (
      <button
        id={id}
        className={classNames("govuk-button lbh-button", className, {
          "govuk-button--start": isStartButton
        })}
        name={name}
        type={type}
        disabled={disabled}
        onClick={this.handleClick.bind(this)}
        {...extraAttributes}
        aria-disabled={disabled}
        data-prevent-double-click={preventDoubleClick}
      >
        {children}
        {isStartButton && (
          <StartButtonIcon className="govuk-button__start-icon" />
        )}
      </button>
    );
  }
}
