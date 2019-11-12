import { ElementType, ReactNode } from "react";

/**
 * The property types for {@link LinkComponent}.
 *
 * @property {string} [className]
 * @property {string} href
 * @property {ReactNode} children
 */
export interface LinkComponentProps {
  className?: string;
  href: string;
  children: ReactNode;
}

/**
 * The type of a valid link component to be passed to {@link ComponentRegister}.
 * It allows any valid React component (including tag strings) that accept
 * {@link LinkComponentProps} as proptypes.
 */
export type LinkComponent = ElementType<LinkComponentProps>;

interface ComponentRegisterDefaultOptions {
  components: {
    Link: LinkComponent;
  };
}

/**
 * The default options for {@link ComponentRegister}.
 */
export const defaultComponentOptions: ComponentRegisterDefaultOptions = {
  components: {
    Link: "a"
  }
};

/**
 * The properties for registering components.
 *
 * @property {object} [components] - The components to register
 * @property {LinkComponent} [components.Link] - The component to use internally
 * for handling links. Defaults to `"a"`.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComponentRegisterOptions
  extends Partial<ComponentRegisterDefaultOptions> {}

/**
 * A register of components to use with library components with sensible
 * defaults. Most users will never need to interact with this. It exists to
 * support customization of library component behaviour.
 */
export class ComponentRegister {
  /**
   * @static The {@link LinkComponent} to allow `lbh-frontend-react` to hook
   * into routers or other custom linking libraries.
   *
   * Defaults to `"a"`. See {@link defaultComponentOptions}.
   */
  static Link: LinkComponent = defaultComponentOptions.components.Link;

  /**
   * @static Resets the component register to its defaults. See
   * {@link defaultComponentOptions} for those defaults.
   */
  static reset(): void {
    this.init(defaultComponentOptions);
  }

  /**
   * @static Initializes {@link ComponentRegister} with the provided options.
   *
   * This is how you set component options en masse, and is the preferred method
   * for setting custom components.
   *
   * @example
   * // To set `lbh-frontend-react` up to use React Router's `Link` component.
   * ComponentRegister.init({
   *   components.
   *   Link: ({ className, href, children }) => (
   *     <ReactRouter.Link className={className} to={href}>
   *       {children}
   *     </ReactRouter.Link>
   *   )
   * });
   *
   * @param {ComponentRegisterOptions} [options] - Options to customize the
   * underlying components used by library components.
   */
  static init({ components }: ComponentRegisterOptions = {}): void {
    if (components && components.Link) {
      this.Link = components.Link;
    }
  }
}
