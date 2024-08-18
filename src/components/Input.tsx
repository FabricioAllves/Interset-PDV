import React from "react";
import { TextInput, Text, View, TextStyle, ViewStyle } from "react-native";

type PropsInput = {
  description: string,
  value?: string,
  onChangeText?: (text: string) => void,
  onBlur?: () => void,
  errorMessage?: string;
}

export function Input({ description, value, onChangeText, onBlur, errorMessage }: PropsInput) {
  return (
    <View style={$container}>
      <Text style={$label}>{description}</Text>
      <TextInput
        style={$inputStyle}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
       {errorMessage && <Text style={$error}>{errorMessage}</Text>}
    </View>
  );
}

// Styles
const $container: ViewStyle = {
  flexDirection: 'column',
  flex: 1,
};

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
};

const $error: TextStyle = {
  color: 'red',
  marginTop: 5,
};
