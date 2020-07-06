import { storiesOf } from "@storybook/react";
import * as React from "react";
import ButtonUse from "../src/components/ButtonUse/ButtonUse";
storiesOf("ButtonUse", module)
  .add("with text", () => <ButtonUse>Hello Button</ButtonUse>)
  .add("with some emoji", () => <ButtonUse>😀 😎 👍 💯</ButtonUse>);
