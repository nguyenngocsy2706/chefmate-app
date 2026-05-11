import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type AIPlanningScreenProps = {
  onContinue: () => void;
};

function StepRow({ title, progress, done }: { title: string; progress: number; done?: boolean }) {
  return (
    <View className={`rounded-[24px] p-5 ${done ? "bg-[#F4F5F2]" : "bg-[#F4F5F2]"}`}>
      <View className="flex-row items-center">
        <View className={`h-8 w-8 rounded-full items-center justify-center ${done ? "bg-[#0A7A36]" : "bg-[#C8D3C8]"}`}>
          <Feather name={done ? "check" : "refresh-cw"} size={16} color={done ? "#fff" : "#0A7A36"} />
        </View>
        <Text className={`ml-4 text-[18px] font-bold ${done ? "text-[#1E2420]" : "text-[#2F3531]"}`}>{title}</Text>
      </View>
      <View className="mt-3 h-1.5 rounded-full bg-[#E3E7E1] overflow-hidden">
        <View style={{ width: `${progress}%` }} className="h-full bg-[#0A7A36]" />
      </View>
    </View>
  );
}

export default function AIPlanningScreen({ onContinue }: AIPlanningScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(900, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View
        className={isWeb ? "bg-[#F6FBF2] relative w-[390px] border border-[#BFC7D3] shadow-2xl" : "flex-1 w-full bg-[#F6FBF2]"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <View className="px-6 pt-12">
          <View className="items-center">
            <View className="h-[180px] w-[180px] rounded-full border-4 border-dashed border-[#C8D6CB] items-center justify-center bg-white">
              <View className="h-[130px] w-[130px] rounded-full bg-[#0A7A36] items-center justify-center">
                <Feather name="star" size={36} color="#fff" />
              </View>
            </View>
          </View>

          <Text className="mt-10 text-[#18201B] text-[44px] leading-[48px] text-center font-extrabold">Đang tạo thực đơn riêng cho bạn...</Text>
          <Text className="mt-4 text-[#4C554E] text-[16px] leading-8 text-center">AI đang phân tích sở thích và nhu cầu dinh dưỡng để tối ưu hóa thực đơn 7 ngày.</Text>

          <View className="mt-10 gap-4">
            <StepRow title="Phân tích thói quen ăn uống..." progress={100} done />
            <StepRow title="Cân bằng dinh dưỡng..." progress={65} />
            <StepRow title="Lựa chọn nguyên liệu tươi sạch..." progress={0} />
          </View>

          <View className="mt-10 flex-row gap-4">
            <View className="flex-1 rounded-[24px] bg-[#F0F3EE] p-5 items-center">
              <Text className="text-[#0A7A36] text-[42px] font-bold">2,400</Text>
              <Text className="text-[#4A534C] text-[14px] font-bold">KCAL/NGÀY</Text>
            </View>
            <View className="flex-1 rounded-[24px] bg-[#F0F3EE] p-5 items-center">
              <Text className="text-[#0A7A36] text-[42px] font-bold">7</Text>
              <Text className="text-[#4A534C] text-[14px] font-bold">NGÀY DỰ KIẾN</Text>
            </View>
          </View>

          <TouchableOpacity onPress={onContinue} activeOpacity={0.9} className="mt-8 rounded-full bg-[#0A7A36] py-4 items-center">
            <Text className="text-white text-[18px] font-bold">Xem kết quả</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
