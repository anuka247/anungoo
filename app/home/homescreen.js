import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationConrainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack } from "expo-router";

const homescreen = () => {
  return (
    <NavigationConrainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationConrainer>
  );
};

export default homescreen;

const styles = StyleSheet.create({});

// https://youtu.be/z-WsYu8n1vQ?si=5mftCP1oBw1YR7FV
