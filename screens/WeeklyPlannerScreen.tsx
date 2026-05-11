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
const expertImage =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

const weekDays = [
  { key: "T2", day: 15 },
  { key: "T3", day: 16, active: true },
  { key: "T4", day: 17 },
  { key: "T5", day: 18 },
  { key: "T6", day: 19 },
  { key: "T7", day: 20 },
];

type WeeklyPlannerScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onOpenAddMeal: () => void;
};

function MealSection({
  title,
  time,
  icon,
  subtitle,
  onAddMeal,
}: {
  title: string;
  time: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  subtitle: string;
  onAddMeal: () => void;
}) {
  return (
    <View className="mt-10">
      <View className="flex-row items-center justify-between mb-4 px-2">
        <Text className="text-[#1E2420] text-[42px] leading-[40px] font-bold">{title}</Text>
        <View className="bg-[#BFE2C4] rounded-full px-3 py-1">
          <Text className="text-[#0A7A36] text-[14px] font-bold">{time}</Text>
        </View>
      </View>

      <View className="rounded-[32px] border border-dashed border-[#D3DAD0] bg-[#F4F5F2] p-7 items-center">
        <View className="h-16 w-16 rounded-full bg-[#E0E4DC] items-center justify-center">
          <MaterialCommunityIcons name={icon} size={30} color="#6AA17C" />
        </View>

        <Text className="mt-6 text-[#4B534D] text-[15px] text-center">{subtitle}</Text>

        <TouchableOpacity className="mt-5 bg-[#0A7A36] rounded-full px-7 py-3" activeOpacity={0.85} onPress={onAddMeal}>
          <Text className="text-white text-[31px] font-bold">+  Thêm món ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function WeeklyPlannerScreen({ activeTab, onTabPress, onOpenAddMeal }: WeeklyPlannerScreenProps) {
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

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 220 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-[#181D18] text-[54px] leading-[58px] font-extrabold tracking-[-1px]">Lịch trình tuần</Text>
          <Text className="text-[#4A554D] text-[15px] mt-2">Lên kế hoạch cho một tuần tràn đầy sức sống</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-7">
            <View className="flex-row gap-4 pb-2">
              {weekDays.map((item) => (
                <View key={item.key} className="items-center w-16">
                  <Text className={`text-[13px] font-semibold ${item.active ? "text-[#0A7A36]" : "text-[#7E857F]"}`}>{item.key}</Text>
                  <View
                    className={`mt-2 h-12 w-12 rounded-full items-center justify-center ${item.active ? "bg-[#0A7A36]" : "bg-[#DFE4DD]"}`}
                  >
                    <Text className={`text-[16px] font-bold ${item.active ? "text-white" : "text-[#1E2420]"}`}>{item.day}</Text>
                  </View>
                  {item.active ? <View className="mt-1 h-1 w-1 rounded-full bg-[#0A7A36]" /> : null}
                </View>
              ))}
            </View>
          </ScrollView>

          <MealSection
            title="Bữa sáng"
            time="07:00"
            icon="silverware-fork-knife"
            subtitle="Chưa có món ăn nào cho bữa sáng này"
            onAddMeal={onOpenAddMeal}
          />

          <MealSection
            title="Bữa trưa"
            time="12:30"
            icon="hamburger"
            subtitle="Lên thực đơn trưa đầy đủ dinh dưỡng"
            onAddMeal={onOpenAddMeal}
          />

          <MealSection
            title="Bữa tối"
            time="19:00"
            icon="food-variant"
            subtitle="Kết thúc ngày với bữa tối lành mạnh"
            onAddMeal={onOpenAddMeal}
          />

          <Text className="mt-12 text-[#1E2420] text-[44px] leading-[44px] font-bold">Gợi ý từ chuyên gia</Text>

          <View className="mt-5 rounded-[32px] overflow-hidden h-[220px]">
            <Image source={{ uri: expertImage }} className="h-full w-full" resizeMode="cover" />
            <View className="absolute inset-0 bg-black/40" />
            <View className="absolute left-5 bottom-5">
              <View className="bg-[#0A7A36] self-start px-4 py-1 rounded-full">
                <Text className="text-white text-[12px] font-bold">THANH LỌC</Text>
              </View>
              <Text className="text-white text-[40px] leading-[42px] font-bold mt-2">Thực đơn Detox 7 ngày</Text>
            </View>
          </View>

          <View className="mt-5 flex-row gap-4">
            <View className="flex-1 rounded-[24px] bg-[#BCE5BE] p-5 h-[150px]">
              <Feather name="star" size={18} color="#0A7A36" />
              <Text className="mt-10 text-[#0A7A36] text-[18px] font-bold">Gợi ý nhanh</Text>
              <Text className="mt-1 text-[#4A554D] text-[13px]">Dựa trên thói quen của bạn</Text>
            </View>

            <View className="flex-1 rounded-[24px] bg-[#DCE1DA] p-5 h-[150px]">
              <Feather name="shopping-bag" size={18} color="#838A83" />
              <Text className="mt-10 text-[#2A2E2B] text-[18px] font-bold">Đi chợ ngay</Text>
              <Text className="mt-1 text-[#6A736C] text-[13px]">Tạo danh sách từ thực đơn</Text>
            </View>
          </View>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} showFab onFabPress={onOpenAddMeal} />
      </View>
    </SafeAreaView>
  );
}
