import React from "react";

/**
 * The property types for {@link LinkComponent}.
 */
export interface LinkComponentProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

/**
 * The type of a valid link component to be passed to {@link ComponentRegister}.
 * It allows any valid React component (including tag strings) that accept
 * {@link LinkComponentProps} as proptypes.
 */
export type LinkComponent = React.ElementType<LinkComponentProps>;

/**
 * Components to register with {@link ComponentRegister} via
 * {@link ComponentRegisterOptions.components}.
 */
export interface ComponentRegisterComponents {
  /**
   * The component to use internally for handling links.
   *
   * Defaults to `"a"`.
   */
  Link?: LinkComponent;
}

/**
 * Options to pass to {@link ComponentRegister.init}.
 *
 * This is only generic to support sharing the type with
 * {@link defaultComponentRegisterOptions}. You should never need to override
 * the default generic parameter. It defaults to
 * {@link ComponentRegisterComponents}.
 */
export interface ComponentRegisterOptions<
  C extends ComponentRegisterComponents = ComponentRegisterComponents
> {
  /**
   * The components to register.
   *
   * Defaults to be of type {@link ComponentRegisterComponents}.
   */
  components?: C;
}

/**
 * The default options for {@link ComponentRegister}.
 */
export const defaultComponentRegisterOptions: Required<ComponentRegisterOptions<
  Required<ComponentRegisterComponents>
>> = {
  components: {
    Link: "a"
  }
};

/**
 * A register of components to use within library components, with sensible
 * defaults. Many users will never need to interact with this. It exists to
 * support customization of library component behaviour.
 */
export class ComponentRegister {
  /**
   * The {@link LinkComponent} to allow this library to hook into routers or
   * other custom linking libraries.
   *
   * Defaults to `"a"`. See {@link ComponentRegisterComponents.Link} and
   * {@link defaultComponentRegisterOptions}.
   */
  static Link: LinkComponent = defaultComponentRegisterOptions.components.Link;

  /**
   * Resets the component register to its defaults. See
   * {@link defaultComponentRegisterOptions} for those defaults.
   */
  static reset(): void {
    this.init(defaultComponentRegisterOptions);
  }

  /**
   * Initializes {@link ComponentRegister} with the provided options.
   *
   * This is how you set component options en masse, and is the preferred method
   * for providing custom components.
   *
   * @example Using `Link` from React Router
   * ```ts
   * ComponentRegister.init({
   *   components.
   *   Link: ({ className, href, children }) => (
   *     <ReactRouter.Link className={className} to={href}>
   *       {children}
   *     </ReactRouter.Link>
   *   )
   * });
   * ```
   *
   * @param options - Options to customize the underlying components used by
   * library components.
   */
  static init(options: ComponentRegisterOptions = {}): void {
    const { components } = options;

    if (components && components.Link) {
      this.Link = components.Link;
    }
  }
}
