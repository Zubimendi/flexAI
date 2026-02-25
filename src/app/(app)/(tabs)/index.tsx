import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header />
        <Hero />
        <Features />
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View className="px-6 py-4 flex-row justify-between items-center border-b border-zinc-100 dark:border-zinc-900">
      <View className="flex-row items-center gap-2">
        <View className="bg-blue-600 p-2 rounded-xl">
          <MaterialCommunityIcons name="weight-lifter" size={24} color="white" />
        </View>
        <Text className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
          FlexAI
        </Text>
      </View>
      <Link asChild href="/profile">
        <Pressable className="bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
          <MaterialCommunityIcons name="account-outline" size={24} color="#71717a" />
        </Pressable>
      </Link>
    </View>
  );
}

function Hero() {
  return (
    <View className="px-6 py-12 items-center text-center">
      <View className="bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 rounded-full mb-6">
        <Text className="text-blue-600 dark:text-blue-400 font-medium text-sm">
          ✨ Next Gen Fitness Tracking
        </Text>
      </View>
      <Text className="text-4xl md:text-5xl font-black text-center text-zinc-900 dark:text-white leading-[1.1]">
        Train Smarter,{"\n"}Not Harder.
      </Text>
      <Text className="text-lg text-zinc-500 dark:text-zinc-400 text-center mt-6 max-w-sm leading-relaxed">
        The AI-powered workout tracker that analyzes your progress and optimizes your routine in real-time.
      </Text>
      
      <View className="mt-10 w-full gap-4 max-w-xs">
        <Link asChild href="/history">
          <Pressable className="bg-blue-600 h-14 rounded-2xl items-center justify-center shadow-lg shadow-blue-600/20">
            <Text className="text-white font-bold text-lg">Start Today</Text>
          </Pressable>
        </Link>
        <Link asChild href="/profile">
          <Pressable className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-14 rounded-2xl items-center justify-center">
            <Text className="text-zinc-900 dark:text-white font-semibold text-lg">See Demo</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

function Features() {
  const features = [
    {
      icon: "robot-outline",
      title: "AI Analysis",
      desc: "Get personalized feedback based on your performance data.",
      color: "blue"
    },
    {
      icon: "chart-timeline-variant",
      title: "Smart Tracking",
      desc: "Seamlessly log weights, sets, and reps with voice command.",
      color: "purple"
    },
    {
      icon: "fire",
      title: "Peak Form",
      desc: "Our vision AI checks your posture to prevent injuries.",
      color: "orange"
    }
  ];

  return (
    <View className="px-6 py-8 gap-6">
      <Text className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">
        Key Benefits
      </Text>
      {features.map((f, i) => (
        <View key={i} className="flex-row gap-4 bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800/50">
          <View className="bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-sm self-start">
             <MaterialCommunityIcons name={f.icon as any} size={24} color="#3b82f6" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold text-zinc-900 dark:text-white">{f.title}</Text>
            <Text className="text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">{f.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
