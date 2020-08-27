import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tile } from "../src/components/Tile/Tile";
import { Paragraph } from "../src/components/typography/Paragraph";

storiesOf("Tile", module).add("tile props", () => {
  const props = {
    link: "www.hackney.gov.uk",
    title: "Mrs Joan Fisher",
  };

  const test = (
    <div>
      <Paragraph>Date of birth: 01/08/2000</Paragraph>
      <Paragraph>Mobile: 077070087654</Paragraph>
      <Paragraph>Home: 020888812334</Paragraph>
      <Paragraph>Work: 020777756789</Paragraph>
      <Paragraph>
        Email: <a href="mailto:someone@email.com">fake@dummy.com</a>
      </Paragraph>
    </div>
  );

  return (
    <Tile link={props.link} title={props.title}>
      <div>{test}</div>
    </Tile>
  );
});
