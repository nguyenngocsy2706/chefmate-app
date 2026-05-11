import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type VoiceScreenProps = { onClose: () => void; };

export default function VoiceScreen({ onClose }: VoiceScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));
  return <SafeAreaView className={isWeb?"flex-1 bg-[#ECEFED] items-center justify-center p-2":"flex-1 bg-[#ECEFED]"}><View className={isWeb?"w-[390px] bg-[#ECEFED] border border-[#BFC7D3] items-center justify-center":"flex-1 w-full bg-[#ECEFED] items-center justify-center"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><TouchableOpacity onPress={onClose} className="absolute right-6 top-6 h-10 w-10 rounded-full bg-[#DCE2DB] items-center justify-center"><Feather name="x" size={20} /></TouchableOpacity><View className="h-[280px] w-[280px] rounded-full border border-[#C5D5C5] items-center justify-center"><View className="h-[120px] w-[120px] rounded-full bg-[#0A7A36] items-center justify-center"><Feather name="mic" size={40} color="#fff" /></View></View><Text className="mt-10 text-[#1E2420] text-[52px] font-extrabold">Tôi đang lắng nghe...</Text><Text className="mt-3 text-[#4A534C] text-[20px]">Bạn muốn nấu gì hôm nay?</Text></View></SafeAreaView>;
}
