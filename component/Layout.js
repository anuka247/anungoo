import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Layout = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currenHeight,
    flex: 1,
  },
});
