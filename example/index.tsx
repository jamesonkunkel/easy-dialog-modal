import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// import { Thing } from '../.';
import { Modal } from '../src/index';
import { useModal } from '../src/index';

const App = () => {
  const { openModalById, closeModalById } = useModal('my_modal');

  return (
    <div>
      <Modal id="my_modal">
        <h1>My Modal</h1>
        <button onClick={closeModalById}>Close Modal</button>
      </Modal>
      <Modal id="my_second_modal">
        <h1>My Second Modal</h1>
        <button>Close Modal</button>
      </Modal>
      <button onClick={openModalById}>Open Modal</button>
      {/* <button onClick={openMySecondModal}>Open Second Modal</button> */}
    </div>
  );
};

root.render(<App />);
