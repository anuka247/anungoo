import { Link, Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const HomeLayout = () => {
  const DmIcon = (
    <Link href={"/dm"} asChild>
      <TouchableOpacity style={styles.dmicon}>
        <AntDesign name="hearto" size={24} color="black" />
        <Feather name="send" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
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
          headerRight: () => DmIcon,
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
const styles = StyleSheet.create({
  dmicon: {
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 100,
  },
});



// https://docs.expo.dev/router/installation/