import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BottomTab() {
  return (
    <View className="bg-white py-3 px-6 flex-row justify-between rounded-t-3xl">
      <TabItem icon="compass" label="DISCOVER" />
      <TabItem icon="scan" label="SCAN" />
      <TabItem icon="calendar" label="PLANNER" active />
      <TabItem icon="shopping-bag" label="ORDERS" />
      <TabItem icon="user" label="PROFILE" />
    </View>
  );
}

function TabItem({ icon, label, active }) {
  return (
    <View className="items-center">
      <Feather
        name={icon}
        size={20}
        color={active ? "#2E7D32" : "#9CA3AF"}
      />
      <Text
        className={`text-xs mt-1 ${
          active ? "text-[#2E7D32]" : "text-gray-400"
        }`}
      >
        {label}
      </Text>

      {active && (
        <View className="w-1 h-1 bg-[#2E7D32] rounded-full mt-1" />
      )}
    </View>
  );
}