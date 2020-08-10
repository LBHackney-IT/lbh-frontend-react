import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Link } from "../Link";
import PropTypes from "prop-types";

/**
 * The prop types for the {@link NavigationBar} component.
 *
 * @noInheritDoc
 */
export interface NavBarProps {
  /**
   * Array of {@link RouteParams} objects that defines the number of routes in the app
   */
  routes: RouteParams[];
}

interface RouteParams {
  /**
   * An object with parameters for a route name and route address
   */
  name: string;
}

export const NavigationBar = (props: NavBarProps): React.ReactFragment => {
  const RenderLinks = (routes: RouteParams[]): React.ReactFragment => {
    return routes.map((route) => (
      <React.Fragment key={route.name}>
        <li key={route.name} data-test="route-name">
          <Link href={`/${route.name}`}>{route.name}</Link>
        </li>
      </React.Fragment>
    ));
  };

  return (
    <div>
      <ul>
        <nav>{<RenderLinks />}</nav>
      </ul>
    </div>
  );
};

NavigationBar.propTypes = {
  routes: PropTypes.array,
};


