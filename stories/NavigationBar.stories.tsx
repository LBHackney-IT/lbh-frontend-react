import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NavigationBar } from "../src/components/NavigationBar/NavigationBar";

storiesOf("NavigationBar", module).add("With url paths", () => {
  const data = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "residents",
      url: "/residents",
    },
  ];
  return <NavigationBar targets={data} />;
});
