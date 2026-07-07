import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import AppNavigator from '@navigation/AppNavigator';
import { toastConfig } from './src/config/toastConfig';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <AppNavigator />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}