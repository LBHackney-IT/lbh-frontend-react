import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "lbh-frontend/lbh/components/lbh-fieldset/_fieldset.scss";

/**
 * The property types for {@link FieldsetLegend}
 */
export interface FieldsetLegendProps {
  id?: string;
  className?: string;
  isPageHeading?: boolean;
  children?: React.ReactNode;
}

/**
 * The type of a valid fieldset legend component. It allows any React functional
 * components that accept {@link FieldsetLegendProps} as proptypes.
 */
export type FieldsetLegendType = React.FunctionComponent<FieldsetLegendProps>;

/**
 * The legend for a fieldset
 */
export const FieldsetLegend: FieldsetLegendType = (
  props: FieldsetLegendProps
): JSX.Element => {
  const { id, className, isPageHeading, children } = props;
  return (
    <legend id={id} className={classNames("govuk-fieldset__legend", className)}>
      {isPageHeading ? (
        <h1 className="govuk-fieldset__heading">{children}</h1>
      ) : (
        children
      )}
    </legend>
  );
};

FieldsetLegend.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  isPageHeading: PropTypes.bool,
  children: PropTypes.node
};
