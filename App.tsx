import React from 'react'

import { SafeAreaView } from 'react-native';
import { ListProducts } from 'src/screens/ListProducts';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#00a6ff' }}>
      <ListProducts />
    </SafeAreaView>
  );
}