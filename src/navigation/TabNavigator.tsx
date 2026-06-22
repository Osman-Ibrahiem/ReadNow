import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { TabParamList } from './types';
import ListScreen    from '@screens/List';
import ProfileScreen from '@screens/Profile';
import SettingsScreen from '@screens/Settings';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="ListTab"  component={ListScreen} />
    <Tab.Screen name="Profile"  component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default TabNavigator;