import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

type ChefmateHeaderProps = {
  avatarUri: string;
};

export default function ChefmateHeader({ avatarUri }: ChefmateHeaderProps) {
  return (
    <View className="px-6 py-4 flex-row items-center justify-between border-b border-[#E6ECE1] bg-[#F6FBF2]">
      <View className="flex-row items-center">
        <Feather name="menu" size={16} color="#1F7A3A" />
        <Text className="text-[#181D18] text-[20px] font-extrabold ml-4">ChefmateAI</Text>
      </View>

      <View className="h-10 w-10 rounded-full border-2 border-[#0060271A] overflow-hidden">
        <Image source={{ uri: avatarUri }} className="h-full w-full" />
      </View>
    </View>
  );
}
