import { View, Image, ViewStyle, Text, ImageStyle, TextStyle, TouchableOpacityProps, TouchableOpacity } from "react-native";
import useCartStore from "src/store/useCartStore";
import { Product } from "src/types/product";

type CardProductProps = TouchableOpacityProps & {
  dataItem: Product
}

export function CardProduct({ dataItem, ...rest }: CardProductProps) {
  const { products, decrementQuantity, incrementQuantity, addProduct } = useCartStore()
  const cartItem = products.find(item => item.id === dataItem.id);

  return (
    <View style={$container}>
      <View style={$wrapper}>
        <Image style={$Image} source={{ uri: dataItem.image }} />
        <View style={$textContainer}>
          <Text style={$label} numberOfLines={2}>
            {dataItem.title}
          </Text>

          <Text style={$description} numberOfLines={3}>
            {dataItem.description}
          </Text>

          <Text style={$label}>
            R$ {dataItem.price}
          </Text>
        </View>
      </View>
      {cartItem ? (
        <View style={$buyIncrement}>
          <TouchableOpacity style={$addCart} onPress={() => decrementQuantity(cartItem.id)}>
            <Text style={$labelButton}>-</Text>
          </TouchableOpacity>
          <View style={$quantity}>
            <Text>{cartItem.quantity}</Text>
          </View>
          <TouchableOpacity style={$addRemove} onPress={() => incrementQuantity(cartItem.id)}>
            <Text style={$labelButton}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={$buy} onPress={() => addProduct(dataItem)}>
          <Text>Comprar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

//. styles
const $container: ViewStyle = {
  width: '100%',
  padding: 10,
  backgroundColor: 'white',
  borderRadius: 10,
  marginBottom: 10,
  alignItems: 'center'
};

const $wrapper: ViewStyle = {
  width: '100%',
  padding: 10,
  backgroundColor: 'white',
  borderRadius: 10,
  flexDirection: 'row',
  gap: 12,
};

const $Image: ImageStyle = {
  height: 100,
  width: 100,
  borderRadius: 10,
};

const $textContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'space-between'
};

const $label: TextStyle = {
  fontSize: 18,
  fontWeight: '600'
};

const $description: TextStyle = {
  fontSize: 14,
  flexWrap: 'wrap',
  textAlign: 'justify'
};

const $buy: ViewStyle = {
  width: '85%',
  height: 42,
  borderWidth: 0.5,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center'
};

const $buyIncrement: ViewStyle = {
  width: '85%',
  height: 42,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderWidth: 1,
  borderColor: '#037ee9',
};

const $quantity: ViewStyle = {
  width: 80,
  height: 42,
  justifyContent: 'center',
  alignItems: 'center',
};

const $addCart: ViewStyle = {
  flex: 1,
  height: 42,
  backgroundColor: '#037ee9',
  borderTopLeftRadius: 50,
  borderBottomLeftRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
};

const $addRemove: ViewStyle = {
  flex: 1,
  height: 42,
  backgroundColor: '#037ee9',
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
};



const $labelButton: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white'
};