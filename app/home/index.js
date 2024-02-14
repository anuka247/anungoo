import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import PostDetail from "../../component/PostDetail";
import { postData, stories } from "../../data";
import Stories from "../../component/story/Story";
import { getNews } from "../../services/firebaseConfig";

const Home = () => {


  const list = postData;
  return (
    <ScrollView style={{ flex: 1 }}>
      <Stories data={stories} />
      {list.map((data) => (
        <PostDetail data={data} />
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
