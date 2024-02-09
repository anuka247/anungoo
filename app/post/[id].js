import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getPostById } from "../../data/index";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Profile from "../../component/PostDetail";

const Post = ({}) => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const postData = getPostById(params.id);

  // console.log('id', params.id);
  console.log("postData", postData);

  // Хуудас анхны дуудагдах үед доторхи код 1 удаа ажиллана
  useEffect(() => {
    // Пост хуудсан дээр толгой хэсгийг харуулах
    navigation.setOptions({ headerShown: true, headerTitle: "Post" });
  }, []);

  return (
    <View>
      <Profile data={postData} />

      {/*profile deed heseg*/}

      {/* <View  style={styles.profileHayg}>
            <Image style={styles.pro} source={require('../img/my-img.jpg')}/>
            <Text style={styles.text1} >B.Anungoo</Text>
            </View> */}
      {/* zurag */}

      {/* <View >
            <Image style={styles.img} source={{ uri: postData.img }}  />
            </View> */}
      {/* like comment save  */}

      {/* <View style={styles.btnContainer} >
            <View style={styles.like} >
            <TouchableOpacity  style={styles.btn}>
            <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity  style={styles.btn}>
            <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity  style={styles.btn}>
            <Feather name="send" size={24} color="black" />
            </TouchableOpacity>
            </View>

            <View  style={styles.row}>
            <TouchableOpacity  style={styles.btn}>
            <MaterialIcons name="save-alt" size={24} color="black" />
            </TouchableOpacity>
            </View>
            </View> */}

      {/*likedby  */}
      {/* <View style={styles.container}>

            <View style={styles.desc} > */}

      {/* {data.likedBy.map( (p) => (
                    <Image source={{uri:p.img}} style={styles.profileImg}/>
                ))} */}

      {/* </View>
            <Text >
                LikedBy 
                <Text style={styles.text} > aminul_xd </Text>
                and
                <Text style={styles.text}> others</Text>
            </Text>
            <Text>{postData.desc}</Text>

            <View style={styles.row}>
                <Image style={styles.pro} source={require('../img/my-img.jpg')}/>
                <TouchableOpacity>
                <Text style={styles.text3} > Add a comment...</Text>
                </TouchableOpacity>
               
                </View>
                <View style={styles.row}>
                <Text style={styles.year} > October 23, 2023</Text>
                </View>
               
           

            </View> */}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
