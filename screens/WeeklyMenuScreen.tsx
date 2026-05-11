import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, Text, View, useWindowDimensions } from "react-native";

type WeeklyMenuScreenProps = {};

function MealItem({ title, tag, meta }: { title: string; tag: string; meta: string }) {
  return (
    <View className="rounded-[26px] bg-[#F4F5F2] p-4 mt-4 flex-row items-center">
      <Image source={{ uri: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=300&q=80" }} className="h-24 w-24 rounded-[18px]" />
      <View className="ml-4 flex-1">
        <Text className="px-3 py-1 self-start rounded-full bg-[#CBE9CC] text-[#2D7A44] text-[11px]">{tag}</Text>
        <Text className="mt-2 text-[#1E2420] text-[18px] font-bold">{title}</Text>
        <Text className="mt-1 text-[#6A726C]">{meta}</Text>
      </View>
      <Feather name="more-vertical" size={18} color="#9BA39C" />
    </View>
  );
}

export default function WeeklyMenuScreen({}: WeeklyMenuScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(920, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View className={isWeb ? "bg-[#F6FBF2] w-[390px] border border-[#BFC7D3]" : "flex-1 w-full bg-[#F6FBF2]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <View className="px-6 pt-6 flex-row items-center justify-between"><View className="flex-row items-center"><Feather name="menu" size={18} color="#0A7A36" /><Text className="ml-3 text-[#1E2420] text-[38px] font-bold">Lịch trình tuần</Text></View></View>
        <Text className="px-6 text-[#808980]">15 Th05 - 21 Th05, 2024</Text>

        <View className="px-6 mt-4 flex-row gap-3">{[15,16,17,18,19].map((d,i)=><View key={d} className={`h-[72px] w-[56px] rounded-[22px] items-center justify-center ${i===1?'bg-[#0A7A36]':'bg-[#E4E9E2]'}`}><Text className={`font-bold ${i===1?'text-white':'text-[#5F675F]'}`}>T{i+2}</Text><Text className={`text-[30px] font-bold ${i===1?'text-white':'text-[#2A302B]'}`}>{d}</Text></View>)}</View>

        <View className="px-6 mt-6">
          <View className="flex-row justify-between"><Text className="text-[#1E2420] text-[36px] font-bold">☀ Bữa sáng</Text><Text className="text-[#0A7A36] text-[18px] font-bold">450 kcal</Text></View>
          <MealItem title="Súp yến mạch" tag="THUẦN CHAY" meta="10 phút • Dễ" />

          <View className="flex-row justify-between mt-5"><Text className="text-[#1E2420] text-[36px] font-bold">☀ Bữa trưa</Text><Text className="text-[#0A7A36] text-[18px] font-bold">620 kcal</Text></View>
          <MealItem title="Salad Quinoa & Cá hồi nướng" tag="GIÀU PROTEIN" meta="25 phút • Trung bình" />

          <View className="flex-row justify-between mt-5"><Text className="text-[#1E2420] text-[36px] font-bold">☾ Bữa tối</Text><Text className="text-[#0A7A36] text-[18px] font-bold">540 kcal</Text></View>
          <MealItem title="Mì bí ngò sốt Pesto hạt điều" tag="ÍT TINH BỘT" meta="20 phút • Dễ" />
        </View>
      </View>
    </SafeAreaView>
  );
}
