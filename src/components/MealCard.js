import React from "react";
import { View, Text, Button, Image } from "react-native";

export default function MealCard({ meal, onAdd }) {
  return (
    <View style={{ margin: 10 }}>
      <Image source={{ uri: meal.image }} style={{ height: 150 }} />
      <Text>{meal.name}</Text>
      <Button title="Thêm" onPress={onAdd} />
    </View>
  );
}