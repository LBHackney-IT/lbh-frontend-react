import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../../helpers/Attributes";

/**
 * The proptypes for {@link StartButtonIcon}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface StartButtonIconProps
  extends React.AriaAttributes,
    DataAttributes {
  className?: string;
}

/**
 * An icon to display in the start button on the start page of a service.
 */
export const StartButtonIcon: React.FunctionComponent<StartButtonIconProps> = (
  props: StartButtonIconProps
): React.ReactElement => {
  const { className } = props;
  const extraAttributes = Attributes.ariaAndData(props);
  // This SVG is sourced from `govuk-frontend@3.3.0`. See
  // https://github.com/alphagov/govuk-frontend/blob/c473c7ec3123e220d83221b9fd12e216f71bda84/package/govuk/components/button/template.njk#L27
  // for the source and
  // https://github.com/alphagov/govuk-frontend/blob/c473c7ec3123e220d83221b9fd12e216f71bda84/LICENSE.txt
  // for the licence.
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      role="presentation"
      focusable="false"
      {...extraAttributes}
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  );
};

StartButtonIcon.propTypes = {
  className: PropTypes.string
};
