/**
 * The proptypes for {@link LinkComponentType}.
 */
export interface LinkComponentTypeProps {
  id?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
}

/**
 * The type of a link component to be passed to {@link ComponentRegister}.
 * It allows any valid React component (including tag strings) that accept
 * {@link LinkComponentTypeProps} as proptypes.
 */
export type LinkComponentType = React.ElementType<LinkComponentTypeProps>;
