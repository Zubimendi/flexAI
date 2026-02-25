import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";  
export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950">
      <Text className="text-2xl font-bold text-center text-zinc-900 dark:text-white">Profile</Text>
    </SafeAreaView>
  );
}
