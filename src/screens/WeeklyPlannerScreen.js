import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const days = ["15", "16", "17", "18", "19", "20"];

export default function WeeklyPlannerScreen({ navigation }) {
  const [selected, setSelected] = useState("16");

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Lịch trình tuần</Text>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        {days.map((d) => (
          <TouchableOpacity
            key={d}
            onPress={() => setSelected(d)}
            style={{
              marginRight: 10,
              padding: 10,
              borderRadius: 20,
              backgroundColor: selected === d ? "green" : "#eee",
            }}
          >
            <Text>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Meals")}
        style={{ backgroundColor: "green", padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: "#fff" }}>Thêm món</Text>
      </TouchableOpacity>
    </View>
  );
}