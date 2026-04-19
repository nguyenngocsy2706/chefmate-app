import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import PlanOptionScreen from "../screens/PlanOptionScreen";
import WeeklyPlannerScreen from "../screens/WeeklyPlannerScreen";
import MealListScreen from "../screens/MealListScreen";
import DailyPlanScreen from "../screens/DailyPlanScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="PlanOption" component={PlanOptionScreen} />
        <Stack.Screen name="Weekly" component={WeeklyPlannerScreen} />
        <Stack.Screen name="Meals" component={MealListScreen} />
        <Stack.Screen name="Daily" component={DailyPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}