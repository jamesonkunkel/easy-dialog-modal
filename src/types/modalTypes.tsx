export interface Modal {
  id: string;
  open: boolean;
}

export interface ModalStore {
  modals: Modal[];
  openModal: (id: string) => void;
}
