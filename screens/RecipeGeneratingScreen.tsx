import React, { useEffect } from "react";
import { Platform, SafeAreaView, Text, View, useWindowDimensions } from "react-native";

type RecipeGeneratingScreenProps = { onDone: () => void; };

export default function RecipeGeneratingScreen({ onDone }: RecipeGeneratingScreenProps) {
  const isWeb = Platform.OS === "web"; const { height } = useWindowDimensions(); const webFrameHeight = Math.min(930, Math.max(760, height - 20));
  useEffect(() => { const t = setTimeout(onDone, 1600); return () => clearTimeout(t); }, [onDone]);
  return <SafeAreaView className={isWeb?"flex-1 bg-[#E8F2E7] items-center justify-center p-2":"flex-1 bg-[#E8F2E7]"}><View className={isWeb?"w-[390px] bg-[#E8F2E7] border border-[#BFC7D3]":"flex-1 w-full bg-[#E8F2E7]"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><View className="flex-1 px-8 items-center justify-center"><View className="h-[220px] w-[220px] rounded-full border border-[#B7D1B8] items-center justify-center"><View className="h-[100px] w-[100px] rounded-full bg-[#0A7A36] items-center justify-center"><Text className="text-white text-[40px]">✦</Text></View></View><Text className="mt-10 text-[#1E2420] text-[54px] text-center font-extrabold">Đang sáng tạo công thức...</Text><Text className="mt-3 text-[#4A534C] text-center">Chef AI đang kết hợp hương vị cho bạn</Text><View className="mt-8 h-1.5 w-full rounded-full bg-[#DDE3DA]"><View className="h-full w-[66%] bg-[#0A7A36] rounded-full" /></View></View></View></SafeAreaView>;
}
