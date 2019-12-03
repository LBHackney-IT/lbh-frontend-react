import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "lbh-frontend/lbh/objects/_main-wrapper.scss";

/**
 * The proptypes for {@link Main}.
 */
export interface MainProps {
  /**
   * Defaults to `"main-content"` if not set.
   */
  id?: string;
  className?: string;
  /**
   * The elements within the main wrapper. Contains the content you deem to be
   * the most important for your page.
   */
  children: React.ReactNode;
}

/**
 * A wrapper for the main content within the page. Can be used as an indicator
 * of where the main content begins within a page, so somebody using assistive
 * technology can navigate to the information that they need more easily.
 */
export const Main: React.FunctionComponent<MainProps> = (
  props: MainProps
): JSX.Element => {
  const { id, className, children } = props;

  return (
    <main
      className={classNames(
        "govuk-main-wrapper",
        "lbh-main-wrapper",
        className
      )}
      id={id ? id : "main-content"}
      role="main"
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
