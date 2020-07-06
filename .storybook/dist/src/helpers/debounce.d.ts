/**
 * The context to pass to {@link debounce}.
 *
 * Create a single instance of this for any given component via
 * {@link makeDebounceContext}. Persist it between calls of {@link debounce} for
 * the same element.
 */
export interface DebounceContext {
  /**
   * @ignore
   */
  shouldDebounce: boolean;
}
/**
 * Creates a new instance of {@link DebounceContext}.
 */
export declare const makeDebounceContext: () => DebounceContext;
/**
 * A function used to debounce clicks occuring close together (that is, double
 * clicks) if the attribute `data-prevent-double-click` is set to `"true"`.
 *
 * If debouncing is appropriate, this function calls `event.preventDefault()`
 * automatically.
 *
 * @param event - The click event to possible debounce.
 *
 * @param context - An instance of {@link DebounceContext}, persisted between
 * debounce calls for the same element.
 *
 * @param debounceTimeout - The time between click to consider a double click in
 * milliseconds. Defaults to `1000`.
 *
 * @returns `true` if the click should be debounced, otherwise `false`.
 */
export declare const debounce: (
  event: React.MouseEvent<HTMLElement>,
  context: DebounceContext,
  debounceTimeout?: number
) => boolean;
