import React, { Component } from "react";
import { DataAttributes } from "../../helpers/Attributes";

export interface TileProps extends React.AriaAttributes, DataAttributes {
  /**
   * A href link address that is passed into the Tile component
   */
  link: string;
  /**
   * A title wrapped in an anchor tag.
   */
  title: string | null;
  /**
   * An array of type TileDetailList elements. Each element consisting of a key/value pair.
   */
  details: TileDetailList[];
  /**
   * Value for the mailto input.
   */
  email?: string | null;
}

export interface TileDetailList {
  /**
   * The key used to identify an individual property in the array
   */
  key: string;

  /**
   * The value associated with a property.
   */
  value: string;
}

export const Tile = (props: TileProps): React.ReactElement => {
  let mailto = null;

  if (props.email) mailto = "href = mailto:props.email";

  return (
    <div className="lbh-container">
      <div className="lbh-container row details">
        <a href={props.link} data-test="tile-link">
          {props.title}
        </a>
      </div>
      <div>
        {props.details.map((element, index) => {
          <div key={index}>{element}</div>;
        })}
      </div>
      <div>{mailto}</div>
    </div>
  );
};
