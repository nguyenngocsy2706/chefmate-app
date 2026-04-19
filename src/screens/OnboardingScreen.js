import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";

export default function OnboardingScreen({ navigation }) {
  return (
    <View className="flex-1 bg-[#F3F4F1]">

      {/* HEADER */}
      <View className="flex-row items-center justify-between px-5 pt-14 pb-4">
        <Ionicons name="menu" size={24} color="#1F2937" />
        <Text className="font-semibold text-base">ChefmateAI</Text>
        <View className="w-9 h-9 bg-gray-300 rounded-full" />
      </View>

      {/* CONTENT */}
      <View className="flex-1 px-5">

        {/* IMAGE */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
          }}
          className="w-full h-56 rounded-3xl"
        />

        {/* TITLE */}
        <Text className="text-3xl font-bold text-center mt-6 leading-9">
          Lên kế hoạch tuần,
          {"\n"}ăn uống lành mạnh hơn
        </Text>

        {/* SUB */}
        <Text className="text-center text-gray-500 mt-3 px-5">
          Kế hoạch bữa ăn cá nhân hóa cho sức khỏe và lối sống của bạn.
        </Text>

        {/* BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PlanOption")}
          className="bg-[#2E7D32] py-4 rounded-full mt-6"
        >
          <Text className="text-white text-center font-semibold">
            Bắt đầu lên kế hoạch
          </Text>
        </TouchableOpacity>

        {/* SKIP */}
        <Text className="text-center text-[#2E7D32] mt-4 font-medium">
          BỎ QUA LÚC NÀY
        </Text>

        {/* FEATURES */}
        <View className="mt-6 space-y-4">

          <FeatureCard
            icon="clock"
            title="Tiết kiệm thời gian"
            desc="Tự động hóa danh sách mua sắm và lịch trình chuẩn bị."
            bg="bg-green-100"
          />

          <FeatureCard
            icon="activity"
            title="Ăn uống lành mạnh"
            desc="Công thức nấu ăn được chuyên gia dinh dưỡng phê duyệt."
            bg="bg-green-200"
          />

          <FeatureCard
            icon="feather"
            title="Giảm thiểu lãng phí"
            desc="Mua chính xác những gì bạn cần với định lượng thông minh."
            bg="bg-red-100"
          />
        </View>
      </View>

      {/* TAB */}
      <BottomTab />
    </View>
  );
}

function FeatureCard({ icon, title, desc, bg }) {
  return (
    <View className="bg-white rounded-3xl p-5 flex-row">
      <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${bg}`}>
        <Feather name={icon} size={20} color="#2E7D32" />
      </View>

      <View className="flex-1">
        <Text className="font-semibold">{title}</Text>
        <Text className="text-gray-500 mt-1">{desc}</Text>
      </View>
    </View>
  );
}