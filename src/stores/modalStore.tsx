import { create } from "zustand";
import { Modal, ModalStore } from "../types/modalTypes";

const useModalStore = create<ModalStore>()((set, get) => ({
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

  //close a modal by id
  closeModal: (id: string) => {
    set((state) => ({
      modals: state.modals.map((modal) =>
        modal.id === id ? { ...modal, open: false } : modal
      ),
    }));
  },

  setModalState: (id: string, open: boolean) => {
    set((state) => ({
      modals: state.modals.map((modal) =>
        modal.id === id ? { ...modal, open } : modal
      ),
    }));
  },
}));

export default useModalStore;
