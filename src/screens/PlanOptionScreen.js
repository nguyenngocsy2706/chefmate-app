import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";

export default function PlanOptionScreen({ navigation }) {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: 1,
      title: "AI tự động lên lịch",
      desc: "Công nghệ AI phân tích sở thích để tạo thực đơn 7 ngày trong tích tắc.",
      icon: "cpu",
    },
    {
      id: 2,
      title: "Tự tay lên kế hoạch",
      desc: "Tự do lựa chọn từ kho 10.000+ công thức nấu ăn ngon mỗi ngày.",
      icon: "edit-3",
    },
    {
      id: 3,
      title: "Kế hoạch cho gia đình",
      desc: "Tối ưu hóa dinh dưỡng và khẩu phần cho tất cả thành viên.",
      icon: "users",
    },
  ];

  return (
    <View className="flex-1 bg-[#F3F4F1]">

      {/* HEADER */}
      <View className="flex-row items-center justify-between px-5 pt-14 pb-4">
        <Ionicons name="menu" size={24} color="#1F2937" />
        <Text className="font-semibold text-base">ChefmateAI</Text>
        <View className="w-9 h-9 bg-gray-300 rounded-full" />
      </View>

      <View className="flex-1 px-5">

        {/* TITLE */}
        <Text className="text-3xl font-bold">
          Chọn cách lên kế hoạch
        </Text>

        <Text className="text-gray-500 mt-3">
          ChefmateAI sẽ giúp bạn thiết kế thực đơn phù hợp nhất với nhu cầu của bạn.
        </Text>

        {/* OPTIONS */}
        <View className="mt-6 space-y-4">
          {options.map((item) => {
            const isActive = selected === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelected(item.id)}
                className={`p-5 rounded-3xl flex-row ${
                  isActive
                    ? "bg-white border-2 border-[#2E7D32]"
                    : "bg-white"
                }`}
              >
                {/* ICON */}
                <View className="w-12 h-12 rounded-2xl bg-gray-100 items-center justify-center mr-4">
                  <Feather
                    name={item.icon}
                    size={20}
                    color={isActive ? "#2E7D32" : "#6B7280"}
                  />
                </View>

                {/* TEXT */}
                <View className="flex-1">
                  <Text className="font-semibold">{item.title}</Text>
                  <Text className="text-gray-500 mt-1 text-sm">
                    {item.desc}
                  </Text>
                </View>

                {/* CHECK */}
                {isActive && (
                  <View className="w-6 h-6 border-2 border-[#2E7D32] rounded-full items-center justify-center">
                    <Feather name="check" size={14} color="#2E7D32" />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* BANNER */}
        <View className="mt-6 rounded-3xl overflow-hidden">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
            }}
            className="w-full h-36"
          />
          <View className="absolute bottom-4 left-4">
            <Text className="text-white text-xs">
              THỰC PHẨM XANH
            </Text>
            <Text className="text-white font-semibold">
              Khơi nguồn cảm hứng mỗi bữa ăn
            </Text>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          disabled={!selected}
          onPress={() => navigation.navigate("Weekly")}
          className={`py-4 rounded-full mt-6 ${
            selected ? "bg-[#2E7D32]" : "bg-gray-300"
          }`}
        >
          <Text className="text-white text-center font-semibold">
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>

      <BottomTab />
    </View>
  );
}