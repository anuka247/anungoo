import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

const StoryItem = ({ data }) => {
  return (
    <View>
      <ImageBackground source={border} style={styles.border}>
        <Image source={{ uri: data.img }} style={[styles.image]} />
      </ImageBackground>
      {data.userId && (
        <Text numberOfLines={1} style={styles.userId}>
          {data.userId}
        </Text>
      )}
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
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
