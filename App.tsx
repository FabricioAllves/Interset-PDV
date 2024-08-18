import { Routes } from '@routes/index';
import React from 'react'

import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#037ee9' }}>
      <Routes />
    </SafeAreaView>
  );
}