import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { signin, signup } from "../services/Authentication";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../services/firebaseConfig";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

const logoImg = require("../app/img/img/logos_instagram.png");

const login = () => {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [hidepassword, setHidepassword] = useState(true);
  const togglePassword = () => {
    setHidepassword(!hidepassword);
  };

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        console.log("account created ");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        console.log("amjilttai nevterlee");
        const user = userCredential.user;
        setError("");
        router.push("home");
      })
      .catch((error) => {
        const message = error.message;
        const code = error.code;
        console.log("aldaa garlaa", code, message);
        if (code == "auth/invalid-credential") {
          setError("nevtreh ner esvel nuuts ug baihgui bn ");
        }
      });
  };

  // const handleSignin = async () => {
  //   try {
  //     const response = await signin(email, password);
  //     console.log("Amjilttai nevterlee", response);
  //     setError("");
  //     router.push("home");
  //   } catch (error) {
  //     const message = error.message;
  //     const code = error.code;
  //     // console.log("Aldaa garlaa", code, message);
  //     if (code == "auth/invalid-credential") {
  //       setError("Нэвтрэх нэр эсвэл нууц үг олдсонгүй");
  //     }
  //   }
  // };
  return (
    <View style={styles.container}>
      <Image style={styles.title} source={logoImg} />
      <TouchableOpacity style={styles.gmailbtn}>
        <TextInput
          onChangeText={(text) => setemail(text)}
          style={styles.text}
          placeholder="e-mail"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.passwordbtn}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
            secureTextEntry={hidepassword}
          />
          <TouchableOpacity onPress={togglePassword}>
            <Entypo name="eye" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotbtn}>
        <Text style={styles.text2}>forgot Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignin} style={styles.loginbtn}>
        <Text style={styles.text1}>Log In </Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity onPress={handleCreateAccount} style={styles.loginbtn}>
        <Text style={styles.text1}>Create Account </Text>
      </TouchableOpacity>
      <Text> or </Text>

      <TouchableOpacity>
        <Text style={styles.text2}>Continue as Anungoo Anu </Text>
      </TouchableOpacity>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  error: {
    color: "red",
    alignItems: "center",
    fontSize: 18,
  },

  text2: {
    color: "#0096c7",
  },
  text1: {
    fontSize: 16,
    color: "white",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
  },
  loginbtn: {
    borderRadius: 8,
    width: 390,
    height: 50,
    margin: 10,
    backgroundColor: "#0096c7",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    marginBottom: 10,
  },
  gmailbtn: {
    borderWidth: 1,
    borderRadius: 8,
    width: 390,
    height: 50,
    margin: 10,
  },

  passwordbtn: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 390,
    height: 50,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
