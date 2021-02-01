import React, { ReactNode } from "react";
import { Heading, HeadingLevels } from "../typography/Heading";
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
    <div className="govuk-container" key={props.link}>
      <div className="tile" data-test="tile-container">
        <Heading level={HeadingLevels.H3}>
          <a href={props.link} data-test="tile-link">
            {props.title}
          </a>
        </Heading>
        <div className="lbh-body">{props.children}</div>
      </div>
    </div>
  );
};
