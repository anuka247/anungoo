import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.garchig}>Instagram </Text>
        <Feather name="send" size={24} color="black" style={styles.icon} />
      </View>
      {/* 
      <View style={styles.row}>
        <TouchableOpacity style={styles.story}>
          <Image style={styles.pic} source={require("../img/my-img.jpg")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.story}>
          <Image style={styles.pic} source={require("")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.story}>
          <Image style={styles.pic} source={require("")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.story}>
          <Image style={styles.pic} source={require("")} />
        </TouchableOpacity>
      </View> */}
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
