import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";

export default function PlannerScreen() {
  const days = [
    { label: "T2", date: 15 },
    { label: "T3", date: 16, active: true },
    { label: "T4", date: 17 },
    { label: "T5", date: 18 },
    { label: "T6", date: 19 },
    { label: "T7", date: 20 },
  ];

  return (
    <View className="flex-1 bg-[#EEF2EC]">
      <ScrollView className="px-5 pt-12">

        {/* HEADER */}
        <View className="flex-row justify-between items-center mb-6">
          <Feather name="menu" size={24} />
          <Text className="text-lg font-bold text-[#2E7D32]">
            ChefmateAI
          </Text>
          <View className="w-9 h-9 bg-gray-300 rounded-full" />
        </View>

        {/* TITLE */}
        <Text className="text-3xl font-bold mb-2">
          Lịch trình tuần
        </Text>
        <Text className="text-gray-500 mb-6">
          Lên kế hoạch cho một tuần tràn đầy sức sống
        </Text>

        {/* DATE SCROLL */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 mb-6">
            {days.map((d, i) => (
              <View key={i} className="items-center">
                <Text className="text-xs text-gray-400 mb-2">
                  {d.label}
                </Text>

                <View
                  className={`w-12 h-12 rounded-full items-center justify-center ${
                    d.active ? "bg-[#2E7D32]" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`font-semibold ${
                      d.active ? "text-white" : "text-black"
                    }`}
                  >
                    {d.date}
                  </Text>
                </View>

                {d.active && (
                  <View className="w-1 h-1 bg-[#2E7D32] rounded-full mt-1" />
                )}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* MEALS */}
        <MealSection
          title="Bữa sáng"
          time="07:00"
          icon="coffee"
          desc="Chưa có món ăn nào cho bữa sáng này"
        />

        <MealSection
          title="Bữa trưa"
          time="12:30"
          icon="box"
          desc="Lên thực đơn trưa đầy đủ dinh dưỡng"
        />

        <MealSection
          title="Bữa tối"
          time="19:00"
          icon="moon"
          desc="Kết thúc ngày với bữa tối lành mạnh"
        />

        {/* EXPERT */}
        <Text className="text-xl font-bold mt-6 mb-4">
          Gợi ý từ chuyên gia
        </Text>

        <View className="bg-black rounded-3xl p-5 h-44 justify-end mb-5">
          <Text className="text-green-400 text-xs mb-1">
            THANH LỌC
          </Text>
          <Text className="text-white text-lg font-semibold">
            Thực đơn Detox 7 ngày
          </Text>
        </View>

        {/* 2 CARDS */}
        <View className="flex-row gap-4 mb-24">
          <View className="flex-1 bg-[#CFE5D1] rounded-3xl p-4">
            <Feather name="star" size={20} color="#2E7D32" />
            <Text className="mt-3 font-semibold">
              Gợi ý nhanh
            </Text>
            <Text className="text-gray-500 text-sm">
              Dựa trên thói quen của bạn
            </Text>
          </View>

          <View className="flex-1 bg-gray-200 rounded-3xl p-4">
            <Feather name="shopping-basket" size={20} />
            <Text className="mt-3 font-semibold">
              Đi chợ ngay
            </Text>
            <Text className="text-gray-500 text-sm">
              Tạo danh sách từ thực đơn
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* FLOAT BUTTON */}
      <TouchableOpacity className="absolute bottom-24 right-6 w-14 h-14 bg-[#2E7D32] rounded-full items-center justify-center shadow-lg">
        <Feather name="plus" size={28} color="white" />
      </TouchableOpacity>

      <BottomTab />
    </View>
  );
}

function MealSection({ title, time, icon, desc }) {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-semibold">{title}</Text>
        <Text className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
          {time}
        </Text>
      </View>

      <View className="bg-white rounded-3xl p-6 border border-dashed border-gray-300 items-center">
        <View className="w-14 h-14 bg-gray-100 rounded-full items-center justify-center mb-3">
          <Feather name={icon} size={22} color="#2E7D32" />
        </View>

        <Text className="text-gray-500 text-center mb-4">
          {desc}
        </Text>

        <TouchableOpacity className="bg-[#2E7D32] px-5 py-3 rounded-full">
          <Text className="text-white font-medium">
            + Thêm món ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}