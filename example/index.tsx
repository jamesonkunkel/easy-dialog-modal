import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing } from '../.';
import { Modal } from '../src/index';

const App = () => {
  return (
    <div>
      <Modal />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
