import React from "react";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import BottomNavBar from "../components/chefmate/BottomNavBar";
import ChefmateHeader from "../components/chefmate/ChefmateHeader";
import FeatureCard, { FeatureCardItem } from "../components/chefmate/FeatureCard";

const heroImage =
  "https://www.figma.com/api/mcp/asset/52f85bad-ae55-4b04-af3e-18dc3923e8e2";
const avatarImage =
  "https://www.figma.com/api/mcp/asset/9d190136-7fc6-450b-b9fa-7e7ea60979d3";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

const features: FeatureCardItem[] = [
  {
    title: "Tiết kiệm thời gian",
    description: "Tự động hóa danh sách mua sắm và lịch trình chuẩn bị.",
    iconBg: "#C7ECC6",
    iconName: "clock",
    iconColor: "#2B7A42",
  },
  {
    title: "Ăn uống lành mạnh",
    description: "Công thức nấu ăn được chuyên gia dinh dưỡng phê duyệt dành riêng cho bạn.",
    iconBg: "#9DF7A8",
    iconName: "award",
    iconColor: "#1B7A35",
  },
  {
    title: "Giảm thiểu lãng phí",
    description: "Mua chính xác những gì bạn cần với định lượng thông minh.",
    iconBg: "#FFD9DE",
    iconName: "feather",
    iconColor: "#B55368",
  },
];

type ChefmateIntroScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onNext: () => void;
};

export default function ChefmateIntroScreen({ activeTab, onTabPress, onNext }: ChefmateIntroScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(844, Math.max(700, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#CED4DF] items-center justify-center p-2" : "flex-1 bg-[#F6FBF2]"}>
      <View
        className={isWeb ? "bg-[#F6FBF2] relative w-[390px] border border-[#BFC7D3] shadow-2xl" : "flex-1 w-full bg-[#F6FBF2] relative"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <ChefmateHeader avatarUri={avatarImage} />

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 24,
            paddingBottom: 180,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image source={{ uri: heroImage }} className="w-full h-[342px] rounded-[32px]" resizeMode="cover" />

          <View className="pt-10 items-center">
            <Text className="text-[#181D18] text-[36px] leading-[45px] font-extrabold text-center tracking-[-0.9px]">
              Lên kế hoạch tuần,{"\n"}ăn uống lành mạnh{"\n"}hơn
            </Text>

            <Text className="text-[#3F493F] text-[18px] leading-7 text-center mt-4 max-w-[320px]">
              Kế hoạch bữa ăn cá nhân hóa cho sức khỏe và lối sống của bạn.
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onNext}
              className="mt-10 w-full py-5 rounded-full items-center"
              style={{
                backgroundColor: "#006027",
                shadowColor: "#000",
                shadowOpacity: 0.12,
                shadowOffset: { width: 0, height: 10 },
                shadowRadius: 15,
                elevation: 6,
              }}
            >
              <Text className="text-white text-[16px] leading-6 font-bold">Bắt đầu lên kế hoạch</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} className="mt-6">
              <Text className="text-[#006027] text-[14px] font-bold uppercase tracking-[0.35px]">
                Bỏ qua lúc này
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-20 gap-4">
            {features.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </View>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}
