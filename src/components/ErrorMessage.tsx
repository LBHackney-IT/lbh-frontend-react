import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "lbh-frontend/lbh/components/lbh-error-message/_error-message.scss";

/**
 * The proptypes for {@link ErrorMessage}.
 */
export interface ErrorMessageProps {
  id?: string;
  className?: string;
  /**
   * Text for screen readers, hidden from normally displaying. Defaults to `"Error"`.
   */
  visuallyHiddenText?: string;
  children?: React.ReactNode;
}

/**
 * A component for displaying an error message when there is a validation error.
 */
export const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = (
  props: ErrorMessageProps
): JSX.Element => {
  const { id, className, visuallyHiddenText, children } = props;

  return (
    <span
      id={id}
      className={classNames(
        "govuk-error-message",
        "lbh-error-message",
        className
      )}
    >
      {visuallyHiddenText && (
        <span className="govuk-visually-hidden">{visuallyHiddenText}:</span>
      )}
      {children}
    </span>
  );
};

ErrorMessage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  visuallyHiddenText: PropTypes.string,
  children: PropTypes.node
};

ErrorMessage.defaultProps = {
  visuallyHiddenText: "Error"
};
