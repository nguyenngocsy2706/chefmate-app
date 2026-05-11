import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform, Pressable, Text, View } from "react-native";

type BottomNavBarProps = {
  tabs: string[];
  activeTab: string;
  onTabPress?: (tab: string) => void;
  showFab?: boolean;
  onFabPress?: () => void;
};

function TabIcon({ tab, color }: { tab: string; color: string }) {
  if (tab === "DISCOVER") return <Feather name="compass" size={16} color={color} />;
  if (tab === "SCAN") return <MaterialCommunityIcons name="line-scan" size={16} color={color} />;
  if (tab === "PLANNER") return <Feather name="calendar" size={16} color={color} />;
  if (tab === "ORDERS") return <Feather name="truck" size={16} color={color} />;
  return <Feather name="user" size={16} color={color} />;
}

function getLabel(tab: string) {
  if (tab === "PLANNER") return "CHEF";
  return tab;
}

export default function BottomNavBar({ tabs, activeTab, onTabPress, showFab = false, onFabPress }: BottomNavBarProps) {
  const bottomPadding = Platform.OS === "ios" ? 26 : 14;

  return (
    <View className="absolute left-0 right-0 z-20" style={{ bottom: 0 }} pointerEvents="box-none">
      {showFab ? (
        <Pressable
          className="absolute right-6 z-30 h-14 w-14 rounded-full items-center justify-center"
          style={{ bottom: bottomPadding + 54, backgroundColor: "#0A7A36" }}
          onPress={onFabPress}
        >
          <Feather name="plus" size={30} color="#FFFFFF" />
        </Pressable>
      ) : null}

      <View
        className="rounded-t-[32px] px-7 pt-3 flex-row items-start justify-between shadow-2xl"
        style={{
          backgroundColor: "rgba(250, 249, 246, 0.95)",
          paddingBottom: bottomPadding,
        }}
      >
        {tabs.map((tab) => {
          const active = tab === activeTab;
          const color = active ? "#006027" : "rgba(26,28,26,0.6)";

          return (
            <Pressable key={tab} className="items-center min-w-[52px]" onPress={() => onTabPress?.(tab)}>
              <TabIcon tab={tab} color={color} />
              <Text className="text-[10px] tracking-[1px] mt-1 font-semibold" style={{ color }}>
                {getLabel(tab)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
