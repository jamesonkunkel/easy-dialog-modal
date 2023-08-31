import "react-app-polyfill/ie11";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
import { useState } from "react";

import { Modal } from "../src/index";
import { useModal } from "../src/index";
import "./style.css";

const App = () => {
  const [openModalOne, closeModalOne, isModalOneOpen] = useModal("my_modal");
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div>
      <Modal
        id="my_modal"
        closeOnOutsideClick
        className="dialog-modal"
        open={open}
      >
        s<h1>My Modal</h1>
        <button onClick={closeModalOne}>Close Modal</button>
      </Modal>
      <Modal id="my_second_modal">
        <h1>My Second Modal</h1>
        <button>Close Modal</button>
      </Modal>
      <button onClick={openModalOne}>Open Modal</button>
      <button onClick={() => setOpen(!open)}>Change app state</button>
      <p>Modal one is open? {isModalOneOpen ? "true" : "false"}</p>
    </div>
  );
};

root.render(<App />);
