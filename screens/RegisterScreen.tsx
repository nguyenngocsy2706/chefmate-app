import React from "react";
import { ImageBackground, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";

type RegisterScreenProps = {
  onRegister: () => void;
  onLogin: () => void;
};

export default function RegisterScreen({ onRegister, onLogin }: RegisterScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#ECEFED] items-center justify-center p-2" : "flex-1 bg-[#ECEFED]"}>
      <View className={isWeb ? "w-[390px] bg-[#ECEFED] border border-[#BFC7D3]" : "flex-1 w-full bg-[#ECEFED]"} style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}>
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80" }} className="h-[320px] justify-end" resizeMode="cover">
          <View className="bg-white/70 p-6 items-center">
            <Text className="text-[#0A7A36] text-[52px] leading-[56px] font-extrabold text-center">Bắt đầu hành trình nấu nướng</Text>
            <Text className="mt-2 text-[#3F493F] text-center">Khám phá hương vị mới mỗi ngày cùng cộng đồng ẩm thực tinh hoa.</Text>
          </View>
        </ImageBackground>

        <View className="px-6 pt-6">
          <TouchableOpacity className="rounded-full bg-white py-4 items-center"><Text className="text-[18px]">Tiếp tục với Google</Text></TouchableOpacity>
          <TouchableOpacity className="mt-3 rounded-full bg-[#10181A] py-4 items-center"><Text className="text-white text-[18px]">Đăng ký bằng Apple</Text></TouchableOpacity>

          <Text className="text-center mt-6 text-[#616A63]">HOẶC</Text>
          <TextInput placeholder="Địa chỉ Email" placeholderTextColor="#A3AAA3" className="mt-4 rounded-full bg-[#F5F6F4] px-5 py-4" />

          <TouchableOpacity onPress={onRegister} className="mt-5 rounded-full bg-[#0A7A36] py-4 items-center"><Text className="text-white text-[18px] font-bold">Đăng ký bằng Email</Text></TouchableOpacity>

          <Text className="mt-6 text-[#4A534C] text-center leading-7">Bằng cách tiếp tục, bạn đồng ý với <Text className="text-[#0A7A36] font-bold">Điều khoản Dịch vụ</Text> và <Text className="text-[#0A7A36] font-bold">Chính sách Bảo mật</Text>.</Text>
          <View className="mt-8 flex-row justify-center"><Text className="text-[#4A534C]">Đã có tài khoản? </Text><TouchableOpacity onPress={onLogin}><Text className="text-[#0A7A36] font-bold">Đăng nhập</Text></TouchableOpacity></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
