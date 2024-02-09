import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const PostImage = ({ data }) => {
  console.log("postimage", data.img);
  return (
    <Link style={styles.button} href={"/post/" + data.id} asChild>
      <TouchableOpacity>
        <Image source={{ uri: data.img }} style={styles.image} />
      </TouchableOpacity>
    </Link>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  button: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
