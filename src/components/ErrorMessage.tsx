import classnames from "classnames";
import PropTypes from "prop-types";
import React, { FunctionComponent, ReactNode } from "react";

import "lbh-frontend/lbh/components/lbh-error-message/_error-message.scss";

export type ErrorMessageProps = {
  id?: string;
  className?: string;
  visuallyHiddenText?: string;
  children?: ReactNode;
};

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({
  id,
  className,
  visuallyHiddenText,
  children
}) => {
  const messageClassName = classnames(
    "govuk-error-message",
    "lbh-error-message",
    className
  );
  return (
    <span id={id} className={messageClassName}>
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