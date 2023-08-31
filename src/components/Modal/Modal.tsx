import React, { useEffect, useRef } from 'react';
import useModalStore from '../../stores/modalStore';

interface ModalProps {
  id: string;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
}

function Modal({
  id,
  children,
  closeOnOutsideClick = false,
}: ModalProps): JSX.Element {
  const [modals, closeModal] = useModalStore((state) => [
    state.modals,
    state.closeModal,
  ]);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    useModalStore.setState((state) => ({
      modals: [...state.modals, { id, open: false }],
    }));
  }, [id]);

  const isOpen = !!modals.find((modal) => modal.id === id)?.open;

  useEffect(() => {
    console.log('test');
    const handleOutsideClick = (event: MouseEvent) => {
      console.log('handleOutsideClick');
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
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      if (closeOnOutsideClick) {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  }, [isOpen, closeOnOutsideClick, closeModal, id]);

  return (
    <dialog ref={modalRef} open={isOpen}>
      {children}
    </dialog>
  );
}

export default Modal;
