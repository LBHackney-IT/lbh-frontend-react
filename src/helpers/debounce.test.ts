import GovukButton from "govuk-frontend/govuk/components/button/button";
import React from "react";

import { debounce, makeDebounceContext } from "./debounce";

it("returns `false` and doesn't prevent the default action on both of two calls within the default timeout, similar to `GovukButton.prototype.debounce`, when `data-prevent-double-click` isn't set on the event's target", () => {
  expect.hasAssertions();

  const mockPreventDefault = jest.fn();
  const event = {
    ...jest.fn()(),
    target: {
      ...jest.fn()(),
      getAttribute(qualifiedName: string): string | null {
        if (qualifiedName === "data-prevent-double-click") {
          return null;
        }

        return "attribute-value";
      }
    } as HTMLElement,
    preventDefault: mockPreventDefault
  } as React.MouseEvent<HTMLElement>;

  const runTestFor = (
    method: (event: React.MouseEvent<HTMLElement>) => boolean | void,
    notDebouncedResult: boolean | undefined
  ): void => {
    jest.runAllTimers();
    mockPreventDefault.mockReset();

    expect(method(event)).toEqual(notDebouncedResult);

    expect(mockPreventDefault).not.toHaveBeenCalled();

    jest.advanceTimersByTime(999);

    expect(method(event)).toEqual(notDebouncedResult);

    expect(mockPreventDefault).not.toHaveBeenCalled();
  };

  {
    const context = makeDebounceContext();

    runTestFor(event => debounce(event, context), false);
  }

  {
    const context = {};

    runTestFor(GovukButton.prototype.debounce.bind(context), undefined);
  }
});

it('returns `true` and prevents the default action of the event on a second call within the default timeout, similar to `GovukButton.prototype.debounce`, when `data-prevent-double-click` is set to `"true"` on the event\'s target', () => {
  expect.hasAssertions();

  const mockPreventDefault = jest.fn();
  const event = {
    ...jest.fn()(),
    target: {
      ...jest.fn()(),
      getAttribute(qualifiedName: string): string | null {
        if (qualifiedName === "data-prevent-double-click") {
          return "true";
        }

        return "attribute-value";
      }
    } as HTMLElement,
    preventDefault: mockPreventDefault
  } as React.MouseEvent<HTMLElement>;

  const runTestFor = (
    method: (event: React.MouseEvent<HTMLElement>) => boolean | void,
    notDebouncedResult: boolean | undefined,
    debouncedResult: boolean
  ): void => {
    jest.runAllTimers();
    mockPreventDefault.mockReset();

    expect(method(event)).toEqual(notDebouncedResult);

    expect(mockPreventDefault).not.toHaveBeenCalled();

    jest.advanceTimersByTime(999);

    expect(method(event)).toEqual(debouncedResult);

    expect(mockPreventDefault).toHaveBeenCalledTimes(1);
  };

  {
    const context = makeDebounceContext();

    runTestFor(event => debounce(event, context), false, true);
  }

  {
    const context = {};

    runTestFor(GovukButton.prototype.debounce.bind(context), undefined, false);
  }
});

it("returns `false` and doesn't prevent the default action of the event on a second call after the default timeout, similar to `GovukButton.prototype.debounce`, when `data-prevent-double-click` is set to `\"true\"` on the event's target", () => {
  expect.hasAssertions();

  const mockPreventDefault = jest.fn();
  const event = {
    ...jest.fn()(),
    target: {
      ...jest.fn()(),
      getAttribute(qualifiedName: string): string | null {
        if (qualifiedName === "data-prevent-double-click") {
          return "true";
        }

        return "attribute-value";
      }
    } as HTMLElement,
    preventDefault: mockPreventDefault
  } as React.MouseEvent<HTMLElement>;

  const runTestFor = (
    method: (event: React.MouseEvent<HTMLElement>) => boolean | void,
    notDebouncedResult: boolean | undefined
  ): void => {
    jest.runAllTimers();
    mockPreventDefault.mockReset();

    expect(method(event)).toEqual(notDebouncedResult);

    expect(mockPreventDefault).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(method(event)).toEqual(notDebouncedResult);

    expect(mockPreventDefault).not.toHaveBeenCalled();
  };

  {
    const context = makeDebounceContext();

    runTestFor(event => debounce(event, context), false);
  }

  {
    const context = {};

    runTestFor(GovukButton.prototype.debounce.bind(context), undefined);
  }
});
