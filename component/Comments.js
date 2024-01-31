import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Comments = ({ data }) => {
  return (
    <View style={[styles.row, styles.gap10]}>
      <Image source={{ uri: data.imgs }} style={styles.proImg} />
      <View>
        <Text style={styles.commentUser}>{data.userid}</Text>
        <Text style={styles.comment}>{data.comment}</Text>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  proImg: {
    width: 29,
    height: 29,
    borderRadius: 500,
  },
  gap10: {
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  commentUser: {
    fontSize: 15,
    fontWeight: "600",
  },
  comment: {
    fontSize: 15,
  },
});
