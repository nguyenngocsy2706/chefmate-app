import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type FoodCategoryScreenProps = { onOpenTrending: () => void; };

export default function FoodCategoryScreen({ onOpenTrending }: FoodCategoryScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));
  return <SafeAreaView className={isWeb?"flex-1 bg-[#ECEFED] items-center justify-center p-2":"flex-1 bg-[#ECEFED]"}><View className={isWeb?"w-[390px] bg-[#ECEFED] border border-[#BFC7D3]":"flex-1 w-full bg-[#ECEFED]"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><ScrollView contentContainerStyle={{padding:20,paddingBottom:40}}><View className="flex-row items-center justify-between"><Feather name="arrow-left" size={20} color="#0A7A36" /><Text className="text-[#0A7A36] text-[32px] font-bold">Đơn hàng</Text><Feather name="bell" size={18} color="#0A7A36" /></View><Text className="mt-6 text-[#2F8A35] text-[64px] leading-[66px] font-extrabold">Khám phá Mỹ vị</Text><Text className="mt-2 text-[#4A534C]">Hành trình ẩm thực bắt đầu từ nguyên liệu tươi ngon nhất.</Text><View className="mt-6 flex-row gap-3"><View className="flex-1 rounded-[22px] bg-[#F4F5F2] p-4"><Text className="text-[34px] font-bold">Món sáng</Text></View><View className="flex-1 rounded-[22px] bg-[#E2E7DF] p-4"><Text className="text-[34px] font-bold">Bữa trưa</Text></View></View><TouchableOpacity onPress={onOpenTrending} className="mt-4 rounded-[28px] bg-[#2F8A35] p-5"><Text className="text-white text-[44px] font-extrabold">Bữa tối</Text><Image source={{uri:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"}} className="w-full h-[120px] rounded-[20px] mt-4" /></TouchableOpacity></ScrollView></View></SafeAreaView>;
}
