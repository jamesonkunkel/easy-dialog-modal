import * as React from "react";
import * as ReactDOM from "react-dom";
import { Modal } from "../src/index";

describe("Modal", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Modal id="test_modal">
        <p>I am test content.</p>
      </Modal>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
