import { create } from 'zustand';

type SelectOption = {
  value: number;
  label: string;
};

type FormDataState = {
  city: SelectOption;
  category: SelectOption;
  contract: SelectOption;
  typeMedidor: SelectOption;
  typeService: SelectOption;
  document: string;
  zona: string;
  setFormData: (data: Partial<FormDataState>) => void;
  clearFormData: () => void;
};

export const useFormStore = create<FormDataState>((set) => ({
  city: { value: 0, label: '' },
  category: { value: 0, label: '' },
  contract: { value: 0, label: '' },
  typeMedidor: { value: 0, label: '' },
  typeService: { value: 0, label: '' },
  document: '',
  zona: '',
  
  setFormData: (data) => set((state) => ({ ...state, ...data })),

  clearFormData: () => set(() => ({
    city: { value: 0, label: '' },
    category: { value: 0, label: '' },
    contract: { value: 0, label: '' },
    typeMedidor: { value: 0, label: '' },
    typeService: { value: 0, label: '' },
    document: '',
    zona: '',
  })),
}));
