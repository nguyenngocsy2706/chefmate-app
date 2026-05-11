import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";

type FamilyNutritionDetailScreenProps = {
  onFinish: () => void;
};

function PersonCard({ name, info, kcal }: { name: string; info: string; kcal: string }) {
  return (
    <View className="rounded-[28px] bg-[#F4F5F2] p-5 mt-4">
      <View className="flex-row items-center">
        <Image source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80" }} className="h-14 w-14 rounded-full" />
        <View className="ml-4"><Text className="text-[#1E2420] text-[34px] font-bold">{name}</Text><Text className="text-[#5E6660]">{info}</Text></View>
      </View>
      <View className="mt-4 flex-row gap-2">
        <View className="flex-1 rounded-full bg-[#DCE1DA] py-2 items-center"><Text>Nhỏ</Text></View>
        <View className="flex-1 rounded-full bg-[#0A7A36] py-2 items-center"><Text className="text-white">Vừa</Text></View>
        <View className="flex-1 rounded-full bg-[#DCE1DA] py-2 items-center"><Text>Lớn</Text></View>
      </View>
      <View className="mt-4 flex-row justify-between"><Text className="text-[#3E473F] font-bold">MỤC TIÊU CALO</Text><Text className="text-[#0A7A36] text-[18px] font-bold">{kcal}</Text></View>
    </View>
  );
}

export default function FamilyNutritionDetailScreen({ onFinish }: FamilyNutritionDetailScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View className={isWeb ? "bg-[#F6FBF2] w-[390px] border border-[#BFC7D3]" : "flex-1 w-full bg-[#F6FBF2]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 }}>
          <View className="flex-row items-center justify-between"><View className="flex-row items-center"><Feather name="arrow-left" size={22} color="#0A7A36" /><Text className="ml-3 text-[#0A7A36] text-[32px] font-bold">Khẩu phần & Dinh dưỡng</Text></View><Feather name="more-horizontal" size={20} color="#707670" /></View>

          <View className="mt-5 rounded-[30px] overflow-hidden bg-[#0A7A36]">
            <Image source={{ uri: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80" }} className="h-[160px] w-full opacity-45" resizeMode="cover" />
            <View className="absolute left-5 bottom-5"><Text className="text-[#C8EBCB] text-[12px] font-bold">THIẾT LẬP CÁ NHÂN</Text><Text className="text-white text-[42px] leading-[44px] font-extrabold">Chăm sóc từng thành viên</Text></View>
          </View>

          <View className="mt-6 flex-row justify-between items-center"><Text className="text-[#1D241F] text-[42px] font-bold">Thành viên gia đình</Text><View className="px-3 py-1 rounded-full bg-[#C7E3C8]"><Text className="text-[#4D8559] font-bold">3 Người</Text></View></View>

          <PersonCard name="Bố" info="Người lớn • 75kg" kcal="2,500 kcal" />
          <PersonCard name="Mẹ" info="Người lớn • 52kg" kcal="1,850 kcal" />
          <PersonCard name="Bé Bi" info="Trẻ em • 12kg" kcal="1,100 kcal" />

          <Text className="mt-6 text-[#1C231F] text-[42px] font-bold">Ghi chú đặc biệt</Text>
          <View className="mt-3 rounded-[24px] bg-[#E9EEE7] p-4">
            <TextInput placeholder="VD: Dị ứng hải sản, không ăn hành..." placeholderTextColor="#A3AAA3" multiline className="h-24 text-[16px]" />
            <View className="mt-2 flex-row gap-2"><Text className="px-3 py-1 rounded-full bg-[#F3F6F2] text-[#287446]">#Hải Sản</Text><Text className="px-3 py-1 rounded-full bg-[#F3F6F2] text-[#287446]">#Không Hành</Text><Text className="px-3 py-1 rounded-full bg-[#F3F6F2] text-[#287446]">#Ít Đường</Text></View>
          </View>
        </ScrollView>

        <View className="px-6 pb-8">
          <TouchableOpacity onPress={onFinish} className="rounded-full bg-[#0A7A36] py-5 items-center" activeOpacity={0.9}><Text className="text-white text-[18px] font-bold">Hoàn tất thiết lập</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
