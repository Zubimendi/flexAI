import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }} >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />
    </Tabs>
  )
}

export default Layout