import { create } from 'zustand';

type FormDataState = {
  city: number;
  category: number;
  contract: number;
  typeMedidor: number;
  typeService: number;
  document: string;
  zona: string;
  setFormData: (data: Partial<FormDataState>) => void;
};

export const useFormStore = create<FormDataState>((set) => ({
  city: 0,
  category: 0,
  contract: 0,
  typeMedidor: 0,
  typeService: 0,
  document: '',
  zona: '',
  setFormData: (data) => set((state) => ({ ...state, ...data })),
}));
