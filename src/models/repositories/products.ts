import { Api_product } from "src/api/api";
import { Product } from "src/types/product";


export const productApi = {
  async getAllProduct() {
    const response = await Api_product.get<Product[]>(`/products`);
    return response.data;
  },
};