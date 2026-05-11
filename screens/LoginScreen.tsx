import React from "react";
import { ImageBackground, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";

type LoginScreenProps = {
  onLogin: () => void;
  onSignup: () => void;
};

export default function LoginScreen({ onLogin, onSignup }: LoginScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#ECEFED] items-center justify-center p-2" : "flex-1 bg-[#ECEFED]"}>
      <View className={isWeb ? "w-[390px] bg-[#ECEFED] border border-[#BFC7D3]" : "flex-1 w-full bg-[#ECEFED]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=1200&q=80" }} className="h-[260px] justify-end" resizeMode="cover">
          <View className="bg-black/40 p-6">
            <Text className="text-white text-[28px] font-bold">CHEF MATE AI</Text>
            <Text className="mt-2 text-white text-[52px] leading-[56px] font-extrabold">Nâng tầm vị giác Việt.</Text>
          </View>
        </ImageBackground>

        <View className="px-6 pt-6">
          <Text className="text-[#1E2420] text-[44px] font-extrabold">Chào mừng trở lại</Text>
          <Text className="mt-2 text-[#4A534C] text-[16px]">Khám phá tinh hoa ẩm thực cùng chúng tôi.</Text>

          <Text className="mt-6 text-[#1E2420] font-bold">Email của bạn</Text>
          <TextInput placeholder="example@email.com" placeholderTextColor="#A3AAA3" className="mt-2 rounded-[20px] bg-[#F5F6F4] px-5 py-4" />

          <View className="mt-4 flex-row justify-between items-center"><Text className="text-[#1E2420] font-bold">Mật khẩu</Text><Text className="text-[#0A7A36] font-bold">Quên mật khẩu?</Text></View>
          <TextInput placeholder="••••••••" placeholderTextColor="#A3AAA3" secureTextEntry className="mt-2 rounded-[20px] bg-[#F5F6F4] px-5 py-4" />

          <TouchableOpacity onPress={onLogin} className="mt-6 rounded-full bg-[#0A7A36] py-4 items-center" activeOpacity={0.9}><Text className="text-white text-[18px] font-bold">Đăng nhập</Text></TouchableOpacity>

          <View className="mt-8 flex-row items-center"><View className="flex-1 h-px bg-[#E0E5DF]" /><Text className="mx-3 text-[#6C756E]">HOẶC</Text><View className="flex-1 h-px bg-[#E0E5DF]" /></View>

          <View className="mt-5 flex-row gap-3"><View className="flex-1 rounded-full bg-white py-4 items-center"><Text>Google</Text></View><View className="flex-1 rounded-full bg-[#10181A] py-4 items-center"><Text className="text-white">Apple</Text></View></View>

          <View className="mt-8 flex-row justify-center"><Text className="text-[#3F493F]">Chưa có tài khoản? </Text><TouchableOpacity onPress={onSignup}><Text className="text-[#0A7A36] font-bold">Đăng ký ngay</Text></TouchableOpacity></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
