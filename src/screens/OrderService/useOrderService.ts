import { useEffect, useState } from "react";
import { orderServiceApi } from "src/models/repositories/orderService";
import { CategoryResponse, cityResponse, ContractResponse, MeterTypeResponse, ServiceTypeResponse } from "src/types";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {FormData, FormSchema} from './validation/schema';
import { cities, mockCategories, mockContracts, mockMeterTypes, mockServiceTypes } from "mock";
import { useFormStore } from "src/store/useFormStore";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.stack.routes";

export function useOrderService(){
  const [cityData, setCityData] = useState<cityResponse[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);
  const [contractData, setContractData] = useState<ContractResponse[]>([]);
  const [typeMedidorData, setTypeMedidorData] = useState<MeterTypeResponse[]>([]);
  const [typeServiceData, setTypeServiceData] = useState<ServiceTypeResponse[]>([]);

  const {setFormData} = useFormStore();

  const { navigate } = useNavigation<AppStackNavigatorRoutesProps>();

  const { register, handleSubmit, control,  formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      city: 0,
      category: 0,
      contract: 0,
      typeMedidor: 0,
      typeService: 0,
      document: '',
      zona: ''
    }
  });

  const fetchDataFormOrderService = async () => {
    try {
      const [
        fetchedCityData, 
        fetchedCategoryData, 
        fetchedContractData, 
        fetchedTypeMedidorData, 
        fetchedTypeServiceData
      ] = await Promise.all([
        orderServiceApi.getCity(),
        orderServiceApi.getCategoryService(),
        orderServiceApi.getContract(),
        orderServiceApi.getTypeMedidor(),
        orderServiceApi.getTypeService(),
      ]);

      setCityData(fetchedCityData);
      setCategoryData(fetchedCategoryData);
      setContractData(fetchedContractData);
      setTypeMedidorData(fetchedTypeMedidorData);
      setTypeServiceData(fetchedTypeServiceData);
    }catch(error) {
      console.log('Erro ao buscar os dados:', error);
      
      setCityData(cities);
      setCategoryData(mockCategories);
      setContractData(mockContracts);
      setTypeMedidorData(mockMeterTypes);
      setTypeServiceData(mockServiceTypes);
    }
  }

  useEffect(() => {
    fetchDataFormOrderService();
  },[])

  const onSubmit = async (data: FormData) => {
    setFormData({
      city: { value: data.city, label: cityData.find(c => c.codigo === data.city)?.nome || '' },
      category: { value: data.category, label: categoryData.find(c => c.codigo === data.category)?.nome || '' },
      contract: { value: data.contract, label: contractData.find(c => c.codigo === data.contract)?.nome || '' },
      typeMedidor: { value: data.typeMedidor, label: typeMedidorData.find(c => c.codigo === data.typeMedidor)?.nome || '' },
      typeService: { value: data.typeService, label: typeServiceData.find(c => c.codigo === data.typeService)?.nome || '' },
      document: data.document,
      zona: data.zona,
    });
    navigate('ListProduct')
  }

  return {
    cityData,
    categoryData,
    contractData,
    typeMedidorData,
    typeServiceData,
    register,
    handleSubmit,
    control,
    onSubmit,
    errors
  }
}