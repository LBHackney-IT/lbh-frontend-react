import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Attributes, DataAttributes } from "../../helpers/Attributes";

import "lbh-frontend/lbh/components/lbh-fieldset/_fieldset.scss";

/**
 * The proptypes for {@link FieldsetLegend}.
 *
 * This also supports all `aria-*` and `data-*` attributes.
 *
 * @noInheritDoc
 */
export interface FieldsetLegendProps
  extends React.AriaAttributes,
    DataAttributes {
  id?: string;
  className?: string;
  /**
   * Whether the legend also acts as the heading for the page. Places the legend
   * children inside a `h1` if set to `true`.
   */
  isPageHeading?: boolean;
  children: React.ReactNode;
}

/**
 * A component to set a legend for a {@link Fieldset} by passing
 * in via the {@link FieldsetProps.legend} prop.
 *
 * ```ts
 * // Creating a fieldset with a legend
 * <Fieldset
 *   id="fieldsetId"
 *   className="fieldsetClass"
 *   describedBy="fieldsetDescribedBy"
 *   role="fieldsetRole"
 *   legend={
 *     <FieldsetLegend id="legendId" className="legendClass" isPageHeading>
 *       children
 *     </FieldsetLegend>
 *   }
 * >
 *   children
 * </Fieldset>
 * ```
 */
export const FieldsetLegend: React.FunctionComponent<FieldsetLegendProps> = (
  props: FieldsetLegendProps
): JSX.Element => {
  const { id, className, isPageHeading, children } = props;

  const extraAttributes = Attributes.ariaAndData(props);

  return (
    <legend
      id={id}
      className={classNames(
        "govuk-fieldset__legend",
        "lbh-fieldset__legend",
        className
      )}
      {...extraAttributes}
    >
      {isPageHeading ? (
        <h1 className="govuk-fieldset__heading lbh-fieldset__heading">
          {children}
        </h1>
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
  children: PropTypes.node.isRequired
};
