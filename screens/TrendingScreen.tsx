import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

type TrendingScreenProps = {};

export default function TrendingScreen({}: TrendingScreenProps) {
  const isWeb = Platform.OS === "web";
  const { height } = useWindowDimensions();
  const webFrameHeight = Math.min(930, Math.max(760, height - 20));
  return <SafeAreaView className={isWeb?"flex-1 bg-[#ECEFED] items-center justify-center p-2":"flex-1 bg-[#ECEFED]"}><View className={isWeb?"w-[390px] bg-[#ECEFED] border border-[#BFC7D3]":"flex-1 w-full bg-[#ECEFED]"} style={isWeb?{height:webFrameHeight,borderRadius:14,overflow:"hidden"}:undefined}><ScrollView contentContainerStyle={{padding:20,paddingBottom:30}}><View className="flex-row items-center justify-between"><Feather name="arrow-left" size={20} color="#0A7A36" /><Text className="text-[#0A7A36] text-[32px] font-bold">Món ăn xu hướng</Text><Feather name="bell" size={18} color="#0A7A36" /></View><Text className="mt-6 text-[#1E2420] text-[62px] leading-[64px] font-extrabold">Hương vị Đương đại</Text><Text className="mt-3 text-[#4A534C]">Khám phá những món ăn đang làm mưa làm gió trong cộng đồng tuần này.</Text>{["Salad Cá Hồi Á Đông","Buddha Bowl Địa Trung Hải","Mỳ Truffle Sốt Kem"].map((x,i)=><View key={x} className="mt-5 rounded-[28px] overflow-hidden"><Image source={{uri:["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"][i]}} className="h-[230px] w-full" /><View className="absolute bottom-5 left-5 right-5 flex-row justify-between items-end"><View><Text className="text-white text-[42px] leading-[44px] font-extrabold">{x}</Text><Text className="text-white mt-2">⭐ {4.8+i/10}  ♡ {1.8+i}k lượt thích</Text></View><TouchableOpacity className="h-12 w-12 rounded-full bg-[#0A7A36] items-center justify-center"><Feather name="arrow-right" size={20} color="#fff" /></TouchableOpacity></View></View>)}</ScrollView></View></SafeAreaView>;
}
