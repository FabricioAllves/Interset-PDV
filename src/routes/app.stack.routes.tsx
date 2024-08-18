
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Checkout } from "src/screens/Checkout/Checkout";

import { ListProducts } from "src/screens/ListProduct/ListProduct";
import { OrderService } from "src/screens/OrderService/OrderService";

type AppStack = {
  ListProduct: undefined,
  OrderService: undefined,
  Checkout: undefined,
}

export type AppStackNavigatorRoutesProps = NativeStackNavigationProp<AppStack>
const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName="OrderService">
      <Screen name="OrderService" component={OrderService} />
      <Screen name="ListProduct" component={ListProducts} />
      <Screen name="Checkout" component={Checkout} />
    </Navigator>
  )
}