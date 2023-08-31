//create a custom hook that returns the openModal function from the modal store
//import react hooks
import { useCallback } from 'react';

//import stores
import useModalStore from '../../stores/modalStore';

//import types
import { ModalStore } from '../../types/modalTypes';

//create custom hook
function useModal(id: string) {
  //get openModal function from store
  const [openModal, closeModal] = useModalStore((state) => [
    state.openModal,
    state.closeModal,
  ]);

  const openModalById = () => {
    openModal(id);
  };

  const closeModalById = () => {
    closeModal(id);
  };

  return { openModalById, closeModalById };
}

export default useModal;
