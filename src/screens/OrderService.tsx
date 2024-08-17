import React, { useState } from "react";
import { View, ViewStyle, Text, TextStyle, ScrollView } from "react-native";
import { Button, Input, InputSelect, RadioGroup } from "@components";

export function OrderService() {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={$container}>
      <ScrollView style={$Scroll} showsVerticalScrollIndicator={false}>
        <View style={$scrolllv}>
          <View style={$containerRow}>
            <Input description="Data" />
            <Input description="Hora" />
          </View>

          <View style={$containerRow}>
            <Text style={$label}>Zona: </Text>
            <RadioGroup
              options={[
                { label: 'Rural', value: 'Rural' },
                { label: 'Urbana', value: 'Urbana' },
              ]}
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
            />
          </View>

          <View style={$wrapperSelect}>
            <InputSelect description='Contrato' />
            <InputSelect description='Município' />
            <InputSelect description='Tipo de Serviço' />
            <Input description="Numero Documento" />
            <InputSelect description='Categoria' />
            <InputSelect description='Tipo Medidor' />
          </View>
        </View>
      </ScrollView>
      <Button />
    </View>
  );
}

//.  Styles
const $container: ViewStyle = {
  flex: 1,
  padding: 24,
  justifyContent: 'space-between',
  backgroundColor: 'white'
}

const $Scroll: ViewStyle = {
 marginBottom: 15,
 flex: 1
}

const $scrolllv: ViewStyle = {
  marginBottom: 15,
  flex: 1
 }

const $label: TextStyle = {
  fontSize: 18,
};

const $containerRow: ViewStyle = {
  flexDirection: 'row',
  gap: 10,
  marginBottom: 26,
}

const $wrapperSelect: ViewStyle = {
  gap: 22,
}