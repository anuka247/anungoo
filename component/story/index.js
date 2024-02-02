import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Story from "./Story.1";

const index = ({ stories }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.container}
    >
      {stories.map((obj) => (
        <Story data={obj} />
      ))}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 8,
  },
});
