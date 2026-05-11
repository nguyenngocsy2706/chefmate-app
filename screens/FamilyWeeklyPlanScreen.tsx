import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type FamilyWeeklyPlanScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onOpenMenu: () => void;
};

function FoodCard({ title, tag, kcal, onDetail }: { title: string; tag: string; kcal: string; onDetail: () => void }) {
  return (
    <View className="rounded-[30px] bg-[#F4F5F2] overflow-hidden mt-5">
      <Image source={{ uri: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80" }} className="h-[180px] w-full" resizeMode="cover" />
      <View className="p-5">
        <Text className="text-[#1D231F] text-[42px] leading-[44px] font-bold">{title}</Text>
        <Text className="text-[#5C655F] mt-1">👥 3 Người lớn, 1 Trẻ em</Text>
        <View className="mt-3 flex-row gap-2"><Text className="px-3 py-1 rounded-full bg-[#CBE9CC] text-[#2D7A44] text-[12px]">{tag}</Text><Text className="px-3 py-1 rounded-full bg-[#DDE3DA] text-[#5A625B] text-[12px]">Giàu đạm</Text></View>
        <View className="mt-4 border-t border-[#E1E6DF] pt-4 flex-row justify-between items-center"><Text className="text-[#1F2521] text-[24px] font-bold">⚡ {kcal}</Text><TouchableOpacity onPress={onDetail} className="rounded-full bg-[#0A7A36] px-5 py-2"><Text className="text-white font-bold">Chi tiết</Text></TouchableOpacity></View>
      </View>
    </View>
  );
}

export default function FamilyWeeklyPlanScreen({ activeTab, onTabPress, onOpenMenu }: FamilyWeeklyPlanScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View className={isWeb ? "bg-[#F6FBF2] w-[390px] border border-[#BFC7D3]" : "flex-1 w-full bg-[#F6FBF2]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 160 }}>
          <Text className="text-[#1C231F] text-[52px] leading-[54px] font-extrabold">Kế hoạch Tuần này</Text>
          <Text className="text-[#4E574F] text-[18px] mt-1">Tháng 10, 2023</Text>

          <View className="mt-4 flex-row gap-3">
            {[16,17,18,19,20,21].map((d,i)=><View key={d} className={`h-20 w-14 rounded-[24px] items-center justify-center ${i===2?'bg-[#0A7A36]':'bg-[#E4E9E2]'}`}><Text className={`text-[10px] font-bold ${i===2?'text-white':'text-[#636B64]'}`}>TH {i+2}</Text><Text className={`text-[30px] font-bold ${i===2?'text-white':'text-[#2A302B]'}`}>{d}</Text></View>)}
          </View>

          <Text className="mt-7 text-[#1E2420] text-[40px] font-bold">🍴 Thực đơn hôm nay</Text>

          <FoodCard title="Phở bò truyền thống" tag="Phù hợp cho bé" kcal="320 kcal / người" onDetail={onOpenMenu} />
          <FoodCard title="Cơm gà Hội An" tag="Ít tinh bột" kcal="45 phút" onDetail={onOpenMenu} />
          <FoodCard title="Salad Cá hồi Nướng" tag="Ít Calo" kcal="320 kcal / người" onDetail={onOpenMenu} />

          <View className="mt-5 flex-row gap-3"><View className="flex-1 rounded-[24px] bg-[#CDE5CC] p-4"><Text className="text-[#4E6E52]">DINH DƯỠNG</Text><Text className="text-[#1B211C] text-[30px] font-bold">85% Mục tiêu</Text></View><View className="flex-1 rounded-[24px] bg-[#DDE3DA] p-4"><Text className="text-[#6A746B]">NGUYÊN LIỆU</Text><Text className="text-[#1B211C] text-[30px] font-bold">12 Cần mua</Text></View></View>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} showFab onFabPress={onOpenMenu} />
      </View>
    </SafeAreaView>
  );
}
