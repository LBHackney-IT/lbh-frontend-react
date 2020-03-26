import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../helpers/Attributes";
import "./SummaryList.scss";

/**
 * A unit of information to display in a row of a {@link SummaryList}.
 */
export interface SummaryListRow {
  /**
   * The description or label of the piece of information summarised by this
   * row.
   */
  key: string;

  /**
   * The piece of information itself.
   */
  value: React.ReactNode;

  /**
   * A set of actions ({@link Link|Links}) that the user can take on this information.
   */
  actions?: React.ReactNode[] | null;
}

/**
 * The proptypes for {@link SummaryList}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface SummaryListProps extends React.AriaAttributes, DataAttributes {
  id?: string;
  className?: string;

  /**
   * An array describing the items to display.
   */
  rows: SummaryListRow[];
}

/**
 * A component for summarising information.
 *
 * It is intended to be used to present pairs of linked information in a list.
 */
export const SummaryList: React.FunctionComponent<SummaryListProps> = (
  props: SummaryListProps
): React.ReactElement => {
  const { id, className, rows } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  const anyRowHasActions = rows.some(
    (row) => row.actions && row.actions.length > 0
  );

  return (
    <dl
      id={id}
      className={classNames("govuk-summary-list lbh-summary-list", className)}
      {...extraAttributes}
    >
      {rows.map((row, index) => (
        <div
          key={index}
          className="govuk-summary-list__row lbh-summary-list__row"
        >
          <dt className="govuk-summary-list__key lbh-summary-list__key">
            {row.key}
          </dt>
          <dd className="govuk-summary-list__value lbh-summary-list__value">
            {row.value}
          </dd>
          {anyRowHasActions && (
            <dd className="govuk-summary-list__actions">
              {row.actions &&
                (row.actions?.length == 1 ? (
                  row.actions[0]
                ) : (
                  <ul className="govuk-summary-list__actions-list">
                    {row.actions.map((action, index) => (
                      <li
                        key={index}
                        className="govuk-summary-list__actions-list-item"
                      >
                        {action}
                      </li>
                    ))}
                  </ul>
                ))}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
};

SummaryList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      actions: PropTypes.arrayOf(PropTypes.node.isRequired),
    }).isRequired
  ).isRequired,
};
