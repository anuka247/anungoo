import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Layout from "../component/Layout";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { getUserData } from "../services/users";

const proImg =
  "https://scontent.fuln4-3.fna.fbcdn.net/v/t39.30808-6/398112303_2377536509116252_1437881459049845734_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=_SERBeyMtGkAX9NfbQA&_nc_ht=scontent.fuln4-3.fna&oh=00_AfAWZpXieDUNuB4EDLV5OmkBPLLeKpaZVrPjG12rjJXz6A&oe=65C710DF";
const Edit = () => {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  const [user, setUser] = useState({
    userId: getAuth().currentUser.email,
    name: "",
    bio1: "",
    bio2: "",
  });
  // Нэвтэрсэн хэрэглэгчийн email
  const email = getAuth().currentUser.email;

  useEffect(() => {
    getUserData(email);
  }, []);

  const getUserData = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    console.log("USER", user);
    if (docSnap.exists()) {
      console.log("document data:", docSnap.data);
      setUser(docSnap.data);
    } else {
      console.log("no");
    }

    const save = async () => {
      try {
        // Add a new document in collection "cities"
        const userRef = doc(db, "users", email);
        await setDoc(userRef, user);

        console.log("SAVED");
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    return (
      <Layout>
        {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
        {!isPresented && <Link href="../">Dismiss</Link>}
        {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
        <StatusBar style="light" />
        <View style={styles.container}>
          <Image style={styles.proimg} source={{ uri: proImg }} />
          <TextInput
            editable={false}
            value={user.userId}
            placeholder="userId"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setUser({ ...user, name: text })}
            value={user.name}
            placeholder="name"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setUser({ ...user, bio1: text })}
            value={user.bio1}
            placeholder="bio1"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setUser({ ...user, bio2: text })}
            value={user.bio2}
            placeholder="bio2"
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Save</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    );
  };
};
export default Edit;

const styles = StyleSheet.create({
  btntext: { color: "white" },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#1877F2",
  },
  proimg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
  },
  container: {
    padding: 10,
    gap: 10,
  },
  input: {
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 1,
    padding: 8,
  },
});
