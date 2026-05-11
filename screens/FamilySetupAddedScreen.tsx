import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type FamilySetupAddedScreenProps = {
  onContinue: () => void;
  onAddMember: () => void;
};

function MemberCard({ name, tag, age, image }: { name: string; tag: string; age: string; image: string }) {
  return (
    <View className="rounded-[28px] bg-[#F4F5F2] p-5 mt-4 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Image source={{ uri: image }} className="h-16 w-16 rounded-full" />
        <View className="ml-4">
          <Text className="text-[#1F2621] text-[34px] font-bold">{name}</Text>
          <View className="flex-row gap-2 mt-1">
            <View className="px-3 py-1 rounded-full bg-[#D8DED7]"><Text className="text-[#4B534D] text-[12px] font-bold">{age}</Text></View>
            <View className="px-3 py-1 rounded-full bg-[#CBE9CC]"><Text className="text-[#2E7142] text-[12px] font-bold">{tag}</Text></View>
          </View>
        </View>
      </View>
      <Feather name="edit-2" size={18} color="#A0ABA1" />
    </View>
  );
}

export default function FamilySetupAddedScreen({ onContinue, onAddMember }: FamilySetupAddedScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View className={isWeb ? "bg-[#F6FBF2] w-[390px] border border-[#BFC7D3]" : "flex-1 w-full bg-[#F6FBF2]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 }}>
          <View className="flex-row items-center"><Feather name="arrow-left" size={22} color="#0A7A36" /><Text className="ml-4 text-[#0A7A36] text-[36px] font-bold">Chỉnh sửa thành viên</Text></View>

          <Text className="mt-8 text-[#1A211C] text-[52px] leading-[54px] font-extrabold">Thành viên gia đình</Text>
          <Text className="mt-3 text-[#3F493F] text-[17px] leading-8">Thiết lập hồ sơ cho mọi người để ChefmateAI gợi ý thực đơn phù hợp nhất.</Text>

          <MemberCard name="Bố" age="35 TUỔI" tag="ĂN KIÊNG" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" />
          <MemberCard name="Mẹ" age="32 TUỔI" tag="ĂN CHAY" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" />
          <MemberCard name="Bé Bi" age="5 TUỔI" tag="TRẺ EM" image="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80" />

          <TouchableOpacity onPress={onAddMember} className="mt-4 rounded-[26px] border border-dashed border-[#B6C5B7] py-6 items-center" activeOpacity={0.9}>
            <Feather name="user-plus" size={22} color="#7D8A7E" />
            <Text className="mt-2 text-[#6E786E] font-bold tracking-[1px]">THÊM THÀNH VIÊN</Text>
          </TouchableOpacity>

          <View className="mt-6 rounded-[28px] bg-[#EEF2EB] p-5">
            <Text className="text-[#1A211C] text-[42px] font-bold">Khẩu phần ăn mặc định</Text>
            <View className="mt-4 rounded-[24px] bg-[#F6F6F5] p-4">
              <View className="flex-row items-center justify-between">
                <Text className="text-[30px] font-bold text-[#1E2420]">Người lớn</Text>
                <View className="flex-row items-center gap-4"><Text className="text-[24px]">-</Text><Text className="text-[34px] font-bold">2</Text><Text className="text-[24px]">+</Text></View>
              </View>
              <View className="mt-4 flex-row items-center justify-between">
                <Text className="text-[30px] font-bold text-[#1E2420]">Trẻ em</Text>
                <View className="flex-row items-center gap-4"><Text className="text-[24px]">-</Text><Text className="text-[34px] font-bold">1</Text><Text className="text-[24px]">+</Text></View>
              </View>
              <Text className="mt-4 text-[#6A736C] text-center">Khẩu phần này sẽ được dùng để tự động tính toán lượng nguyên liệu cần mua.</Text>
            </View>
          </View>
        </ScrollView>

        <View className="px-6 pb-8">
          <TouchableOpacity onPress={onContinue} className="rounded-full bg-[#0A7A36] py-5 items-center" activeOpacity={0.9}>
            <Text className="text-white text-[18px] font-bold">Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
