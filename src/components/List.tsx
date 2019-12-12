import classNames from "classnames";
import { nullValuesAsUndefined } from "null-as-undefined";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";

import "lbh-frontend/lbh/core/_lists.scss";

/**
 * The types of {@link List}.
 */
export enum ListTypes {
  Bullet = "bullet",
  Number = "number"
}

/**
 * The proptypes for {@link List}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface ListProps extends React.AriaAttributes, DataAttributes {
  id?: string | null;
  className?: string | null;
  /**
   * The types of list that can be specified, currently either a bulleted list,
   * or a numbered list.
   *
   * If not specified, will default to a list without any marker.
   */
  type?: ListTypes | null;
  /**
   * The items in the list. Can be anything from a string to another list
   * component.
   */
  items: React.ReactNode[];
}

/**
 * A list of items.
 */
export const List: React.FunctionComponent<ListProps> = (
  props: ListProps
): React.ReactElement => {
  const { id, className, type, items } = nullValuesAsUndefined(props);

  const extraAttributes = Attributes.ariaAndData(props);

  const ListComponent = type === ListTypes.Number ? "ol" : "ul";

  return (
    <ListComponent
      id={id}
      className={classNames(
        "govuk-list",
        "lbh-list",
        {
          "lbh-list--number govuk-list--number": type === ListTypes.Number,
          "lbh-list--bullet govuk-list--bullet": type === ListTypes.Bullet
        },
        className
      )}
      {...extraAttributes}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListComponent>
  );
};

List.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf<ListTypes>([ListTypes.Bullet, ListTypes.Number]),
  items: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired
} as PropTypes.ValidationMap<ListProps>;
