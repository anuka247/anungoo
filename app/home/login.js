import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../../services/firebaseConfig";
import { View, Text } from "react-native";
import React from "react";

import { View, Text } from "react-native";
import React from "react";

const login = () => {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

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

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        console.log("signed in ");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>instagram </Text>
      <TouchableOpacity style={styles.gmailbtn}>
        <TextInput
          onChangeText={(text) => setemail(text)}
          style={styles.text}
          placeholder="e-mail"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.passwordbtn}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.text}
          placeholder="password"
          secureTextEntry={true}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotbtn}>
        <Text style={styles.text2}>forgot Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn} style={styles.loginbtn}>
        <Text style={styles.text1}>Log In </Text>
      </TouchableOpacity>
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
  forgotbtn: {},
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
    fontSize: 16,
    color: "gray",
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
    width: 390,
    height: 50,
    margin: 10,
  },
});
