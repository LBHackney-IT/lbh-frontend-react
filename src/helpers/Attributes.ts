import React from "react";

/**
 * The proptypes to support `data-*` attributes.
 */
export interface DataAttributes {
  /**
   * Any `data-*` attributes.
   */
  // This tells TypeScript / JSX to also accept any `data-*`  attributes when
  // constructing the component. Like magic!
  data?: string;
}

/**
 * A helper for parsing wildcard attributes.
 */
export class Attributes {
  /**
   * Select all `aria-*` attributes from props.
   */
  static aria<Props extends React.AriaAttributes>(
    props: Props
  ): React.AriaAttributes {
    return Object.entries(props)
      .filter(([key]) => key.startsWith("aria-"))
      .reduce(
        (attributes, [key, value]) => ({ ...attributes, [key]: value }),
        {} as React.AriaAttributes
      );
  }

  /**
   * Select all `data-*` attributes from props.
   */
  static data<Props extends DataAttributes>(props: Props): DataAttributes {
    return Object.entries(props)
      .filter(([key]) => key.startsWith("data-"))
      .reduce(
        (attributes, [key, value]) => ({ ...attributes, [key]: value }),
        {} as DataAttributes
      );
  }

  /**
   * Select all `aria-*` and `data-*` attributes from props.
   */
  static ariaAndData<Props extends React.AriaAttributes & DataAttributes>(
    props: Props
  ): React.AriaAttributes & DataAttributes {
    return {
      ...this.aria(props),
      ...this.data(props)
    };
  }
}
