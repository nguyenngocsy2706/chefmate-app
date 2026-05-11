import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type ScanEmptyScreenProps = { activeTab: string; onTabPress: (tab: string) => void; onRetry: () => void; onManual: () => void; };

export default function ScanEmptyScreen({ activeTab, onTabPress, onRetry, onManual }: ScanEmptyScreenProps) {
  const isWeb = Platform.OS === "web"; const { height } = useWindowDimensions(); const webFrameHeight = Math.min(930, Math.max(760, height - 20));
  return <SafeAreaView className={isWeb?"flex-1 bg-[#ECF2EB] items-center justify-center p-2":"flex-1 bg-[#ECF2EB]"}><View className={isWeb?"w-[390px] bg-[#ECF2EB] border border-[#BFC7D3]":"flex-1 w-full bg-[#ECF2EB]"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><View className="px-6 pt-6 flex-row items-center"><Feather name="arrow-left" size={20} color="#0A7A36" /><Text className="ml-4 text-[#0A7A36] text-[32px] font-bold">Quét nguyên liệu</Text></View><View className="px-6 mt-20 items-center"><View className="h-32 w-32 rounded-full bg-[#E3ECE1] items-center justify-center"><Feather name="package" size={40} color="#9AA59B" /></View><Text className="mt-8 text-[#1F2621] text-[48px] leading-[50px] font-extrabold text-center">Không tìm thấy nguyên liệu</Text><Text className="mt-4 text-[#59635B] text-center leading-7">Hãy thử chụp lại dưới ánh sáng tốt hơn hoặc nhập thủ công.</Text><TouchableOpacity onPress={onRetry} className="mt-6 w-full rounded-full bg-[#0A7A36] py-4 items-center"><Text className="text-white font-bold">↻ Thử lại</Text></TouchableOpacity><TouchableOpacity onPress={onManual} className="mt-3 w-full rounded-full bg-[#BFE2BC] py-4 items-center"><Text className="text-[#2E7142] font-bold">Nhập tay</Text></TouchableOpacity></View><BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} /></View></SafeAreaView>;
}
