import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type DietModeScreenProps = { activeTab: string; onTabPress: (tab: string) => void; onContinue: () => void; };

export default function DietModeScreen({ activeTab, onTabPress, onContinue }: DietModeScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return <SafeAreaView className={isWeb?"flex-1 bg-[#ECEFED] items-center justify-center p-2":"flex-1 bg-[#ECEFED]"}><View className={isWeb?"w-[390px] bg-[#ECEFED] border border-[#BFC7D3]":"flex-1 w-full bg-[#ECEFED]"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><View className="px-6 pt-6 flex-row items-center"><Feather name="arrow-left" size={22} color="#0A7A36" /><Text className="ml-4 text-[#0A7A36] text-[34px] font-bold">Chế độ ăn</Text></View><View className="px-6 mt-6"><Text className="text-[#1E2420] text-[56px] leading-[58px] font-extrabold">Hành trình Sức khỏe bắt đầu từ đây.</Text><Text className="mt-4 text-[#4A534C] text-[17px] leading-8">Chọn chế độ ăn phù hợp với lối sống của bạn.</Text><View className="mt-8 gap-3"><View className="rounded-[24px] bg-[#DDE3DA] p-6"><Text className="text-[34px] font-bold">Vegan</Text></View><View className="rounded-[24px] bg-[#DDE3DA] p-6"><Text className="text-[34px] font-bold">Keto</Text></View><View className="rounded-[24px] bg-[#F2F4F1] p-6 border border-[#0A7A36]"><Text className="text-[34px] font-bold text-[#0A7A36]">Eat Clean</Text></View></View><TouchableOpacity onPress={onContinue} className="mt-8 rounded-full bg-[#0A7A36] py-5 items-center"><Text className="text-white text-[18px] font-bold">Tiếp tục hành trình</Text></TouchableOpacity></View><BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} /></View></SafeAreaView>;
}
