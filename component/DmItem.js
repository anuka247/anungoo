import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Story from "../component/story/Story";
import StoryItem from "./StoryItem";

const DmItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* <Image source={{ uri: data.img }} /> */}
      {/* <StoryItem data={{ img: data.img }} /> */}
      <View>
        <Text style={styles.userId}>{data.userId}</Text>
        <View style={styles.row}>
          {/* <Text style={styles.text}>{data.lastMsg.text}</Text>
          <Text style={styles.date}>{data.lastMsg.date}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DmItem;

const styles = StyleSheet.create({
  date: {
    fontSize: 20,
    color: "gray",
  },
  text: {
    fontSize: 23,
  },
  userId: {
    fontSize: 23,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
