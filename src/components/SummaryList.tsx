import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

// Inherits directly from `govuk-frontend`, rather than `lbh-frontend`, due to
// `lbh-frontend` having no summary list component at time of implementation.
import "govuk-frontend/govuk/components/summary-list/_summary-list.scss";

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
  value: string;
}

/**
 * The proptypes for {@link SummaryList}.
 */
export interface SummaryListProps {
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
): JSX.Element => {
  const { id, className, rows } = props;

  return (
    <dl
      id={id}
      className={classNames("govuk-summary-list lbh-summary-list", className)}
    >
      {rows.map(({ key, value }, index) => (
        <div
          key={index}
          className="govuk-summary-list__row lbh-summary-list__row"
        >
          <dt className="govuk-summary-list__key lbh-summary-list__key">
            {key}
          </dt>
          <dd className="govuk-summary-list__value lbh-summary-list__value">
            {value}
          </dd>
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
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
