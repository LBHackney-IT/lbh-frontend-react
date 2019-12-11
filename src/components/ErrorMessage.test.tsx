import React from "react";
import { create } from "react-test-renderer";

import { ErrorMessage } from "./ErrorMessage";

it("renders correctly with all props", () => {
  const component = create(
    <ErrorMessage
      id="1234"
      className="class1 class2"
      visuallyHiddenText="visually hidden text"
      aria-label="test error message"
      data-test="test data"
    >
      test <strong>error</strong> message
    </ErrorMessage>
  );

  expect(component).toMatchInlineSnapshot(`
    <span
      aria-label="test error message"
      className="govuk-error-message lbh-error-message class1 class2"
      data-test="test data"
      id="1234"
    >
      <span
        className="govuk-visually-hidden"
      >
        visually hidden text
        :
      </span>
      test 
      <strong>
        error
      </strong>
       message
    </span>
  `);
});

it("renders correctly without optional props", () => {
  const component = create(<ErrorMessage />);

  expect(component).toMatchInlineSnapshot(`
    <span
      className="govuk-error-message lbh-error-message"
    >
      <span
        className="govuk-visually-hidden"
      >
        Error
        :
      </span>
    </span>
  `);
});
