

import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { InputSelect } from "src/components/InputSelect";
import { RadioGroup } from "src/components/RadioButton";

export function OrderService() {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={$container}>
      <View style={$container1}>
        <Input />
        <Input />
      </View>

      <View >
        <RadioGroup
          options={[
            { label: 'Rural', value: 'Rural' },
            { label: 'Urbana', value: 'Urbana' },
          ]}
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
        />
      </View>

      <InputSelect />

      <Button />
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  margin: 24
}

const $container1: ViewStyle = {
  flexDirection: 'row',
  gap: 10

}