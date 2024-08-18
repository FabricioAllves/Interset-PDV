import { View, ViewStyle, Text, TextStyle, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.stack.routes";

export function BottomTab() {
  const { goBack } = useNavigation();

  const navigation = useNavigation<AppStackNavigatorRoutesProps>();

  return (
    <View style={$container}>
      <TouchableOpacity style={$button} onPress={() => navigation.goBack()}>
        <AntDesign
          style={$icon}
          color={'white'}
          name="arrowleft"
          size={20}
        />
         <Text style={$label}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={$button} onPress={() => navigation.navigate('Checkout')}>
      <Text style={$label}>Checkout</Text>
        <AntDesign
          style={$icon}
          color={'white'}
          name="shoppingcart"
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}

//.  Styles
const $container: ViewStyle = {
  padding: 24,
  justifyContent: 'space-between',
  backgroundColor: '#037ee9',
  flexDirection: 'row'
}

const $label: TextStyle = {
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