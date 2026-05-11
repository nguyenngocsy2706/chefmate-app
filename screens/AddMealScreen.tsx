import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type AddMealScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onApplyToDay: () => void;
};

type Dish = {
  title: string;
  subtitle?: string;
  kcal: string;
  time: string;
  image: string;
  isFeatured?: boolean;
};

const dishes: Dish[] = [
  {
    title: "Salad ức gà cầu vòng",
    subtitle: "Món ăn giàu protein, đầy đủ vitamin từ rau củ tươi sạch trong ngày.",
    kcal: "340 kcal",
    time: "15 phút",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    title: "Bún chả Hà Nội",
    kcal: "450 KCAL",
    time: "25 PHÚT",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Phở bò truyền thống",
    kcal: "380 KCAL",
    time: "40 PHÚT",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gỏi cuốn tôm thịt",
    kcal: "180 KCAL",
    time: "15 PHÚT",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cá hồi áp chảo",
    kcal: "320 KCAL",
    time: "20 PHÚT",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
  },
];

function DishCard({ dish }: { dish: Dish }) {
  if (dish.isFeatured) {
    return (
      <View className="rounded-[32px] bg-[#F4F5F2] p-5 mt-5">
        <Image source={{ uri: dish.image }} className="h-[190px] w-full rounded-[26px]" resizeMode="cover" />
        <View className="bg-[#F4D4DD] self-start px-3 py-1 rounded-full mt-5">
          <Text className="text-[#9A4D5E] text-[10px] font-bold uppercase">Món mới</Text>
        </View>
        <Text className="text-[#1E2420] text-[44px] leading-[46px] font-bold mt-3">{dish.title}</Text>
        <Text className="text-[#5B635D] text-[15px] leading-6 mt-2">{dish.subtitle}</Text>
        <View className="flex-row items-center mt-4">
          <Feather name="activity" size={14} color="#6B726D" />
          <Text className="text-[#646B66] text-[14px] font-bold ml-2">{dish.kcal}</Text>
          <Feather name="clock" size={14} color="#6B726D" style={{ marginLeft: 16 }} />
          <Text className="text-[#646B66] text-[14px] font-bold ml-2">{dish.time}</Text>
        </View>
        <TouchableOpacity className="mt-5 self-start bg-[#0A7A36] rounded-full px-7 py-3" activeOpacity={0.85}>
          <Text className="text-white text-[35px] font-bold">+  Thêm vào</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="rounded-[28px] bg-[#F4F5F2] p-4 mt-5">
      <View className="relative">
        <Image source={{ uri: dish.image }} className="h-[240px] w-full rounded-[26px]" resizeMode="cover" />
        <TouchableOpacity className="absolute right-3 bottom-3 h-10 w-10 rounded-full bg-[#0A7A36] items-center justify-center" activeOpacity={0.85}>
          <Feather name="plus" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text className="text-[#1E2420] text-[41px] leading-[44px] font-bold mt-4">{dish.title}</Text>
      <Text className="text-[#99A09B] text-[13px] font-bold mt-2">{dish.kcal}     •     {dish.time}</Text>
    </View>
  );
}

export default function AddMealScreen({ activeTab, onTabPress, onApplyToDay }: AddMealScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View
        className={isWeb ? "bg-[#F6FBF2] relative w-[390px] border border-[#BFC7D3] shadow-2xl" : "flex-1 w-full bg-[#F6FBF2] relative"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 18, paddingBottom: 170 }}>
          <View className="rounded-full bg-[#ECEFEB] px-4 py-3 flex-row items-center">
            <Feather name="search" size={20} color="#636A65" />
            <TextInput
              placeholder="Tìm kiếm món ăn, nguyên liệu..."
              placeholderTextColor="#98A09A"
              className="ml-3 flex-1 text-[15px] text-[#1E2420]"
            />
          </View>

          <View className="flex-row gap-3 mt-6">
            <View className="rounded-full bg-[#BCE5BE] px-5 py-2"><Text className="text-[#0A7A36] font-bold text-[16px]">Tất cả</Text></View>
            <View className="rounded-full bg-[#E1E5DE] px-5 py-2"><Text className="text-[#6B716C] font-bold text-[16px]">Bữa sáng</Text></View>
            <View className="rounded-full bg-[#E1E5DE] px-5 py-2"><Text className="text-[#6B716C] font-bold text-[16px]">Bữa trưa</Text></View>
          </View>

          {dishes.map((dish) => (
            <DishCard key={dish.title} dish={dish} />
          ))}

          <View className="mt-6 rounded-full bg-[#0A7A36] px-4 py-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="h-7 w-7 rounded-full bg-[#C9E8CC] items-center justify-center mr-3">
                <Text className="text-[#0A7A36] text-[12px] font-bold">2</Text>
              </View>
              <Text className="text-white text-[30px] font-bold">Món đã chọn</Text>
            </View>
            <TouchableOpacity className="rounded-full bg-[#CBE9CC] px-4 py-2" activeOpacity={0.85} onPress={onApplyToDay}>
              <Text className="text-[#0A7A36] text-[16px] font-bold">Thêm vào ngày</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}
