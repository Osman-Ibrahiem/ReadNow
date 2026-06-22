import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { AuthStackParamList } from './types';

import SplashScreen from '@screens/Splash';
import LoginScreen  from '@screens/Auth/Login';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login"  component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;