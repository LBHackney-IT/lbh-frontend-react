import React, { Component, ReactChildren, ReactNode } from "react";
import { DataAttributes } from "../../helpers/Attributes";
import { Heading, HeadingLevels } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import "./Tile.scss";

export interface TileProps extends React.AriaAttributes, DataAttributes {
  /**
   * A href link address that is passed into the Tile component
   */
  link?: string;
  /**
   * A title wrapped in an anchor tag.
   */
  title?: string;
  /**
   * Value for the mailto input.
   */
  children?: ReactNode;
}

export const Tile = (props: TileProps): React.ReactElement => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third">
        <div className="tile">
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
