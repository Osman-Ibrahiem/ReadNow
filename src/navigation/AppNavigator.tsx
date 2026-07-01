import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import SplashScreen from '@screens/Splash';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Main" component={TabNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;