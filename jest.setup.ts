import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { ComponentRegister } from "./src/ComponentRegister";

configure({ adapter: new Adapter() });

afterEach(() => {
  ComponentRegister.reset();
});
