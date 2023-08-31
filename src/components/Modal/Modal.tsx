//import react hooks
import React, { useEffect, useMemo } from 'react';

//import stores
import useModalStore from '../../stores/modalStore';

//props typing
interface ModalProps {
  id: string;
  children: React.ReactNode;
}

function Modal({ id, children }: ModalProps) {
  //get modal state from store
  const [modals] = useModalStore((state) => [state.modals]);

  //on mount, add modal to store
  useEffect(() => {
    useModalStore.setState((state) => ({
      modals: [...state.modals, { id, open: false }],
    }));
  }, [id]);

  //memoize whether this modal is open or not
  const isOpen =
    useMemo(() => {
      return modals.find((modal) => modal.id === id)?.open;
    }, [id, modals]) || false;

  return <dialog open={isOpen}>{children}</dialog>;
}

export default Modal;
