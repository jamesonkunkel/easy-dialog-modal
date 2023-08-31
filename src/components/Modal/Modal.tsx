import React, { useEffect, useRef } from "react";
import useModalStore from "../../stores/modalStore";
import "./Modal.css";

interface ModalProps {
  id: string;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  className?: string;
  open?: boolean; // Add the 'open' prop
}

function Modal({
  id,
  children,
  closeOnOutsideClick = false,
  className,
  open = false, // Default to closed
}: ModalProps): JSX.Element {
  const [modals, closeModal, setModalState] = useModalStore((state) => [
    state.modals,
    state.closeModal,
    state.setModalState,
  ]);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    useModalStore.setState((state) => ({
      modals: [...state.modals, { id, open }],
    }));
  }, [id, open]); // Include 'open' in the dependency array

  useEffect(() => {
    setModalState(id, open); // Update the state when open prop changes
  }, [id, open, setModalState]);

  const isOpen = !!modals.find((modal) => modal.id === id)?.open;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        closeOnOutsideClick &&
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal(id);
      }
    };

    if (closeOnOutsideClick && isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      if (closeOnOutsideClick) {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, [isOpen, closeOnOutsideClick, closeModal, id]);

  return (
    <dialog
      className={`dialog-modal ${className}`}
      ref={modalRef}
      open={isOpen}
    >
      {children}
    </dialog>
  );
}

export default Modal;
