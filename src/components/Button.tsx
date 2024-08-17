import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

export function Button() {
  return (
    <TouchableOpacity style={$Button} activeOpacity={0.8}>
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
