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
export const makeDebounceContext = (): DebounceContext => ({
  shouldDebounce: false,
});

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
// This is a reimplementation of GOV.UK Frontend's `Button.protoype.debounce`,
// sourced from version `3.3.0`. To understand why, see `/docs/adr/0012-...`.
//
// See
// https://github.com/alphagov/govuk-frontend/blob/c473c7ec3123e220d83221b9fd12e216f71bda84/package/govuk/components/button/button.js
// for the source and
// https://github.com/alphagov/govuk-frontend/blob/c473c7ec3123e220d83221b9fd12e216f71bda84/LICENSE.txt
// for the licence applying to the original implementation.
export const debounce = (
  event: React.MouseEvent<HTMLElement>,
  context: DebounceContext,
  debounceTimeout = 1000
): boolean => {
  if (
    (event.target as HTMLElement).getAttribute("data-prevent-double-click") !==
    "true"
  ) {
    return false;
  }

  if (context.shouldDebounce) {
    event.preventDefault();

    return true;
  }

  const clearTimeout = (): void => {
    context.shouldDebounce = false;
  };

  context.shouldDebounce = true;

  setTimeout(clearTimeout, debounceTimeout);

  return false;
};
