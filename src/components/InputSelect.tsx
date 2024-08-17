import React, { useState } from 'react';
import { ImageStyle, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

export function InputSelect() {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  return(
    <View style={$container}>
       <Text style={$label}>
         Contrato
        </Text>
      <Dropdown
        style={[$dropdown, isFocus && $dropdownFocus]}
        placeholderStyle={$placeholderStyle}
        selectedTextStyle={$selectedTextStyle}
        inputSearchStyle={$inputSearchStyle}
        iconStyle={$iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
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
    </View>
  )
}


//.  Styles
const $container: ViewStyle = {
  backgroundColor: 'white',
  paddingVertical: 16,
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
  color: '#070707c5'
};

const $placeholderStyle: TextStyle = {
  fontSize: 16,
};

const $selectedTextStyle: TextStyle = {
  fontSize: 16,
};