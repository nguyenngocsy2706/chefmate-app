import React from "react";
import { Image, Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type FeatureIntroScreenProps = {
  onContinue: () => void;
  onSkip: () => void;
};

export default function FeatureIntroScreen({ onContinue, onSkip }: FeatureIntroScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(900, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#E8ECE8] items-center justify-center p-2" : "flex-1 bg-[#E8ECE8]"}>
      <View className={isWeb ? "w-[390px] bg-[#E8ECE8] border border-[#BFC7D3]" : "flex-1 w-full bg-[#E8ECE8]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" }} className="w-full h-[380px]" resizeMode="cover" />
        <View className="mx-6 -mt-10 rounded-[28px] bg-[#F5F6F4] p-8">
          <Text className="text-[#1E2420] text-[50px] leading-[52px] font-extrabold text-center">Khám phá hàng ngàn công thức</Text>
          <Text className="mt-4 text-[#4A534C] text-[16px] leading-8 text-center">Khơi nguồn cảm hứng nấu nướng mỗi ngày với những món ăn healthy và đầy đủ dinh dưỡng.</Text>
          <View className="mt-5 items-center"><View className="h-2 w-16 bg-[#0A7A36] rounded-full" /></View>
          <TouchableOpacity onPress={onContinue} className="mt-8 rounded-full bg-[#2F8A35] py-4 items-center" activeOpacity={0.9}><Text className="text-white text-[18px] font-bold">Tiếp tục →</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onSkip} className="mt-8 items-center"><Text className="text-[#4A534C] text-[16px]">Bỏ qua</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
