import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryProvider } from './HistoryContext';

import HomeScreen from './screens/HomeScreen';
import GoodStoryScreen from './screens/GoodStoryScreen';
import BadStoryScreen from './screens/BadStoryScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import BeMeScreen from './screens/BeMeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <HistoryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BeMe" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BeMe" component={BeMeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GoodStory" component={GoodStoryScreen} />
          <Stack.Screen name="BadStory" component={BadStoryScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </HistoryProvider>
  );
}
