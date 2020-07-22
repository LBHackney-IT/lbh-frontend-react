import { storiesOf } from "@storybook/react";
import React from "react";
import { PhaseBanner } from "../src/components/PhaseBanner";

storiesOf("PhaseBanner", module)
  .add("with Beta prop", () => (
    <PhaseBanner phase={"BETA"} url={"https://www.hackney.gov.uk"} />
  ))
  .add("with ALPHA prop", () => (
    <PhaseBanner phase={"ALPHA"} url={"https://www.hackney.gov.uk"} />
  ));
