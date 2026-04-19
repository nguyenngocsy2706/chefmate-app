import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/navigation/AppNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';
import PlanSelectionScreen from './src/screens/PlanSelectionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="PlanSelection" component={PlanSelectionScreen} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}