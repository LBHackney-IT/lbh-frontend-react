import { LinkComponentType } from "./LinkComponentType";

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
  Link?: LinkComponentType;
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
   * The {@link LinkComponentType} to allow this library to hook into routers or
   * other custom linking libraries.
   *
   * Defaults to `"a"`. See {@link ComponentRegisterComponents.Link} and
   * {@link defaultComponentRegisterOptions}.
   */
  static Link: LinkComponentType =
    defaultComponentRegisterOptions.components.Link;

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
   * ```ts
   * // Using `Link` from React Router.
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
