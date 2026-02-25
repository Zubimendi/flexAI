import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Workout = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950">
      <Text className="text-2xl font-bold text-center text-zinc-900 dark:text-white">Workout</Text>
    </SafeAreaView>
  )
}

export default Workout