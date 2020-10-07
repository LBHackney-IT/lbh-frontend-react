import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Paragraph } from "../src/components/typography/Paragraph";
storiesOf("Paragraph", module).add("with text", () => (
  <>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos
      adipisci sequi quia, quas praesentium?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos
      adipisci sequi quia, quas praesentium?
    </Paragraph>
  </>
));
