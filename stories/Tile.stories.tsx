import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tile } from "../src/components/Tile/Tile";
import { Paragraph } from "../src/components/typography/Paragraph";

storiesOf("Tile", module)
  .add("tile props", () => {
    const props = {
      link: "www.hackney.gov.uk",
      title: "Mrs Joan Fisher",
    };

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
      <Tile link={props.link} title={props.title}>
        <div>{TileOne}</div>
      </Tile>
    );
  })
  .add("Multiple Tiles", () => {
    const propsTileOne = {
      link: "www.hackney.gov.uk",
      title: "Ms Sally Fisher",
    };

    const propsTileTwo = {
      link: "www.google.co.uk",
      title: "Mrs Joan Fisher",
    };

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
      <div>
        <Tile link={propsTileOne.link} title={propsTileOne.title}>
          <div>{TileOne}</div>
        </Tile>
        <Tile link={propsTileTwo.link} title={propsTileTwo.title}>
          <div>{TileTwo}</div>
        </Tile>
        <Tile link={propsTileOne.link} title={propsTileOne.title}>
          <div>{TileOne}</div>
        </Tile>
        <Tile link={propsTileTwo.link} title={propsTileTwo.title}>
          <div>{TileTwo}</div>
        </Tile>
        <Tile link={propsTileOne.link} title={propsTileOne.title}>
          <div>{TileOne}</div>
        </Tile>
        <Tile link={propsTileTwo.link} title={propsTileTwo.title}>
          <div>{TileTwo}</div>
        </Tile>
      </div>
    );
  });
