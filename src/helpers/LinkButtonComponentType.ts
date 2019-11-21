/**
 * The proptypes for {@link LinkButtonComponentType}.
 *
 * There is an additional required prop missing from this interface,
 * `onKeyDown`, which follows the usual React interface
 * `React.KeyboardEventHandler`.
 */
export interface LinkButtonComponentTypeProps {
  id?: string;
  className?: string;
  /**
   * Use for the main call to action on your service's start page. Adjusts
   * style of button and adds a start icon.
   */
  isStartButton?: boolean;
  href: string;
  children: React.ReactNode;
}

/**
 * The type of a valid link component to be passed to {@link ComponentRegister}
 * to be used for {@link LinkButton}. It allows any valid React component
 * (including tag strings) that accept {@link LinkButtonComponentTypeProps} as
 * proptypes.
 */
export type LinkButtonComponentType = React.ElementType<
  LinkButtonComponentTypeProps
>;
