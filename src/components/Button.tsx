import React from "react";
import { TouchableOpacity,TouchableOpacityProps, Text, ViewStyle, TextStyle } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void
}

export function Button({ onPress, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={$Button} activeOpacity={0.8} onPress={onPress}>
      <Text style={$label}>Continuar</Text>
    </TouchableOpacity>
  )
}


//.  Styles
const $label: TextStyle = {
  fontSize: 18,
  color: '#ffffff'
};
 
const $Button: ViewStyle = {
  backgroundColor: '#000000',
  borderRadius: 7,
  borderWidth: 0.5,
  height: 50,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center'
}
