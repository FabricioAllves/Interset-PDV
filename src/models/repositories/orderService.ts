import { CategoryResponse, cityResponse, ContractResponse, MeterTypeResponse, ServiceTypeResponse } from "src/types";
import { Api_orderService } from "../../api/apiConfig";


export const orderServiceApi = {
  async getContract() {
    const response = await Api_orderService.get<ContractResponse[]>(`/br.com.erpsistema.service.contratoService`);
    return response.data;
  },

  async getCity() {
    const response = await Api_orderService.get<cityResponse[]>(`/br.com.erpsistema.service.cidade`);
    return response.data;
  },

  async getTypeService() {
    const response = await Api_orderService.get<ServiceTypeResponse[]>(`/enums/TipoServicoEnum`);
    return response.data;
  },

  async getCategoryService() {
    const response = await Api_orderService.get<CategoryResponse[]>(`/enums/CategoriaServico`);
    return response.data;
  },

  async getTypeMedidor() {
    const response = await Api_orderService.get<MeterTypeResponse[]>(`/enums/TipoMedidor`);
    return response.data;
  },
};