
import React from "react";
import { TextInput, Text, View, TextStyle, ViewStyle } from "react-native";

type PropsInput = {
  description: string,
}

export function Input({ description }: PropsInput) {
  return (
    <View style={$container}>
      <Text style={$label}>{description}</Text>
      <TextInput style={$inputStyle} />
    </View>
  )
}


//.  Styles
const $container: ViewStyle = {
  flexDirection: 'column',
  flex: 1,
}

const $label: TextStyle = {
  fontSize: 18,
  color: '#070707c5',
};

const $inputStyle: TextStyle = {
  borderColor: 'gray',
  borderRadius: 7,
  borderWidth: 0.5,
  height: 50,
  padding: 10,
  marginTop: 10,
}