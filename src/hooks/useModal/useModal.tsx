//create a custom hook that returns the openModal function from the modal store
//import react hooks
import { useCallback, useMemo } from 'react';

//import stores
import useModalStore from '../../stores/modalStore';

type ModalHookReturnType = [
  () => void, // openModalById function
  () => void, // closeModalById function
  boolean // isOpen boolean
];

//create custom hook
function useModal(id: string): ModalHookReturnType {
  //get openModal function from store
  const [openModal, closeModal, modals] = useModalStore((state) => [
    state.openModal,
    state.closeModal,
    state.modals,
  ]);

  const openModalById = useCallback(() => {
    openModal(id);
  }, [id, openModal]);

  const closeModalById = useCallback(() => {
    closeModal(id);
  }, [id, closeModal]);

  //get whether modal is open
  // const isOpen =true

  //memoize whether modal at id is open
  const isOpen = useMemo(() => {
    const modal = modals.find((modal) => modal.id === id);
    return modal ? modal.open : false;
  }, [id, modals]);

  return [openModalById, closeModalById, isOpen];
}

export default useModal;
