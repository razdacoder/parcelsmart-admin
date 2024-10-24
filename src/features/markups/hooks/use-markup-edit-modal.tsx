import { create } from "zustand";
type MarkupEditState = {
  carrier?: string;
  isOpen: boolean;
  onOpen: (value: string) => void;
  onClose: () => void;
};

export const useMarkupEdit = create<MarkupEditState>((set) => ({
  isOpen: false,
  onOpen: (value: string) => set({ carrier: value, isOpen: true }),
  onClose: () => set({ carrier: undefined, isOpen: false }),
}));
