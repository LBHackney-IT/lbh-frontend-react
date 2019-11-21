import classNames from "classnames";
import GovukButton from "govuk-frontend/govuk/components/button/button";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { nullAsUndefined } from "../../helpers/nullAsUndefined.internal";
import { ComponentRegister } from "../../helpers/ComponentRegister";
import { StartButtonIcon } from "../icons/StartButtonIcon";

import "lbh-frontend/lbh/components/lbh-button/_button.scss";

/**
 * The proptypes for {@link LinkButtonComponentType}.
 */
export interface LinkButtonProps {
  id?: string | null;
  className?: string | null;
  /**
   * Use for the main call to action on your service's start page. Adjusts
   * style of button and adds a start icon.
   */
  isStartButton?: boolean | null;
  href: string;
  children: React.ReactNode;
}

/**
 * A component for creating an anchor linking to other pages, styled as a
 * button. You can customize the component used internally for integration with
 * routers using {@link ComponentRegister.init}. By default, it uses an `<a>`
 * tag.
 */
export class LinkButton extends Component<LinkButtonProps> {
  static propTypes: PropTypes.ValidationMap<LinkButtonProps> = {
    id: PropTypes.string,
    className: PropTypes.string,
    isStartButton: PropTypes.bool,
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  /**
   * @ignore
   */
  render(): JSX.Element {
    const { id, className, isStartButton, href, children } = this.props;
    return (
      <ComponentRegister.LinkButton
        id={nullAsUndefined(id)}
        className={classNames("govuk-button lbh-button", className, {
          "govuk-button--start": isStartButton
        })}
        href={href}
        role="button"
        onKeyDown={GovukButton.prototype.handleKeyDown.bind(this)}
      >
        {children}
        {isStartButton && <StartButtonIcon />}
      </ComponentRegister.LinkButton>
    );
  }
}
