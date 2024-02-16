import { View, StyleSheet, Text } from "react-native";
import { Link, Redirect } from "expo-router";
import { router } from "expo-router";

export default function Page() {
  return (
    // <View style={styles.container}>
    //   <Redirect href={"/login"} />

    //   <Link href={"/login"}> </Link>

    <View style={styles.container}>
      <Redirect href={"/home"} />

      <Text>Page</Text>
      <Link href={"/home"}>game </Link>
      

      <View style={[styles.xogame, styles.shadow]}>
        <Link href="/login">
          {" "}
          <Text style={styles.text1}>login</Text>
        </Link>
      </View>


      <View style={[styles.movie, styles.shadow]}>
        <Link href="/Movie">
          {" "}
          <Text style={styles.text1}>Movie</Text>
        </Link>
      </View>

      <View style={[styles.xogame, styles.shadow]}>
        <Link href="/XOgame">
          {" "}
          <Text style={styles.text1}>XOgame</Text>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'#55a630',
  },
  movie: {
    // width:150,
    // height:120,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'#ffd500',
    // borderRadius:15,
    // color:'white',
    // margin:5,
    // fontSize:20,
  },

  xogame: {
    // width:150,
    // height:120,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'#ffd500',
    // color:'white',
    // borderRadius:15,
    // margin:5,
    // fontSize:20
  },
  //   shadow:{
  //     shadowColor: "#000",
  // shadowOffset: {
  // 	width: 0,
  // 	height: 12,
  // },
  // shadowOpacity: 0.58,
  // shadowRadius: 16.00,

  // elevation: 24,
  //   },
  text1: {
    // fontSize:36
  },
});
