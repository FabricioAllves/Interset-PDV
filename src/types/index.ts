export type cityResponse = {
  ativo: boolean;
  codigo: number;
  cep: string;
  domicilioFiscal: string;
  munId: number;
  nome: string;
  tipoFator: string;
}

export interface ContractResponse {
  nome: string;
  codigo: number;
}

// Tipagem para Cidade (já existente)
export interface CityResponse {
  nome: string;
  codigo: number;
}

// Tipagem para Tipo de Serviço
export interface ServiceTypeResponse {
  nome: string;
  codigo: number;
}

// Tipagem para Categoria de Serviço
export interface CategoryResponse {
  nome: string;
  codigo: number;
}

// Tipagem para Tipo de Medidor
export interface MeterTypeResponse {
  nome: string;
  codigo: number;
}