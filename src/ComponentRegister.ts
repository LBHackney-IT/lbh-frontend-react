import { ElementType, ReactNode } from "react";

/**
 * The property types for {@link LinkComponent}.
 *
 * @property {string} href
 * @property {string} className
 * @property {ReactNode} children
 */
export interface LinkComponentProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * The type of a valid link component to be passed to ComponentRegister. It
 * allows any valid React component (including tag strings) that accept
 * LinkComponentProps as proptypes.
 */
export type LinkComponent = ElementType<LinkComponentProps>;

/**
 * The properties for registering components.
 *
 * @property {object} [components] - The components to register
 * @property {LinkComponent} [components.Link] - The link component
 */
export interface ComponentRegisterOptions {
  components: {
    Link: LinkComponent;
  };
}

/**
 * The default options for {@link ComponentRegister}
 */
export const defaultComponentOptions: ComponentRegisterOptions = {
  components: {
    Link: "a"
  }
};

/**
 * Allows the user to register components to use with library components.
 */
export class ComponentRegister {
  /**
   * @static The {@link LinkComponent} to allow `lbh-frontend-react` to hook into routers
   * or other custom linking libraries.
   *
   * Defaults to `"a"`
   */
  static Link: LinkComponent = defaultComponentOptions.components.Link;

  /**
   * @static Resets the component register
   */
  static reset(): void {
    this.init(defaultComponentOptions);
  }

  /**
   * @static Defines register attributes as components given by the host
   *
   * @example
   * // To set `lbh-frontend-react` up to use React Router's `Link` component.
   * ComponentRegister.init({
   *   components.
   *   Link: ({ className, href, children }) => (
   *     <ReactRouter.Link className={className} to={href}>{children}</ReactRouter.Link>
   *   )
   * });
   *
   * @param {ComponentRegisterOptions} [options] - Options to customize the
   * underlying components used by `lbh-frontend-react` components.
   */
  static init({ components }: Partial<ComponentRegisterOptions> = {}): void {
    if (components && components.Link) {
      this.Link = components.Link;
    }
  }
}
