import React from 'react'

import { SafeAreaView } from 'react-native';
import { OrderService } from 'src/screens/OrderService/OrderService';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#00a6ff' }}>
      <OrderService />
    </SafeAreaView>
  );
}