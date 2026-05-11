import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";
import ChefmateHeader from "../components/chefmate/ChefmateHeader";

const avatarImage =
  "https://www.figma.com/api/mcp/asset/179e4ead-8c60-4eec-aec9-8967c01d9b7c";
const saladImage =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

const days = [
  [25, 26, 27, 28, 29, 30, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
];

type MealPlanCalendarScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onOpenWeekly: () => void;
};

export default function MealPlanCalendarScreen({ activeTab, onTabPress, onOpenWeekly }: MealPlanCalendarScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(900, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View
        className={isWeb ? "bg-[#F6FBF2] relative w-[390px] border border-[#BFC7D3] shadow-2xl" : "flex-1 w-full bg-[#F6FBF2] relative"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <ChefmateHeader avatarUri={avatarImage} />

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 14, paddingBottom: 140 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-[#1B211D] text-[45px] leading-[48px] font-extrabold">Lập kế hoạch ăn uống</Text>
          <Text className="text-[#4C564E] text-[15px] mt-1">Chào buổi sáng, tối nay bạn muốn ăn gì?</Text>

          <View className="mt-6 bg-[#F1F4EE] rounded-[24px] p-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[#2E332F] text-[29px] font-bold">Tháng 10, 2023</Text>
                <Text className="text-[#0A7A36] text-[12px] font-bold uppercase mt-0.5">Lịch trình của tôi</Text>
              </View>
              <View className="flex-row gap-2">
                <View className="h-8 w-8 rounded-full bg-[#E4E9E0] items-center justify-center">
                  <Feather name="chevron-left" size={16} color="#798078" />
                </View>
                <View className="h-8 w-8 rounded-full bg-[#E4E9E0] items-center justify-center">
                  <Feather name="chevron-right" size={16} color="#798078" />
                </View>
              </View>
            </View>

            <View className="mt-5 flex-row justify-between px-2">
              {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
                <Text key={d} className={`text-[10px] font-semibold ${d === "CN" ? "text-[#AE5C67]" : "text-[#8B938B]"}`}>{d}</Text>
              ))}
            </View>

            <View className="mt-3 gap-2">
              {days.map((week, wi) => (
                <View key={wi} className="flex-row justify-between px-1">
                  {week.map((day) => {
                    const isActive = day === 6 && wi === 1;
                    const isWeekend = day === 1 || day === 8 || day === 15 || day === 22 || day === 29;
                    return (
                      <View key={`${wi}-${day}`} className="items-center justify-center h-9 w-9">
                        <View className={`h-8 w-8 rounded-full items-center justify-center ${isActive ? "bg-[#0A7A36]" : ""}`}>
                          <Text className={`text-[13px] font-bold ${isActive ? "text-white" : isWeekend ? "text-[#AE5C67]" : "text-[#313632]"}`}>{day}</Text>
                        </View>
                        {isActive ? <View className="mt-0.5 h-1 w-1 rounded-full bg-[#0A7A36]" /> : null}
                      </View>
                    );
                  })}
                </View>
              ))}
            </View>

            <TouchableOpacity onPress={onOpenWeekly} activeOpacity={0.9} className="mt-4 bg-[#056E2F] rounded-full py-4 items-center">
              <Text className="text-white text-[14px] font-bold">Xem theo tuần</Text>
            </TouchableOpacity>
          </View>

          <Text className="mt-6 text-[#1E2420] text-[30px] leading-[32px] font-bold">Gợi ý hôm nay</Text>

          <View className="mt-4 flex-row gap-3">
            <View className="flex-1 rounded-[22px] overflow-hidden bg-[#E5EDE2] h-[180px]">
              <Image source={{ uri: saladImage }} className="h-full w-full opacity-25" resizeMode="cover" />
              <View className="absolute inset-0 p-4 justify-end">
                <View className="bg-[#BEE2C1] self-start rounded-full px-3 py-1">
                  <Text className="text-[#0A7A36] text-[9px] font-bold">SÁNG</Text>
                </View>
                <Text className="mt-2 text-[#1E2420] text-[20px] leading-[22px] font-semibold">Salad bơ hạt mầm</Text>
              </View>
            </View>

            <View className="flex-1 gap-3">
              <View className="rounded-[22px] bg-[#DDE4DC] p-4 h-[84px]">
                <MaterialCommunityIcons name="silverware-fork-knife" size={16} color="#5A9B71" />
                <Text className="mt-1 text-[#7B847C] text-[9px] font-bold uppercase">Món mới</Text>
                <Text className="text-[#202622] text-[14px] font-semibold">Bò hầm rượu vang</Text>
              </View>

              <View className="rounded-[22px] bg-[#DDE4DC] p-4 h-[84px]">
                <MaterialCommunityIcons name="firework" size={16} color="#6D736D" />
                <Text className="mt-1 text-[#7B847C] text-[9px] font-bold uppercase">Dinh dưỡng</Text>
                <Text className="text-[#202622] text-[14px] font-semibold">2,150 Kcal</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}
