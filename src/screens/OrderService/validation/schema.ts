import { z } from 'zod';

export const FormSchema = z.object({
  city: z.number().min(1, 'Municipio é obrigatória'),
  category: z.number().min(1, 'Categoria é obrigatória'),
  contract: z.number().min(1, 'Contrato é obrigatório'),
  typeMedidor: z.number().min(1, 'Tipo de Medidor é obrigatório'),
  typeService: z.number().min(1, 'Tipo de Serviço é obrigatório'),
  document: z.string().min(1, 'Documento é obrigatório'),
  zona: z.string().min(1, 'A opção de zona é obrigatória'),
});

export type FormData = z.infer<typeof FormSchema>;