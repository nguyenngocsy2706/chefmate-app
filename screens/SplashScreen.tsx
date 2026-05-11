import React, { useEffect } from "react";
import { Image, Platform, SafeAreaView, Text, View, useWindowDimensions } from "react-native";

type SplashScreenProps = {
  onDone: () => void;
};

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(900, Math.max(760, height - 20));

  useEffect(() => {
    const timer = setTimeout(onDone, 1400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <SafeAreaView className={isWeb ? "flex-1 bg-[#DDE9DD] items-center justify-center p-2" : "flex-1 bg-[#DDE9DD]"}>
      <View
        className={isWeb ? "w-[390px] bg-[#DDE9DD] border border-[#BFC7D3]" : "flex-1 w-full bg-[#DDE9DD]"}
        style={isWeb ? { height: webFrameHeight, borderRadius: 14, overflow: "hidden" } : undefined}
      >
        <View className="flex-1 items-center justify-center px-6">
          <View className="h-24 w-24 rounded-[24px] bg-[#E8EFE7] items-center justify-center">
            <Text className="text-[#0A7A36] text-[44px] font-extrabold">🍽</Text>
          </View>
          <Text className="mt-8 text-[#0A7A36] text-[64px] font-extrabold tracking-tight">CHEF AI</Text>
          <Text className="mt-2 text-[#465146] tracking-[4px]">TRỢ LÝ BẾP CHUYÊN NGHIỆP</Text>

          <View className="mt-10 rounded-[28px] overflow-hidden bg-[#A7B3A8] w-full max-w-[310px]">
            <Image source={{ uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80" }} className="h-[220px] w-full opacity-80" resizeMode="cover" />
            <View className="px-4 py-3">
              <View className="h-1.5 bg-white/50 rounded-full overflow-hidden"><View className="h-full w-[30%] bg-[#0A7A36]" /></View>
              <Text className="mt-2 text-center text-[#5A645B] tracking-[2px]">ĐANG KHỞI TẠO ATELIER</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
