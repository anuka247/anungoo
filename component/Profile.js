import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getPostById } from "../data/index";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ data }) => {
  console.log("data", data);

  return (
    <View>
      {/*profile deed heseg*/}
      <View style={styles.profileHayg}>
        <Image style={styles.pro} source={require("../app/img/my-img.jpg")} />
        <Text style={styles.text1}>B.Anungoo</Text>
      </View>
      {/* zurag */}
      <View>
        <Image style={styles.img} source={{ uri: data.img }} />
      </View>
      {/* like comment save  */}
      <View style={styles.btnContainer}>
        <View style={styles.like}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <AntDesign name="message1" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <MaterialIcons name="save-alt" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/*likedby  */}
      <View style={styles.container}>
        <View style={styles.desc}>
          {data.likedBy?.map((p) => (
            <Image source={{ uri: p.profileImg }} style={styles.profileImg} />
          ))}
        </View>
        <Text>
          LikedBy
          <Text style={styles.text}> aminul_xd </Text>
          and
          <Text style={styles.text}> others</Text>
        </Text>
        <Text>{data.desc}</Text>

        <View style={styles.row}>
          <Image style={styles.pro} source={require("../app/img/my-img.jpg")} />
          <TouchableOpacity>
            <Text style={styles.text3}> Add a comment...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.year}> October 23, 2023</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImg: {
    width: 29,
    height: 29,
    borderRadius: 29 / 2,
  },
  year: {
    fontSize: 12,
    color: "gray",
  },
  text3: {
    color: "gray",
    fontSize: 15,
  },
  text: {
    fontWeight: "bold",
  },
  desc: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 13,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 18,
  },
  pro: {
    width: 37,
    height: 37,
    borderRadius: 500,
  },
  like: {
    paddingVertical: 12,
    gap: 13,
    flexDirection: "row",
    alignContent: "center",
  },
  profileHayg: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 10,
  },

  container: {
    paddingVertical: 1,
    paddingHorizontal: 10,
  },
  images: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 415,
    height: 415,
  },
});
