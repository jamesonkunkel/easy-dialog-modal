import { create } from 'zustand';
import { Modal, ModalStore } from '../types/modalTypes';

const useModalStore = create<ModalStore>()((set) => ({
  //array of modal objects to manage
  modals: [] as Modal[],

  //open a modal by id
  openModal: (id: string) => {
    set((state) => ({
      modals: state.modals.map((modal) =>
        modal.id === id ? { ...modal, open: true } : modal
      ),
    }));
  },
}));
