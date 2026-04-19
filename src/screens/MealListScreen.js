import React from "react";
import { View, FlatList } from "react-native";
import MealCard from "../components/MealCard";
import meals from "../data/meals";

export default function MealListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onAdd={() => navigation.navigate("Daily", { meal: item })}
          />
        )}
      />
    </View>
  );
}