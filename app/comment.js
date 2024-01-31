import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { postData } from "../data";
import React, { useEffect } from "react";
import Comments from "../component/Comments";
export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  const params = useLocalSearchParams();
  // uzuuleh yostoi postiin dugaar
  const postId = params.postId;
  const data = postData.find((post) => post.id == postId);
  const comment = data.comments;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

      {/* Comments */}
      <View style={styles.commentcontainer}>
        {data.comments?.map((comment) => (
          <Comments data={comment} />
        ))}

        {/* Write comment */}
        <View style={[styles.row, styles.gap10]}>
          <Image style={styles.pro} source={require("../app/img/my-img.jpg")} />
          <View>
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor={"#858585"}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  gap10: {
    gap: 10,
  },
  pro: {
    width: 37,
    height: 37,
    borderRadius: 500,
  },
  commentcontainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
    gap: 8,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
