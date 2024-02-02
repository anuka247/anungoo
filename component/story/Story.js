import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { stories } from "../../data";

const Stories = () => {
  const border = require("../../app/img/img/story-border.png");

  return (
    <TouchableOpacity style={styles.container}>
      {stories.map((s) => (
        <View>
          <ImageBackground source={border} style={styles.border}>
            <Image source={{ uri: s.storyImg }} style={[styles.image]} />
          </ImageBackground>
          <Text numberOfLines={1} style={styles.userId}>
            {s.userId}
          </Text>
        </View>
      ))}
      <Text style={styles.userId}>{stories.userId} </Text>
    </TouchableOpacity>
  );
};

export default Stories;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  userId: {
    fontSize: 12,
    fontWeight: "400",
  },
  border: {
    width: 67,
    height: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
