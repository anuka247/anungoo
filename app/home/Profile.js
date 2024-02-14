import { StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { about, postData } from "../../data/index";
import About from "../../component/About";
import Post from "../../component/Post";
import { getNews } from "../../services/firebaseConfig";

const Profile = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((res) => {
      console.log("size", res.size);

      let tmpnews = [];
      res.docs.map((doc) => {
        console.log("DOC DATA", doc.data());
        tmpnews.push(doc.data());
      });

      setNews(tmpnews);
    });
  }, []);
  console.log("news", news);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {news.map((n) => {
        console.log("-----n", n.followers, n);
        return (
          <About
            img={n.img}
            name={n.name}
            bio1={n.bio1}
            bio2={n.bio2}
            followers={n.followers}
            following={n.following}
            postNum={postData.length}
          />
        );
      })}
      {/* <About
        img={about.img}
        name={about.name}
        bio1={about.bio1}
        bio2={about.bio2}
        followers={about.followers}
        following={about.following}
        postNum={postData.length}
      /> */}
      {/* Үндсэн пост хэсэг */}
      <Post data={postData} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "blue",
  },

  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    padding: 8,
    flex: 1,
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 170 / 2,
    // top:97,
  },
  followerText: {
    fontSize: 17,
    fontWeight: "bold",
  },

  follower: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  followerItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  followerHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bio: {
    marginBottom: 8,
  },
  biotext1: {
    fontSize: 20,
    fontWeight: "bold",
  },

  biotext2: {
    fontSize: 20,
    color: "#C0B6B6",
  },
  edit: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  editbtn: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  editText: {
    fontSize: 18,
    fontWeight: "400",
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sug: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  icon: {
    width: 27,
    height: 27,
  },
});

// PS C:\Users\usp\Project1> git remote -v
// origin  https://github.com/anuka247/anungoo.git (fetch)
// origin  https://github.com/anuka247/anungoo.git (push)
// PS C:\Users\usp\Project1> git clone https://github.com/anuka247/anungoo.git^C
// PS C:\Users\usp\Project1> npm install^C
