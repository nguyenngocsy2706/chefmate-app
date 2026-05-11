import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";

type AddFamilyMemberScreenProps = {
  onSave: () => void;
};

export default function AddFamilyMemberScreen({ onSave }: AddFamilyMemberScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(920, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View className={isWeb ? "bg-[#F6FBF2] w-[390px] border border-[#BFC7D3]" : "flex-1 w-full bg-[#F6FBF2]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <View className="px-6 pt-8 flex-row items-center">
          <Feather name="arrow-left" size={22} color="#0A7A36" />
          <Text className="ml-4 text-[#0A7A36] text-[32px] font-bold">Thêm thành viên</Text>
        </View>

        <View className="px-6 pt-10">
          <View className="items-center">
            <View className="h-24 w-24 rounded-full bg-[#E8EEE6] items-center justify-center"><Feather name="award" size={36} color="#0A7A36" /></View>
          </View>

          <Text className="mt-8 text-[#1C231F] text-[42px] font-bold">Thông tin cơ bản</Text>
          <Text className="mt-4 text-[#3F493F] text-[16px]">Họ và tên</Text>
          <TextInput placeholder="Nhập tên thành viên" placeholderTextColor="#A4ABA5" className="mt-2 rounded-[20px] bg-[#EEF2EB] px-5 py-4 text-[16px]" />

          <View className="mt-4 flex-row gap-4">
            <View className="flex-1">
              <Text className="text-[#3F493F] text-[16px]">Đối tượng</Text>
              <View className="mt-2 rounded-full bg-[#E3E8E0] p-1 flex-row">
                <View className="flex-1 rounded-full bg-[#F4F5F2] py-2 items-center"><Text className="text-[#0A7A36] font-bold">Người lớn</Text></View>
                <View className="flex-1 py-2 items-center"><Text className="text-[#4E574F] font-bold">Trẻ em</Text></View>
              </View>
            </View>
            <View className="w-[120px]">
              <Text className="text-[#3F493F] text-[16px]">Tuổi</Text>
              <View className="mt-2 rounded-[20px] bg-[#E9EEE7] py-3 items-center"><Text className="text-[#8D938E] text-[24px]">-</Text></View>
            </View>
          </View>

          <View className="mt-6 flex-row justify-between items-center">
            <Text className="text-[#1C231F] text-[42px] font-bold">Chế độ ăn uống</Text>
            <Text className="text-[#5A9D73] text-[14px] font-bold">TÙY CHỌN</Text>
          </View>

          <View className="mt-4 flex-row flex-wrap gap-3">
            {['Ăn kiêng','Dị ứng','Ít tinh bột','Chay','Gym/Tăng cơ'].map((x,i)=>(
              <View key={x} className={`px-5 py-3 rounded-full ${i===1?'bg-[#BCE5BE]':'bg-[#DDE3DA]'}`}><Text className={`font-bold ${i===1?'text-[#1F6B37]':'text-[#4B534D]'}`}>{x}</Text></View>
            ))}
          </View>

          <View className="mt-6 rounded-[24px] bg-[#E9EEE7] p-5 flex-row">
            <Feather name="info" size={18} color="#71A07A" />
            <Text className="ml-3 flex-1 text-[#4A534C] leading-7">ChefmateAI sẽ tối ưu công thức nấu ăn dựa trên các lựa chọn này.</Text>
          </View>
        </View>

        <View className="px-6 mt-auto pb-8">
          <TouchableOpacity onPress={onSave} className="rounded-full bg-[#0A7A36] py-5 items-center" activeOpacity={0.9}>
            <Text className="text-white text-[18px] font-bold">Lưu thành viên</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
