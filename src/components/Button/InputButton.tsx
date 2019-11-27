import classNames from "classnames";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { debounce, makeDebounceContext } from "../../helpers/debounce";
import "lbh-frontend/lbh/components/lbh-button/_button.scss";

/**
 * The proptypes for {@link InputButton}.
 */
export interface InputButtonProps {
  id?: string | null;
  className?: string | null;
  /**
   * Use for the main call to action on your service's start page. Adjusts the
   * styling of the button but, unlike {@link Button}, does not add an icon due
   * to this using an `<input>` internally.
   */
  isStartButton?: boolean | null;
  /**
   * Debounces clicks within a second of each other preventing multiple form
   * submissions.
   */
  preventDoubleClick?: boolean | null;
  name?: string | null;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  value?: string | null;
  disabled?: boolean | null;
}

/**
 * A component for creating an input element, styled as a button. It can be
 * used to help users carry out actions such as submitting forms.
 */
export class InputButton extends React.Component<InputButtonProps> {
  static propTypes: PropTypes.ValidationMap<InputButtonProps> = {
    id: PropTypes.string,
    className: PropTypes.string,
    isStartButton: PropTypes.bool,
    preventDoubleClick: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.oneOf<"submit" | "button" | "reset">([
      "submit",
      "button",
      "reset"
    ]).isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool
  };

  private debounceContext = makeDebounceContext();

  private handleClick(event: React.MouseEvent<HTMLInputElement>): void {
    const { disabled } = this.props;

    if (disabled) {
      event.preventDefault();
      return;
    }

    if (debounce(event, this.debounceContext)) {
      return;
    }
  }

  /**
   * @ignore
   */
  render(): JSX.Element {
    const {
      id,
      className,
      isStartButton,
      preventDoubleClick,
      name,
      type,
      value,
      disabled
    } = nullValuesAsUndefined(this.props);
    return (
      <input
        id={id}
        className={classNames("govuk-button lbh-button", className, {
          "govuk-button--start": isStartButton
        })}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        onClick={this.handleClick.bind(this)}
        data-prevent-double-click={preventDoubleClick}
      />
    );
  }
}
