import React, { ReactNode } from "react";
import { Heading, HeadingLevels } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import "./Tile.scss";
export interface TileProps {
  /**
   * Props to be passed in to Tile component and rendered.
   */
  link?: string;
  title?: string;
  children?: ReactNode;
}

export const Tile = (props: TileProps): React.ReactElement => {
  return (
    <div className="govuk-grid-row" key={props.link}>
      <div className="govuk-grid-column-one-quarter">
        <div className="tile" data-test="tile-container">
          <Heading level={HeadingLevels.H3}>
            <a href={props.link} data-test="tile-link">
              {props.title}
            </a>
          </Heading>
          <Paragraph>{props.children}</Paragraph>
        </div>
      </div>
    </div>
  );
};
