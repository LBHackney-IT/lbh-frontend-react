import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tile } from "../src/components/Tile/Tile";

storiesOf("Tile", module).add("tile props", () => {
  const props = {
    link: "www.hackney.gov.uk",
    title: "Mrs Joan Fisher",
    details: "03-04-2000",
  };

  const arrTest = [
    {
      "Date of birth": "1970 - 02 - 30",
      Mobile: "07777123456",
      Home: "02088881234",
      Work: "02012345678",
      Email: "mjf@email.com",
    },
  ];

  return (
    <Tile link={props.link} title={props.title}>
      <div>{props.details}</div>
      <div>{arrTest}</div>
    </Tile>
  );
});
