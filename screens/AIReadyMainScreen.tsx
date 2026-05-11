import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type AIReadyMainScreenProps = {
  onApply: () => void;
};

export default function AIReadyMainScreen({ onApply }: AIReadyMainScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#111613] items-center justify-center p-2" : "flex-1 bg-[#111613]"}>
      <View
        className={isWeb ? "bg-[#111613] relative w-[390px] border border-[#202A24] shadow-2xl" : "flex-1 w-full bg-[#111613]"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 28, paddingBottom: 60 }}>
          <View className="self-start bg-[#0A7A36] rounded-full px-4 py-2 flex-row items-center">
            <Feather name="star" size={12} color="#C8EBCB" />
            <Text className="ml-2 text-[#C8EBCB] text-[11px] font-bold uppercase">AI đã hoàn thành</Text>
          </View>

          <Text className="mt-5 text-[#F4F8F5] text-[52px] leading-[56px] font-extrabold">Thực đơn AI đã sẵn sàng!</Text>
          <Text className="mt-4 text-[#C2CBC4] text-[17px] leading-8">Dựa trên sở thích của bạn, đây là thực đơn tối ưu cho tuần tới. Chúng tôi đã cân bằng dinh dưỡng và tiết kiệm thời gian chuẩn bị.</Text>

          <View className="mt-6 rounded-[34px] overflow-hidden bg-[#F5F6F4]">
            <Image source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" }} className="h-[220px] w-full" resizeMode="cover" />
            <View className="p-5">
              <View className="flex-row justify-between">
                <Text className="text-[#0A7A36] text-[12px] font-bold">SÁNG</Text>
                <Text className="text-[#0A7A36] text-[12px] font-bold">TRƯA</Text>
                <Text className="text-[#0A7A36] text-[12px] font-bold">TỐI</Text>
              </View>
              <View className="mt-3 flex-row justify-between">
                <Text className="text-[#1F2521] text-[16px] font-bold w-[92px]">Bánh mì bơ trứng</Text>
                <Text className="text-[#1F2521] text-[16px] font-bold w-[92px]">Cá hồi áp chảo</Text>
                <Text className="text-[#1F2521] text-[16px] font-bold w-[92px]">Bowl Quinoa</Text>
              </View>
              <View className="mt-4 border-t border-[#E2E6E1] pt-4 flex-row justify-between items-center">
                <Text className="text-[#1F2521] text-[26px] font-bold">🔥 1,850 kcal / ngày</Text>
                <Text className="text-[#0A7A36] text-[22px] font-bold">Chi tiết →</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={onApply} className="mt-8 rounded-full bg-[#0A7A36] py-4 items-center" activeOpacity={0.9}>
            <Text className="text-white text-[18px] font-bold">Áp dụng thực đơn</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
