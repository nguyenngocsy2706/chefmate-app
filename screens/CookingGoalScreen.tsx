import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type CookingGoalScreenProps = { onContinue: () => void; };

export default function CookingGoalScreen({ onContinue }: CookingGoalScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return <SafeAreaView className={isWeb?"flex-1 bg-[#ECEFED] items-center justify-center p-2":"flex-1 bg-[#ECEFED]"}><View className={isWeb?"w-[390px] bg-[#ECEFED] border border-[#BFC7D3]":"flex-1 w-full bg-[#ECEFED]"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><View className="px-6 pt-6 flex-row items-center"><Feather name="arrow-left" size={22} color="#0A7A36" /><Text className="ml-4 text-[#0A7A36] text-[34px] font-bold">Mục tiêu của bạn</Text></View><View className="px-6 mt-6"><Text className="text-[#1E2420] text-[56px] leading-[58px] font-extrabold">Bắt đầu hành trình vị giác của bạn.</Text><Text className="mt-3 text-[#4A534C] text-[17px] leading-8">Hãy cho chúng tôi biết bạn đang tìm kiếm điều gì.</Text><View className="mt-8 gap-4"><View className="rounded-[26px] border-2 border-[#0A7A36] bg-[#F4F5F2] p-6"><Text className="text-[#1E2420] text-[40px] font-bold">Giảm cân</Text><Text className="text-[#4A534C] mt-2">Các công thức tính toán calories chính xác.</Text></View><View className="rounded-[26px] bg-[#F4F5F2] p-6"><Text className="text-[#1E2420] text-[40px] font-bold">Healthy</Text></View><View className="rounded-[26px] bg-[#F4F5F2] p-6"><Text className="text-[#1E2420] text-[40px] font-bold">Nhanh gọn</Text></View></View><TouchableOpacity onPress={onContinue} className="mt-8 rounded-full bg-[#0A7A36] py-5 items-center"><Text className="text-white text-[18px] font-bold">Tiếp tục</Text></TouchableOpacity></View></View></SafeAreaView>;
}
