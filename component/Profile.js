import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getPostById } from "../data/index";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { postData } from "../data/index";

const Profile = () => {
  const params = useLocalSearchParams();
  const postId = params.id;
  // Бүх постын жагсаалтаас харуулах датагаа хайж олно
  const data = postData.find((post) => post.id == postId);
  const navigation = useNavigation();
  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);

  const likedBy = data.likedBy?.slice(0, 3) || [];

  const firstLike = likedBy.length > 0 ? likedBy[0].userId : "";
  const firstComment = data.comments?.length > 0 ? data.comments[0] : {};

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
          {firstLike && (
            <Text style={styles.likedByText}>
              Liked by <Text style={styles.text}>{firstLike}</Text> and
              <Text style={styles.text}> others</Text>
            </Text>
          )}
        </View>

        <Text>{data.desc}</Text>

        <View style={styles.row}>
          <TouchableOpacity></TouchableOpacity>
          <Image style={styles.pro} source={require("../app/img/my-img.jpg")} />
          <TouchableOpacity>
            <Text style={styles.text3}> Add a comment...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.year}> October 23, 2023</Text>
        </View>
      </View>
      {/* Comments */}
      {data.comments?.map((comment) => (
        <View style={[styles.row, styles.gap13]}>
          <Image source={{ uri: comment.img }} style={styles.proImg} />
          <View>
            <Text style={styles.commentUser}>{comment.userId}</Text>
            <Text style={styles.comment}>{comment.comment}</Text>
          </View>
        </View>
      ))}
      {/* Write comment */}
      <View style={[styles.row, styles.gap13]}>
        <Image style={styles.pro} source={require("../app/img/my-img.jpg")} />
        <View>
          <TextInput
            placeholder="Add a comment..."
            placeholderTextColor={"#858585"}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
