import React, { Component, ReactChildren, ReactNode } from "react";
import { DataAttributes } from "../../helpers/Attributes";
import { Heading, HeadingLevels } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import "./Tile.scss";

export interface TileProps {
  /**
   * Array of {@link TileTarget} objects that defines the number of tiles in the app
   */
  targets: TileTarget[];
}

interface TileTarget {
  /**
   * An object with parameters for an address to hyperlink to, a title to name that link and optional children props to pass into the component
   */
  link?: string;
  title?: string;
  children?: ReactNode;
}

export const Tile = (props: TileProps): React.ReactElement => {
  const renderTiles = (targets: TileTarget[]): React.ReactElement[] => {
    return targets.map((tile) => (
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-quarter">
          <div className="tile">
            <Heading level={HeadingLevels.H3}>
              <a href={tile.link} data-test="tile-link">
                {tile.title}
              </a>
            </Heading>
            <Paragraph>{tile.children}</Paragraph>
          </div>
        </div>
      </div>
      //
    ));
  };

  return (
    <div className="govuk-container">
      <ul>
        <nav>{renderTiles(props.targets)}</nav>
      </ul>
    </div>
  );
};
