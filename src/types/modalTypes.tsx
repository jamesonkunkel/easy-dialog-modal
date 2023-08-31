export interface Modal {
  id: string;
  open: boolean;
}

export interface ModalStore {
  modals: Modal[];
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  setModalState: (id: string, open: boolean) => void;
}
