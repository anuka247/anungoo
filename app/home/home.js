import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Profile from "../../component/Profile";
import { postData, stories } from "../../data";
import StoryItem from "../../component/story/Story";

const Home = () => {
  const list = postData;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.garchig}>Instagram </Text>
        <Feather name="send" size={24} color="black" style={styles.icon} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {/* <StoryItem stories={stories} /> */}
        {list.map((data) => (
          <Profile data={postData} />
        ))}
      </ScrollView>
    </View>
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
