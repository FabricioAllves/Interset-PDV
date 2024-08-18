import { data } from "src/types/product";
import { CardProduct } from "@components";
import { FlatList, Text, TextStyle, View, ViewStyle } from "react-native";
import useCartStore from "src/store/useCartStore";

export function ListProducts() {
  const { addProduct } = useCartStore()

  return (
    <>
      <View style={$header}>
        <Text style={$label}>25/257 produto(s)</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardProduct dataItem={item} onPress={() => addProduct(item)} />
        )}
        style={$container}
      />
    </>
  )
}

//.  Styles
const $container: ViewStyle = {
  flex: 1,
  padding: 24,
  backgroundColor: '#e7e5e5'
}

const $header: ViewStyle = {
  padding: 24,
  backgroundColor: '#ffffff'
}

const $label: TextStyle = {
  fontSize: 14,
  fontWeight: '700',
  color: '#3a3a3a'
};
