import { Routes } from '@routes/index';
import React from 'react'

import { SafeAreaView } from 'react-native';
import { Checkout } from 'src/screens/Checkout/Checkout';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#037ee9' }}>
      <Routes />
    </SafeAreaView>
  );
}