import { ScrollView, StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { postData, users } from "../../data/index";
import Post from "../../component/Post";
import About from "../../component/About";

const Profile = ({}) => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const profileId = params.id;

  // console.log('id', params.id);

  const profileData = users.find((user) => user.userId == profileId);

  const myPosts = postData.filter((post) => post.userId === profileId);
  console.log("myPosts", myPosts);

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: profileId,
    });
  }, [navigation]);

  return profileData ? (
    <ScrollView contentContainerStyle={styles.container}>
      <About
        img={profileData.img}
        name={profileData.name}
        bio1={profileData.bio1}
        bio2={profileData.bio2}
        followers={profileData.followers}
        following={profileData.following}
        postNum={myPosts.length}
      />
      {/* Үндсэн пост хэсэг */}
      <Post data={myPosts} />
    </ScrollView>
  ) : (
    <View style={styles.notfound}>
      <Text style={styles.notfoundText}>Хэрэглэгч олдсонгүй</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  notfound: { flex: 1, justifyContent: "center", alignItems: "center" },
  notfoundText: {
    textAlign: "center",
    fontSize: 24,
  },
});

// import PostDetail from "../../src/components/profile/PostDetail";

//   const profileData = users.find((user) => user.userId == profileId);

//   return profileData ? (
//     <ScrollView contentContainerStyle={styles.container}>
//       <About
//         img={profileData.img}
//         name={profileData.name}
//         bio1={profileData.bio1}
//         bio2={profileData.bio2}
//         followers={profileData.followers}
//         following={profileData.following}
//         postNum={myPosts.length}
//       />
//       {/* Үндсэн пост хэсэг */}
//       <Posts data={myPosts} />
//     </ScrollView>
//   ) : (
//     <View style={styles.notfound}>
//       <Text style={styles.notfoundText}> Хэрэглэгч олдсонгүй</Text>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     padding: 8,
//     flex: 1,
//   },
//   notfound: { flex: 1, justifyContent: "center", alignItems: "center" },
//   notfoundText: {
//     textAlign: "center",
//     fontSize: 24,
//   },
// });
