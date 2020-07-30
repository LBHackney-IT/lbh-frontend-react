import React from "react";
import { Paragraph } from "../typography/Paragraph";
import { Tag } from "../Tag";
import { Link } from "../Link";

/**
 * The prop types for the {@link PhaseBanner} component.
 *
 * @noInheritDoc
 */

export interface PhaseBannerProps {
  /**
   * A string value that will be displayed in the phase icon in the banner.
   * This will typically be either "ALPHA", or "BETA"
   */
  phase: string;
  /**
   * A url to be applied to the feedback link. Provide a link to your relevant feedback page for the service.
   */
  url: string;
}

/**
 * A component to add a banner to your application, alerting users to its alpha or beta status.
 */
export const PhaseBanner: React.FunctionComponent<PhaseBannerProps> = (
  props: PhaseBannerProps
) => {
  return (
    <div className="phase-banner">
      <Paragraph>
        <Tag>
          <span data-test="phase">{props.phase}</span>
        </Tag>{" "}
        This is a new service – your{" "}
        <Link href={props.url || ""} target="_blank">
          feedback
        </Link>{" "}
        (online only, opens in a new tab) will help us to improve it.
      </Paragraph>
      <hr />
    </div>
  );
};
