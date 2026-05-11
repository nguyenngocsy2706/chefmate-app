import React, { useMemo, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  Platform,
  Pressable,
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
const foodBannerImage =
  "https://www.figma.com/api/mcp/asset/8e5afbbf-3369-4e70-8983-caffe8c94230";

const tabs = ["DISCOVER", "SCAN", "PLANNER", "ORDERS", "PROFILE"];

type ModeCard = {
  id: string;
  title: string;
  description: string[];
  iconName: keyof typeof Feather.glyphMap;
};

const cards: ModeCard[] = [
  {
    id: "auto",
    title: "AI tự động lên lịch",
    description: [
      "Công nghệ AI phân tích sở",
      "thích để tạo thực đơn 7 ngày",
      "trong tích tắc.",
    ],
    iconName: "cpu",
  },
  {
    id: "manual",
    title: "Tự tay lên kế hoạch",
    description: [
      "Tự do lựa chọn từ kho",
      "10.000+ công thức nấu ăn",
      "ngon mỗi ngày.",
    ],
    iconName: "edit-3",
  },
  {
    id: "family",
    title: "Kế hoạch cho gia đình",
    description: [
      "Tối ưu hóa dinh dưỡng và",
      "khẩu phần cho tất cả thành",
      "viên.",
    ],
    iconName: "users",
  },
];

type PlannerModeScreenProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
  onContinue: (modeId: string) => void;
};

export default function PlannerModeScreen({
  activeTab,
  onTabPress,
  onContinue,
}: PlannerModeScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(844, Math.max(700, height - 20));
  const [selectedModeId, setSelectedModeId] = useState("manual");

  const selectedCard = useMemo(
    () => cards.find((card) => card.id === selectedModeId) ?? cards[0],
    [selectedModeId],
  );

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
            paddingTop: 48,
            paddingBottom: 190,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-[#181D18] text-[36px] leading-[45px] font-extrabold tracking-[-0.9px]">
            Chọn cách lên kế{"\n"}hoạch
          </Text>

          <Text className="text-[#3F493F] text-[18px] leading-[29px] mt-4">
            ChefmateAI sẽ giúp bạn thiết kế thực đơn{"\n"}phù hợp nhất với nhu cầu của bạn.
          </Text>

          <View className="mt-12 gap-6">
            {cards.map((card) => {
              const isSelected = card.id === selectedModeId;
              return (
                <Pressable
                  key={card.id}
                  onPress={() => setSelectedModeId(card.id)}
                  className={`rounded-[32px] ${isSelected ? "bg-white border-2 border-[#1F7A3A] px-[26px] py-[26px]" : "bg-[#F0F5EC] px-6 py-6"}`}
                >
                  <View className="flex-row items-start gap-5">
                    <View className="h-14 w-14 rounded-2xl bg-[#DEE5DD] items-center justify-center">
                      <Feather name={card.iconName} size={20} color="#4A5349" />
                    </View>

                    <View className="flex-1">
                      <View className="flex-row items-center justify-between">
                        <Text className="text-[#181D18] text-[20px] leading-7 font-bold">{card.title}</Text>
                        {isSelected ? (
                          <Feather name="check-circle" size={20} color="#1F7A3A" />
                        ) : null}
                      </View>

                      <Text className="text-[#3F493F] text-[16px] leading-[22px] mt-1">
                        {card.description.join("\n")}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>

          <View className="mt-8 rounded-[32px] overflow-hidden h-[192px]">
            <Image source={{ uri: foodBannerImage }} className="h-full w-full" resizeMode="cover" />
            <View className="absolute inset-0 bg-black/40" />
            <View className="absolute left-6 bottom-4">
              <Text className="text-white text-[12px] tracking-[2.4px] font-bold uppercase">THỰC PHẨM XANH</Text>
              <Text className="text-white text-[18px] leading-7 font-bold mt-0.5">
                Khơi nguồn cảm hứng mỗi bữa ăn
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onContinue(selectedCard.id)}
            className="mt-12 rounded-full py-5 items-center"
            style={{
              backgroundColor: "#006027",
              shadowColor: "#000",
              shadowOpacity: 0.12,
              shadowOffset: { width: 0, height: 10 },
              shadowRadius: 15,
              elevation: 6,
            }}
          >
            <Text className="text-white text-[18px] leading-7 font-bold">Tiếp tục</Text>
          </TouchableOpacity>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}
