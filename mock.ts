export const mockContracts = [
  { nome: "Contrato Básico", codigo: 123 },
  { nome: "Contrato Avançado", codigo: 456 },
  { nome: "Contrato Premium", codigo: 789 },
  { nome: "Contrato Corporativo", codigo: 101 },
  { nome: "Contrato Especial", codigo: 202 }
];

export const mockServiceTypes = [
  { nome: "Instalação Elétrica", codigo: 1 },
  { nome: "Manutenção Preventiva", codigo: 2 },
  { nome: "Reparação de Equipamentos", codigo: 3 },
  { nome: "Inspeção Técnica", codigo: 4 },
  { nome: "Atualização de Sistema", codigo: 5 }
];

export const mockCategories = [
  { nome: "Categoria Residencial", codigo: 1 },
  { nome: "Categoria Comercial", codigo: 2 },
  { nome: "Categoria Industrial", codigo: 3 },
  { nome: "Categoria Rural", codigo: 4 },
  { nome: "Categoria Pública", codigo: 5 }
];

export const mockMeterTypes = [
  { nome: "Medidor Monofásico", codigo: 101 },
  { nome: "Medidor Bifásico", codigo: 102 },
  { nome: "Medidor Trifásico", codigo: 103 },
  { nome: "Medidor Digital", codigo: 104 },
  { nome: "Medidor Inteligente", codigo: 105 }
];

export const cities = [
  {
    ativo: true,
    codigo: 2320,
    cep: '73860000',
    domicilioFiscal: 'GO5219803',
    munId: 868,
    nome: 'SÃO DOMINGOS',
    tipoFator: 'B'
  },
  {
    ativo: false,
    codigo: 2345,
    cep: '12345000',
    domicilioFiscal: 'GO1234567',
    munId: 123,
    nome: 'GOIANIA',
    tipoFator: 'A'
  },
  {
    ativo: true,
    codigo: 3456,
    cep: '67890000',
    domicilioFiscal: 'GO9876543',
    munId: 456,
    nome: 'APARECIDA DE GOIANIA',
    tipoFator: 'C'
  },
  {
    ativo: true,
    codigo: 4567,
    cep: '34567890',
    domicilioFiscal: 'GO5432109',
    munId: 789,
    nome: 'TRINDADE',
    tipoFator: 'B'
  }
];
