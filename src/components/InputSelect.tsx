import React, { useState } from 'react';
import { ImageStyle, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

interface DropdownItem {
  [key: string]: any;
}

interface InputSelectProps<T> {
  description: string;
  data: Array<DropdownItem>;
  value: T | null;
  onChange: (value: T) => void;
  onBlur: () => void;
  labelField: string;
  valueField: string;
  errorMessage?: string;
}

export function InputSelect<T>({
  description,
  data,
  value,
  onChange,
  onBlur,
  labelField,
  valueField,
  errorMessage
}: InputSelectProps<T>) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={$container}>
      <Text style={$label}>
        {description}
      </Text>
      <Dropdown
        style={[$dropdown, isFocus && $dropdownFocus]}
        placeholderStyle={$placeholderStyle}
        selectedTextStyle={$selectedTextStyle}
        inputSearchStyle={$inputSearchStyle}
        iconStyle={$iconStyle}
        data={data}
        search
        containerStyle={{ height: '70%' }}
        labelField={labelField}
        valueField={valueField}
        placeholder={''}
        searchPlaceholder="Search..."
        value={value as any} 
        mode='modal'
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
          onBlur();
        }}
        onChange={item => {
          onChange(item[valueField] as T);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={$icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      {errorMessage && <Text style={$error}>{errorMessage}</Text>}
    </View>
  );
}

// Styles
const $container: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
};

const $dropdown: ViewStyle = {
  borderColor: 'gray',
  borderRadius: 8,
  borderWidth: 0.5,
  height: 50,
  paddingHorizontal: 8,
};

const $dropdownFocus: ViewStyle = {
  borderColor: 'blue',
};

const $icon: ViewStyle = {
  marginRight: 5,
};

const $iconStyle: ImageStyle = {
  height: 20,
  width: 20,
};

const $inputSearchStyle: TextStyle = {
  fontSize: 16,
  height: 40,
};

const $label: TextStyle = {
  marginBottom: 10,
  fontSize: 18,
  color: '#070707c5',
};

const $placeholderStyle: TextStyle = {
  fontSize: 16,
};

const $selectedTextStyle: TextStyle = {
  fontSize: 16,
};

const $error: TextStyle = {
  color: 'red',
  marginTop: 5,
};
