import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Profile from "../../component/Profile";
import { postData, stories } from "../../data";
import Story from "../../component/story/Story";

const Home = () => {
  const list = postData;
  return (
    <ScrollView style={{ flex: 1 }}>
      <Story data={stories} />
      {list.map((data) => (
        <Profile data={postData} />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  pic: {},
  story: {
    borderWidth: 1,
    width: 67,
    height: 86,
  },

  icon: {},
  garchig: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
