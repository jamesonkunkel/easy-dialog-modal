import "react-app-polyfill/ie11";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import { Modal } from "../src/index";
import { useModal } from "../src/index";
import "./style.css";

const App = () => {
  const [openModalOne, closeModalOne, isModalOneOpen] = useModal("my_modal");

  return (
    <div>
      <Modal id="my_modal" closeOnOutsideClick className="dialog-modal">
        <h1>My Modal</h1>
        <button onClick={closeModalOne}>Close Modal</button>
      </Modal>
      <Modal id="my_second_modal">
        <h1>My Second Modal</h1>
        <button>Close Modal</button>
      </Modal>
      <button onClick={openModalOne}>Open Modal</button>
      <p>Modal one is open? {isModalOneOpen ? "true" : "false"}</p>
    </div>
  );
};

root.render(<App />);
