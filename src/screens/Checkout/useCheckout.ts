import { Alert } from "react-native";
import useCartStore from "src/store/useCartStore";
import { useFormStore } from "src/store/useFormStore";

export function useCheckout() {
  const { category, city, contract, document, zona, typeService, typeMedidor, clearFormData } =
    useFormStore();
  const { products, clearCart } = useCartStore();
  const totalValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const dataOrder = [
    { label: "Contrato", value: contract.value },
    { label: "Categoria", value: category.label },
    { label: "Municipio", value: city.label },
    { label: "Documento", value: document },
    { label: "Zona", value: zona },
    { label: "Tipo Serviço", value: typeService.label },
    { label: "Tipo Medidor", value: typeMedidor.label },
  ];

  function handleSend() {
    Alert.alert('Enviar', `Deseja Enviar?`, [
      {
        text: 'Não ❌',
        style: 'cancel'
      },
      {
        text: 'Sim ✅',
        onPress: async () => {
          try {
            clearFormData()
            clearCart()
          } catch (error) {
            Alert.alert("Não foi possivel Enviar!")
          }
        }
      }
    ])
  }

  return {
    dataOrder,
    products,
    totalValue,
    handleSend
  };
}
