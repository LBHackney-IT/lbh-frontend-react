import React, { Component, ReactChildren, ReactNode } from "react";
import { DataAttributes } from "../../helpers/Attributes";

export interface TileProps extends React.AriaAttributes, DataAttributes {
  /**
   * A href link address that is passed into the Tile component
   */
  link?: string | undefined;
  /**
   * A title wrapped in an anchor tag.
   */
  title?: string | undefined;
  /**
   * Value for the mailto input.
   */
  children?: ReactNode | undefined;
  //children?: React.ReactNodeArray
}

export const Tile = (props: TileProps): React.ReactElement => {
  return (
    <div className="lbh-container">
      <div className="lbh-container row details">
        <a href={props.link} data-test="tile-link">
          {props.title}
        </a>
        {props.children}
      </div>
    </div>
  );
};
