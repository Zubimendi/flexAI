import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons'
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }} >
            <Tabs.Screen name="index" options={{
                title: 'Home', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="workout" options={{
                title: 'Workouts', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="plus" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="history" options={{
                title: 'History', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="history" color={color} size={size} />
                )
            }} />

            <Tabs.Screen name="Exercises" options={{
                title: 'Exercises', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                )
            }} />

            <Tabs.Screen name="active-workout" options={{
                title: 'Active Workout', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="timer-outline" color={color} size={size} />
                ),
                href: null,
                tabBarStyle: { display: 'none' }
            }} />
        </Tabs>
    )
}

export default Layout