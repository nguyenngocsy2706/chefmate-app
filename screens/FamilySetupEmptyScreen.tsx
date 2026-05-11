import React from "react";
import { Feather } from "@expo/vector-icons";
import { Platform, SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type FamilySetupEmptyScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onAddMember: () => void;
};

export default function FamilySetupEmptyScreen({ activeTab, onTabPress, onAddMember }: FamilySetupEmptyScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(920, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View
        className={isWeb ? "bg-[#F6FBF2] relative w-[390px] border border-[#BFC7D3] shadow-2xl" : "flex-1 w-full bg-[#F6FBF2]"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <View className="px-6 pt-16">
          <Text className="text-[#18201B] text-[50px] leading-[52px] font-extrabold">Thiết lập gia đình</Text>
          <Text className="text-[#3F493F] text-[18px] leading-8 mt-3">Quản lý thành viên và khẩu phần ăn cho cả nhà.</Text>

          <View className="items-center mt-14">
            <View className="h-48 w-48 rounded-full bg-[#CCE5CC] items-center justify-center">
              <Feather name="git-branch" size={42} color="#0A7A36" />
            </View>
          </View>

          <Text className="mt-10 text-center text-[#1A211C] text-[44px] leading-[46px] font-bold">Chưa có thành viên nào</Text>
          <Text className="mt-4 text-center text-[#3F493F] text-[16px] leading-8">Hãy bắt đầu thêm thành viên trong gia đình để ChefmateAI cá nhân hóa thực đơn cho cả nhà.</Text>

          <TouchableOpacity onPress={onAddMember} activeOpacity={0.9} className="mt-7 rounded-full bg-[#0A7A36] py-5 items-center">
            <Text className="text-white text-[18px] font-bold">+  Thêm thành viên</Text>
          </TouchableOpacity>

          <View className="mt-12 rounded-[30px] bg-[#EEF2EB] p-6">
            <Text className="text-[#19201B] text-[44px] leading-[46px] font-bold">Khẩu phần ăn mặc định</Text>
            <Text className="mt-3 text-[#3F493F] text-[16px] leading-7">Hệ thống sẽ tự động điều chỉnh nguyên liệu dựa trên số lượng thành viên này.</Text>

            <View className="mt-4 rounded-[26px] bg-[#F6F6F5] p-4">
              <View className="flex-row items-center justify-between">
                <Text className="text-[#202622] text-[16px] font-bold">Người lớn</Text>
                <View className="flex-row items-center gap-4">
                  <View className="h-10 w-10 rounded-full bg-[#D9DED8] items-center justify-center"><Text className="text-[22px]">-</Text></View>
                  <Text className="text-[#0A7A36] text-[34px] font-bold">0</Text>
                  <View className="h-10 w-10 rounded-full bg-[#0A7A36] items-center justify-center"><Text className="text-white text-[22px]">+</Text></View>
                </View>
              </View>
              <View className="mt-4 flex-row items-center justify-between">
                <Text className="text-[#202622] text-[16px] font-bold">Trẻ em</Text>
                <View className="flex-row items-center gap-4">
                  <View className="h-10 w-10 rounded-full bg-[#D9DED8] items-center justify-center"><Text className="text-[22px]">-</Text></View>
                  <Text className="text-[#4F5A51] text-[34px] font-bold">0</Text>
                  <View className="h-10 w-10 rounded-full bg-[#4E6F52] items-center justify-center"><Text className="text-white text-[22px]">+</Text></View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}
