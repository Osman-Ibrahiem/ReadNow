import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import type { TabParamList } from './types';
import { Colors, Typography } from '@theme';

import ListNavigator from './ListNavigator';
import ProfileScreen from '@screens/Profile';
import SettingsScreen from '@screens/Settings';

const Tab = createBottomTabNavigator<TabParamList>();

const tabBarStyle = {
  height: 75,
  borderTopWidth: 0.5,
  borderTopColor: Colors.border,
  paddingTop: 8,
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.text,
      tabBarInactiveTintColor: Colors.tabInactive,
      tabBarStyle: {
        height: 75,
        borderTopWidth: 0.5,
        borderTopColor: Colors.border,
        paddingTop: 8,
      },
      tabBarLabelStyle: {
        ...Typography.caption,
        fontSize: 11,
      },
    }}
  >
    <Tab.Screen
      name="ListTab"
      component={ListNavigator}
      options={({ route }) => {
        const focusedRoute = getFocusedRouteNameFromRoute(route) ?? 'ListScreen';
        return {
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={22} color={color} />,
          tabBarStyle: focusedRoute === 'ArticleDetails' ? { display: 'none' } : tabBarStyle,
        };
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <MaterialIcons name="person-outline" size={22} color={color} />,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={22} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;