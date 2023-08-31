import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// import { Thing } from '../.';
import { Modal } from '../src/index';

const App = () => {
  return (
    <div>
      <Modal />
    </div>
  );
};

root.render(<App />);
