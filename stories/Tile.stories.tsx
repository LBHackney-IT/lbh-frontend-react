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

  return (
    <>
      <Tile link="www.facebook.com" title="Miss Joan Fisher">
        {TileOne}
      </Tile>
      <Tile link="www.google.com" title="Mrs Sally Fisher">
        {TileTwo}
      </Tile>
    </>
  );
});
