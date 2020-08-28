import React from "react";
import { Link } from "../Link";
import PropTypes from "prop-types";
import "./NavigationBar.scss";

/**
 * The prop types for the {@link NavigationBar} component.
 *
 * @noInheritDoc
 */
export interface NavBarProps {
  /**
   * Array of {@link NavTarget} objects that defines the number of targets in the app
   */
  targets: NavTarget[];
}

interface NavTarget {
  /**
   * An object with parameters for a target name and target address
   */
  name: string;
  url: string;
}

export const NavigationBar = (props: NavBarProps): React.ReactElement => {
  const renderLinks = (targets: NavTarget[]): React.ReactElement[] => {
    return targets.map((navTarget) => (
      <li
        key={navTarget.name}
        data-test="navTarget-name"
        className="link-text lbh-heading-h3"
      >
        <Link href={`${navTarget.url}`}>{navTarget.name}</Link>
      </li>
    ));
  };

  return (
    <div className="navigationBar-container ">
      <ul>
        <nav>{renderLinks(props.targets)}</nav>
      </ul>
    </div>
  );
};

NavigationBar.propTypes = {
  targets: PropTypes.array,
};
