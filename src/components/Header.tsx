import classNames from "classnames";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";
import { ComponentRegister } from "../helpers/ComponentRegister";
import { HackneyLogo } from "./icons/HackneyLogo";
import { Container } from "./Container";

import "lbh-frontend/lbh/components/lbh-header/_header.scss";

/**
 * Possible alternative colour schemes used by {@link Header}.
 */
export enum ColourSchemes {
  Red = "red",
  Purple = "purple"
}

/**
 * The proptypes for {@link Header}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface HeaderProps extends React.AriaAttributes, DataAttributes {
  id?: string | null;
  className?: string | null;

  /**
   * Defaults to `"/"`.
   */
  homepageUrl?: string | null;

  serviceName?: string | null;
  isServiceNameShort?: boolean | null;

  isHome?: boolean | null;
  isFixed?: boolean | null;
  isStackedOnMobile?: boolean | null;

  /**
   * The colour scheme to use instead of the default scheme.
   */
  colourScheme?: ColourSchemes | null;

  /**
   * The navigation links to include in the header.
   */
  children?: React.ReactNode | null;
}

/**
 * A component for providing a page header, including the site navigation.
 */
export const Header: React.FunctionComponent<HeaderProps> = (
  props: HeaderProps
): JSX.Element => {
  const {
    id,
    className,
    homepageUrl,
    serviceName,
    isServiceNameShort,
    isHome,
    isFixed,
    isStackedOnMobile,
    colourScheme,
    children
  } = nullValuesAsUndefined(props);

  const extraAttributes = Attributes.ariaAndData(props);

  const Title = isHome ? "h1" : "div";

  return (
    <header
      id={id}
      className={classNames(className, "lbh-header", {
        "lbh-header--fixed": isFixed,
        [`lbh-header--${colourScheme}`]: colourScheme
      })}
      {...extraAttributes}
    >
      <div className="lbh-header__main">
        <Container
          className={classNames(
            className,
            "lbh-container",
            "lbh-header__wrapper",
            { "lbh-header__wrapper--stacked": isStackedOnMobile }
          )}
        >
          <Title className="lbh-header__title">
            <ComponentRegister.Link
              className="lbh-header__title-link"
              href={homepageUrl || "/"}
            >
              <HackneyLogo className="lbh-header__logo" />
              <span className="lbh-header__logo-text">Hackney</span>
              {serviceName && (
                <span
                  className={classNames("lbh-header__service-name", {
                    "lbh-header__service-name--short": isServiceNameShort
                  })}
                >
                  {serviceName}
                </span>
              )}
            </ComponentRegister.Link>
          </Title>
          {children && <div className="lbh-header__links">{children}</div>}
        </Container>
      </div>
    </header>
  );
};

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,

  homepageUrl: PropTypes.string,

  serviceName: PropTypes.string,
  isServiceNameShort: PropTypes.bool,

  isHome: PropTypes.bool,
  isFixed: PropTypes.bool,
  isStackedOnMobile: PropTypes.bool,

  colourScheme: PropTypes.oneOf<ColourSchemes>([
    ColourSchemes.Red,
    ColourSchemes.Purple
  ]),

  children: PropTypes.node
};
