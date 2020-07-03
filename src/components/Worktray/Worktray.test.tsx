import React from "react";
import { create } from "react-test-renderer";
import { WorkTray } from "./Worktray";
import { shallow } from "enzyme";

it("renders correctly with all props", () => {
  const component = create(<WorkTray />);

  expect(component).toMatchInlineSnapshot(`
    <div
      data-test="worktray-container"
    />
  `);
});

it("renders the component correctly", () => {
  const component = shallow(<WorkTray />);

  expect(component.find({ "data-test": "worktray-container" }).length).toBe(1);
});
