import { View, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
      <View style={styles.row}>
        {comment.map((comment) => (
          <View style={[styles.row, styles.gap13]}>
            <Image source={{ uri: comment.img }} style={styles.pro} />
            <View>
              <Text style={styles.commentUser}>{comment.userId}</Text>
              <Text style={styles.comment}>{comment.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pro: {
    width: 37,
    height: 37,
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
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
