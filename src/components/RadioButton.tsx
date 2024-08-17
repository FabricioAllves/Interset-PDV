import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onPress: (value: string) => void;
}

interface RadioGroupProps {
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

const RadioButton = ({ label, value, checked, onPress }: RadioButtonProps) => {
  return (
    <TouchableOpacity style={$container} onPress={() => onPress(value)}>
      <View style={$outerCircle}>
        {checked && <View style={$innerCircle} />}
      </View>
      <Text style={$label}>{label}</Text>
    </TouchableOpacity>
  );
};

export const RadioGroup = ({ options, onSelect, selectedValue }: RadioGroupProps) => {
  return (
    <View style={$containerRadioGroup}>
      {options.map(option => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={option.value === selectedValue}
          onPress={onSelect}
        />
      ))}
    </View>
  );
};


//.  Styles
const $container: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
}

const $containerRadioGroup: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 25
}

const $outerCircle: ViewStyle = {
  height: 24,
  width: 24,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#070707c5',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
}

const $innerCircle: ViewStyle = {
  height: 12,
  width: 12,
  borderRadius: 6,
  backgroundColor: '#070707c5',
}

const $label: TextStyle = {
  fontSize: 16,
  color: '#070707c5'
}