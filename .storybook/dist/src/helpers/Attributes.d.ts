import React from "react";
/**
 * The proptypes to support `data-*` attributes.
 */
export interface DataAttributes {
  /**
   * Any `data-*` attributes.
   */
  data?: string;
}
/**
 * A helper for parsing wildcard attributes.
 */
export declare class Attributes {
  /**
   * Select all `aria-*` attributes from props.
   */
  static aria<Props extends React.AriaAttributes>(
    props: Props
  ): React.AriaAttributes;
  /**
   * Select all `data-*` attributes from props.
   */
  static data<Props extends DataAttributes>(props: Props): DataAttributes;
  /**
   * Select all `aria-*` and `data-*` attributes from props.
   */
  static ariaAndData<Props extends React.AriaAttributes & DataAttributes>(
    props: Props
  ): React.AriaAttributes & DataAttributes;
}
