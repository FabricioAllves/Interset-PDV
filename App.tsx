
import React from 'react'

import { SafeAreaView, StatusBar } from 'react-native';
import { OrderService } from 'src/screens/OrderService';

export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
    <OrderService />
  </SafeAreaView>
  );
}