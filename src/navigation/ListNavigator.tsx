import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { ListStackParamList } from './types';
import ListScreen from '@screens/List';
import ArticleDetailsScreen from '@screens/ArticleDetails';

const Stack = createNativeStackNavigator<ListStackParamList>();

const ListNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
    </Stack.Navigator>
);

export default ListNavigator;