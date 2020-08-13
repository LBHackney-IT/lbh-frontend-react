import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NavigationBar } from "../src/components/NavigationBar/NavigationBar";

storiesOf("NavigationBar", module).add("target paths", () => {
  const data = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Residents",
      url: "/residents",
    },
  ];
  return <NavigationBar targets={data} />;
});
