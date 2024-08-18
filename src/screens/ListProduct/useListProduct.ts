import { useEffect, useState } from "react";
import { productApi } from "src/models/repositories/products";



import { Product } from "src/types/product";

export function useListProduct(){
  const [productsData, setProductsData] = useState<Product[]>([]);

  const fetchDataProducts = async () => {
    try {
      const fetchedProductsData = await productApi.getAllProduct();
      setProductsData(fetchedProductsData);
    } catch (error) {
      console.log('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchDataProducts();
  }, []);

  return {
    productsData,
  }
}