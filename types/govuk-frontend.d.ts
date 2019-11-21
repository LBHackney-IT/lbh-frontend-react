declare module "govuk-frontend/govuk/components/button/button" {
  class Button {
    /**
     * Allow users to click the submit button by pressing
     * the space key.
     */
    handleKeyDown(event: React.KeyboardEvent): void;

    /**
     * Debounce click events within a second of each other if the element's
     * `data-prevent-double-click` is `"true"`.
     *
     * Returns `false` if the event should be debounced, otherwise returns
     * `void`.
     */
    debounce(event: React.MouseEvent<HTMLElement>): boolean | void;
  }

  export default Button;
}
