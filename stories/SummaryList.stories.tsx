import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SummaryList } from "../src/components/SummaryList";
import { Link } from "../src/components/Link";

storiesOf("SummaryList", module).add("all props", () => {
  const link = (
    <Link
      id="testId"
      className="class1"
      href="/"
      target="_blank"
      aria-label="test link"
      data-test="test data"
    >
      Link
    </Link>
  );
  const oneLink = [link];
  const twoLinks = [link, link];

  return (
    <SummaryList
      id="test"
      className="class1 class2"
      rows={[
        {
          key: "TestKey",
          value: "TestValue",
          actions: oneLink,
        },
        { key: "TestKey2", value: "TestValue2", actions: twoLinks },
      ]}
      aria-label="test summary list"
      data-test="test data"
    />
  );
});
