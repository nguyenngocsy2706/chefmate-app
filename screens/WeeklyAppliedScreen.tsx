import React from "react";
import { Feather } from "@expo/vector-icons";
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
const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type WeeklyAppliedScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onOpenAddMeal: () => void;
};

function MealRow({ title, kcal, time, image, accent }: { title: string; kcal: string; time: string; image: string; accent: string }) {
  return (
    <View className="mt-4 rounded-[30px] bg-[#F4F5F2] p-4 flex-row items-center">
      <Image source={{ uri: image }} className="h-20 w-28 rounded-[20px]" resizeMode="cover" />
      <View className="ml-4 flex-1">
        <Text className="text-[#1D231F] text-[20px] leading-7 font-bold">{title}</Text>
        <Text className="text-[#666D68] text-[14px] mt-1">⚡ {kcal}   ⏱ {time}</Text>
      </View>
      <View className="h-10 w-10 rounded-full bg-[#E3E8E0] items-center justify-center">
        <Feather name="more-vertical" size={18} color="#566058" />
      </View>
      <View className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: accent }} />
    </View>
  );
}

export default function WeeklyAppliedScreen({ activeTab, onTabPress, onOpenAddMeal }: WeeklyAppliedScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(920, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View
        className={isWeb ? "bg-[#F6FBF2] relative w-[390px] border border-[#BFC7D3] shadow-2xl" : "flex-1 w-full bg-[#F6FBF2] relative"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <ChefmateHeader avatarUri={avatarImage} />

        <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 14, paddingBottom: 150 }}>
          <View className="rounded-full bg-[#CDE7CF] px-5 py-4 flex-row items-center">
            <View className="h-8 w-8 rounded-full bg-[#0A7A36] items-center justify-center mr-3">
              <Feather name="check" size={16} color="#fff" />
            </View>
            <Text className="text-[#0A7A36] text-[16px] font-bold">Thực đơn đã được áp dụng thành công!</Text>
          </View>

          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-[#1E2420] text-[40px] font-bold">Tháng 10, 2023</Text>
            <Text className="text-[#8D958E] text-[14px] font-semibold">HÔM NAY</Text>
          </View>

          <View className="mt-4 flex-row gap-3">
            {[16, 17, 18, 19, 20].map((d, i) => (
              <View key={d} className={`h-[72px] w-[56px] rounded-[24px] items-center justify-center ${i === 0 ? "bg-[#0A7A36]" : "bg-[#E4E9E2]"}`}>
                <Text className={`text-[12px] font-bold ${i === 0 ? "text-white" : "text-[#6E756F]"}`}>T{i + 2}</Text>
                <Text className={`text-[30px] font-bold ${i === 0 ? "text-white" : "text-[#29302B]"}`}>{d}</Text>
              </View>
            ))}
          </View>

          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-[#1E2420] text-[42px] font-bold">Bữa Sáng</Text>
            <Text className="text-[#9AA19B] text-[16px]">07:30</Text>
          </View>
          <MealRow title="Bánh mì bơ trứng" kcal="450 kcal" time="15 phút" image="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80" accent="#B65273" />

          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-[#1E2420] text-[42px] font-bold">Bữa Trưa</Text>
            <Text className="text-[#9AA19B] text-[16px]">12:30</Text>
          </View>
          <MealRow title="Cá hồi áp chảo" kcal="620 kcal" time="25 phút" image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80" accent="#0A7A36" />

          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-[#1E2420] text-[42px] font-bold">Bữa Tối</Text>
            <Text className="text-[#9AA19B] text-[16px]">19:00</Text>
          </View>
          <MealRow title="Salad ức gà" kcal="380 kcal" time="10 phút" image="https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80" accent="#A7D9AE" />
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} showFab onFabPress={onOpenAddMeal} />
      </View>
    </SafeAreaView>
  );
}
