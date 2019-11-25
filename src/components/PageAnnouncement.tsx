import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "lbh-frontend/lbh/components/lbh-page-announcement/_page-announcement.scss";

/**
 * The proptypes for {@link PageAnnouncement}.
 */
export interface PageAnnouncementProps {
  id?: string;
  className?: string;
  /**
   * The title of the announcement
   */
  title: string;
  /**
   * The content of the announcement
   */
  children: React.ReactNode;
}

/**
 * A component for displaying announcements on a page.
 */
export const PageAnnouncement: React.FunctionComponent<PageAnnouncementProps> = (
  props: PageAnnouncementProps
): JSX.Element => {
  const { id, className, title, children } = props;

  return (
    <section id={id} className={classNames("lbh-page-announcement", className)}>
      <h3 className="lbh-page-announcement__title">{title}</h3>
      <div className="lbh-page-announcement__content">{children}</div>
    </section>
  );
};

PageAnnouncement.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
