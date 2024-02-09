import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { getPostById } from "../data/index";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PostDetail = ({ data }) => {
  const postId = data.id;
  const commentLenght = data.comments.length;
  const firstLike = data.likedBy[0];

  const first3Like = data.likedBy.slice(0, 3);

  return (
    <View>
      {/*profile deed heseg*/}
      <Link href={"/profile/" + data.id} asChild>
        <TouchableOpacity style={styles.profileHayg}>
          <Image style={styles.pro} source={require("../app/img/my-img.jpg")} />
          <Text style={styles.text1}>B.Anungooo</Text>
        </TouchableOpacity>
      </Link>
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
          {first3Like?.map((p, i) => (
            <Image
              key={p.profileImg + i}
              source={{ uri: p.profileImg }}
              style={styles.profileImg}
            />
          ))}
          <Text style={styles.likedByText}>
            Liked by
            <Text style={styles.text}> {firstLike.userId} </Text>
            {data.likedBy.length > 1 && (
              <Text style={styles.text}>and others</Text>
            )}
          </Text>
        </View>

        {/* post tailbar  */}
        <View style={styles.row}>
          <Text style={styles.userId}> {data.userId}</Text>
          <Text style={styles.desc}> {data.desc}</Text>
        </View>
      </View>

      {/* View all comment  */}
      <View style={styles.container}>
        <Link
          href={{
            pathname: "/comment",
            params: { postId: postId },
          }}
          asChild
        >
          <TouchableOpacity>
            <Text style={styles.viewAll}>
              View all {data.comments?.length} comment
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  viewAll: {
    color: "gray",
    fontSize: 15,
  },
  proImg: {
    width: 29,
    height: 29,
    borderRadius: 500,
  },
  commentUser: {
    fontSize: 15,
    fontWeight: "600",
  },
  comment: {
    fontSize: 15,
  },
  likedByText: {
    fontSize: 15,
    fontWeight: "400",
    padding: 5,
  },
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
    flexDirection: "row",
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
