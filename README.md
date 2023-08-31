# easy-dialog-modal User Guide

easy-dialog-modal is a tiny React library designed to make implmenting HTML5 dialog modal components easy.

easy-dialog-modal implements a simple hook-based API so that the open or closed state of a modal can be controlled easily from anywhere in your React application.

## Installation

Install the library using npm:

```bash
npm install easy-dialog-modal
```

## Usage

Import the Modal component (and its default styling if you choose) and use it within your application by providing a string ID:

```javascript
import React from "react";
import Modal from "easy-dialog-modal";
import "easy-dialog-modal/dist/styles.css"; // Import the library's styles

const App = () => {
  return (
    <div>
      {/* You can put anything in the modal */}
      <Modal id="my_modal">
        <h1>Modal Title</h1>
        <p>This is modal content.</p>
        <button>Close</button>
      </Modal>
    </div>
  );
};

export default App;
```

### `useModal` Hook

The `useModal` hook provides an easy way to control modals in your application. It returns functions that allow you to open and close specific modals by their unique IDs as well as a boolean that informs your application whether a particular modal is open or not.

```javascript
import React from "react";
import Modal from "easy-dialog-modal";
import useModal from "easy-dialog-modal/dist/hooks/useModal"; // Import the useModal hook
import "your-modal-library/dist/styles.css"; // Import the library's styles

const App = () => {
  const { openMyModal, closeMyModal, isMyModalOpen } = useModal("my_modal");

  return (
    <div>
      {/* You can put anything in the modal */}
      <button onClick={openMyModal}>Open Modal</button>
      <p>My modal is open? {isMyModalOpen}</p>
      <Modal id="my_modal">
        <h1>Modal Title</h1>
        <p>This is modal content.</p>
        <button onClick={closeMyModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
```

### Customize your modal with additional props

For example provide the `closeOnOutsideClick` prop to make it such that the modal closes when clicked outside of its bounds.

You can also customize the style of your modal using traditional CSS and the `className` prop of the Modal component.

## Features

- Easily accessible hook API for controlling modal behaviour
- Customize modal content and appearance.
