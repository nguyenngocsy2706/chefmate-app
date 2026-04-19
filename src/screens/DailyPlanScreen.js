import React from "react";
import { View, Text } from "react-native";

export default function DailyPlanScreen({ route }) {
  const { meal } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Bữa sáng</Text>
      <Text>{meal.name}</Text>
    </View>
  );
}