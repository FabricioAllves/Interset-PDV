import React from "react";
import { View, ViewStyle, Text, TextStyle, ScrollView } from "react-native";
import { Button, Input, InputSelect, RadioGroup } from "@components";
import { useOrderService } from "./useOrderService";
import { Controller } from "react-hook-form";

export function OrderService() {
  const {
    cityData,
    categoryData,
    contractData,
    typeMedidorData,
    typeServiceData,
    control,
    handleSubmit,
    onSubmit,
    errors
  } = useOrderService();

  return (
    <View style={$container}>
      <ScrollView style={$Scroll} showsVerticalScrollIndicator={false}>
        <View style={$scrolllv}>
          <Text style={$titleHeader}>Dados do Pedido</Text>



          <View style={$wrapperSelect}>
            <Controller
              control={control}
              name="contract"
              render={({ field }) => (
                <InputSelect
                  description='Contrato'
                  data={contractData}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelField="nome"
                  valueField="codigo"
                  errorMessage={errors.city?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <InputSelect
                  description='Município'
                  data={cityData}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelField="nome"
                  valueField="codigo"
                  errorMessage={errors.city?.message}
                />
              )}
            />

            <View style={$containerRow}>
              <Text style={$label}>Zona: </Text>
              <Controller
                control={control}
                name="zona"
                render={({ field }) => (
                  <RadioGroup
                    options={[
                      { label: 'Rural', value: 'Rural' },
                      { label: 'Urbana', value: 'Urbana' },
                    ]}
                    selectedValue={field.value}
                    onSelect={field.onChange}
                    errorMessage={errors.zona?.message}
                  />
                )}
              />
            </View>

            <Controller
              control={control}
              name="typeService"
              render={({ field }) => (
                <InputSelect
                  description='Tipo de Serviço'
                  data={typeServiceData}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelField="nome"
                  valueField="codigo"
                  errorMessage={errors.typeService?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="document"
              render={({ field }) => (
                <Input
                  description="Numero Documento"
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  errorMessage={errors.document?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <InputSelect
                  description='Categoria'
                  data={categoryData}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelField="nome"
                  valueField="codigo"
                  errorMessage={errors.category?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="typeMedidor"
              render={({ field }) => (
                <InputSelect
                  description='Tipo Medidor'
                  data={typeMedidorData}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelField="nome"
                  valueField="codigo"
                  errorMessage={errors.typeMedidor?.message}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <Button onPress={handleSubmit(onSubmit)} />
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

const $titleHeader: TextStyle = {
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 30
};


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
 marginTop: 10
}

const $wrapperSelect: ViewStyle = {
  gap: 22,
}
