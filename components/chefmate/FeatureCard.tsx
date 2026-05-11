import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

export type FeatureCardItem = {
  title: string;
  description: string;
  iconBg: string;
  iconName: keyof typeof Feather.glyphMap;
  iconColor: string;
};

type FeatureCardProps = {
  item: FeatureCardItem;
};

export default function FeatureCard({ item }: FeatureCardProps) {
  return (
    <View className="bg-white rounded-[32px] p-8">
      <View
        className="h-12 w-12 rounded-full items-center justify-center"
        style={{ backgroundColor: item.iconBg }}
      >
        <Feather name={item.iconName} size={16} color={item.iconColor} />
      </View>

      <Text className="mt-4 text-[#181D18] text-[18px] leading-7 font-bold">{item.title}</Text>
      <Text className="mt-1 text-[#3F493F] text-[14px] leading-[22px]">{item.description}</Text>
    </View>
  );
}
