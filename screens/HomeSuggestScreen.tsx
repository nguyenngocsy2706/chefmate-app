import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type HomeSuggestScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onOpenDiet: () => void;
  onOpenGoal: () => void;
  onOpenCategory: () => void;
  onOpenTrending: () => void;
  onOpenSearch: () => void;
  onOpenVoice: () => void;
  onOpenAI: () => void;
};

export default function HomeSuggestScreen(props: HomeSuggestScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#ECEFED] items-center justify-center p-2" : "flex-1 bg-[#ECEFED]"}>
      <View className={isWeb ? "w-[390px] bg-[#ECEFED] border border-[#BFC7D3]" : "flex-1 w-full bg-[#ECEFED]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 170 }}>
          <View className="flex-row items-center justify-between"><Text className="text-[#0A7A36] text-[16px]">CHEF'S ATELIER</Text><Feather name="bell" size={20} color="#0A7A36" /></View>
          <Text className="text-[#0A7A36] text-[34px] font-bold mt-1">Chào buổi sáng, Chef!</Text>

          <TouchableOpacity onPress={props.onOpenSearch} className="mt-4 rounded-full bg-[#DDE2DC] px-5 py-4 flex-row items-center"><Feather name="search" size={20} color="#5C655F" /><Text className="ml-3 text-[#5C655F] text-[18px]">Tìm cảm hứng nấu ăn hôm nay...</Text><TouchableOpacity onPress={props.onOpenVoice} className="ml-auto"><Feather name="mic" size={18} color="#5C655F" /></TouchableOpacity></TouchableOpacity>

          <View className="mt-6 flex-row justify-between items-center"><Text className="text-[#1E2420] text-[46px] font-extrabold">Gợi ý cho bạn</Text><TouchableOpacity onPress={props.onOpenTrending}><Text className="text-[#0A7A36] text-[20px] font-bold">Xem tất cả</Text></TouchableOpacity></View>
          <TouchableOpacity onPress={props.onOpenAI} className="mt-3 rounded-[26px] overflow-hidden"><Image source={{ uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" }} className="h-[220px] w-full" resizeMode="cover" /></TouchableOpacity>

          <View className="mt-6 flex-row gap-3">
            <TouchableOpacity onPress={props.onOpenDiet} className="flex-1 rounded-[20px] bg-[#D5E9D6] p-4"><Text className="text-[#0A7A36] text-[22px] font-bold">Chế độ ăn</Text></TouchableOpacity>
            <TouchableOpacity onPress={props.onOpenGoal} className="flex-1 rounded-[20px] bg-[#E1E6DF] p-4"><Text className="text-[#1E2420] text-[22px] font-bold">Mục tiêu</Text></TouchableOpacity>
          </View>

          <TouchableOpacity onPress={props.onOpenCategory} className="mt-4 rounded-[20px] bg-[#E1E6DF] p-5"><Text className="text-[#1E2420] text-[32px] font-bold">Danh mục món ăn</Text></TouchableOpacity>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={props.activeTab} onTabPress={props.onTabPress} showFab onFabPress={props.onOpenCategory} />
      </View>
    </SafeAreaView>
  );
}
