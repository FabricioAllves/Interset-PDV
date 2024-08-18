import React from "react";
import { View, ViewStyle, Text, TextStyle, ScrollView, TouchableOpacity } from "react-native";
import { useCheckout } from "./useCheckout";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AppStackNavigatorRoutesProps } from "@routes/app.stack.routes";
import { useNavigation } from "@react-navigation/native";

export function Checkout() {
  const { dataOrder, products, totalValue, handleSend } = useCheckout();

  const navigation = useNavigation<AppStackNavigatorRoutesProps>();

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={$container}>
          <Text style={$titleHeader}>Dados do Pedido</Text>
          {dataOrder.map((item, index) => (
            <View key={index} style={$wrapperRow}>
              <Text style={$label}>{item.label}</Text>
              <Text>{item.value}</Text>
            </View>
          ))}

          <View style={$productsContainer}>
            <Text style={$title}>Produtos:</Text>
            {products.map((product, index) => (
              <View key={index} style={$productRow}>
                <Text style={$titleProduct}>{product.title}</Text>
                <Text>{product.quantity} x R$ {product.price.toFixed(2)}</Text>
              </View>
            ))}
          </View>

          <View style={$totalContainer}>
            <Text style={$title}>Valor Total:</Text>
            <Text>R$ {totalValue.toFixed(2)}</Text>
          </View>
        </View>

      </ScrollView>
      <View style={$containerButton}>
        <TouchableOpacity style={$button} onPress={() => navigation.goBack()}>
          <AntDesign
            style={$icon}
            color={'white'}
            name="arrowleft"
            size={20}
          />
          <Text style={$labelTabBottom}>Lista de produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={$button} onPress={handleSend}>
          <Text style={$labelTabBottom}>Enviar</Text>
          <AntDesign
            style={$icon}
            color={'white'}
            name="save"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

// Styles
const $container: ViewStyle = {
  flex: 1,
  padding: 24,
  backgroundColor: 'white',
};

const $wrapperRow: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 15,
  borderBottomWidth: 0.5,
  borderColor: '#ccc',
};

const $titleHeader: TextStyle = {
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center'
};

const $label: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
};

const $productsContainer: ViewStyle = {
  marginTop: 20,
};

const $title: TextStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
};

const $productRow: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 10,
  borderBottomWidth: 0.5,
  borderColor: '#ccc',
};

const $totalContainer: ViewStyle = {
  paddingTop: 10,
  borderTopWidth: 0.5,
  borderColor: '#001eff',
};

const $titleProduct: TextStyle = {
  width: '70%'
};

const $containerButton: ViewStyle = {
  padding: 24,
  justifyContent: 'space-between',
  backgroundColor: '#037ee9',
  flexDirection: 'row'
}

const $labelTabBottom: TextStyle = {
  fontSize: 18,
  color: '#ffffff',
};

const $icon: ViewStyle = {
  marginRight: 5,
};

const $button: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 5
}