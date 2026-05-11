import React from "react";
import { Feather } from "@expo/vector-icons";
import {
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

const modeContent: Record<string, { title: string; subtitle: string }> = {
  auto: {
    title: "AI tự động lên lịch",
    subtitle: "ChefmateAI sẽ tạo thực đơn 7 ngày dựa trên khẩu vị và mục tiêu dinh dưỡng của bạn.",
  },
  manual: {
    title: "Tự tay lên kế hoạch",
    subtitle: "Bạn tự chọn món từ thư viện công thức để xây dựng thực đơn theo ý muốn.",
  },
  family: {
    title: "Kế hoạch cho gia đình",
    subtitle: "Tối ưu khẩu phần và dinh dưỡng cho nhiều thành viên trong gia đình.",
  },
};

type PlannerSummaryScreenProps = {
  activeTab: string;
  selectedModeId: string;
  onTabPress: (tab: string) => void;
  onBack: () => void;
  onFinish: () => void;
};

export default function PlannerSummaryScreen({
  activeTab,
  selectedModeId,
  onTabPress,
  onBack,
  onFinish,
}: PlannerSummaryScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(844, Math.max(700, height - 20));
  const mode = modeContent[selectedModeId] ?? modeContent.auto;

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
            Sẵn sàng tạo{"\n"}kế hoạch ăn uống
          </Text>

          <Text className="text-[#3F493F] text-[18px] leading-[29px] mt-4">
            Bạn đã chọn chế độ, giờ mình sẽ tạo kế hoạch chi tiết theo nhu cầu của bạn.
          </Text>

          <View className="mt-10 rounded-[32px] bg-white border border-[#D7E2D4] p-6">
            <View className="h-12 w-12 rounded-full bg-[#C7ECC6] items-center justify-center">
              <Feather name="check" size={22} color="#1F7A3A" />
            </View>
            <Text className="mt-4 text-[#181D18] text-[20px] leading-7 font-bold">{mode.title}</Text>
            <Text className="mt-2 text-[#3F493F] text-[16px] leading-[24px]">{mode.subtitle}</Text>
          </View>

          <View className="mt-6 rounded-[24px] bg-[#F0F5EC] p-5">
            <Text className="text-[#181D18] text-[16px] leading-6 font-semibold">Bước tiếp theo</Text>
            <Text className="mt-2 text-[#3F493F] text-[14px] leading-6">
              Trả lời nhanh vài câu hỏi về dị ứng, mục tiêu sức khỏe và lịch nấu ăn để AI cá nhân hóa thực đơn.
            </Text>
          </View>

          <View className="mt-10 flex-row gap-3">
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onBack}
              className="flex-1 rounded-full py-4 items-center border border-[#1F7A3A]"
            >
              <Text className="text-[#1F7A3A] text-[16px] leading-6 font-bold">Quay lại</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onFinish}
              className="flex-1 rounded-full py-4 items-center"
              style={{ backgroundColor: "#006027" }}
            >
              <Text className="text-white text-[16px] leading-6 font-bold">Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <BottomNavBar tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}
