import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tile } from "../src/components/Tile/Tile";
import { Paragraph } from "../src/components/typography/Paragraph";

storiesOf("Tile", module).add("Multiple Tiles", () => {
  const TileOne = (
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

  const TileTwo = (
    <div>
      <Paragraph>Date of birth: 10/06/2010</Paragraph>
      <Paragraph>Mobile: 073070087234</Paragraph>
      <Paragraph>Home: 020888812334</Paragraph>
      <Paragraph>Work: 020777756543</Paragraph>
      <Paragraph>
        Email: <a href="mailto:someone@email.com">fake@dummy.com</a>
      </Paragraph>
    </div>
  );

  const content = [
    {
      link: "www.google.com",
      title: "Mrs Sally Fisher",
      children: TileOne,
    },
    {
      link: "www.facebook.com",
      title: "Ms Joan Fisher",
      children: TileTwo,
    },
    {
      link: "www.hotmail.com",
      title: "Mrs Sally Fisher",
      children: TileOne,
    },
    {
      link: "www.hackney.gov.uk",
      title: "Ms Joan Fisher",
      children: TileTwo,
    },
  ];

  return <Tile targets={content} />;
});
