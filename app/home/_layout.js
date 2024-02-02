import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Instagram ",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="user" size={24} color="black" fontWeight="bold" />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
