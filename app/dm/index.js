import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import PagerView from "react-native-pager-view";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import DmItem from "../../component/DmItem";
import { chats } from "../../data";

const Dm = () => {
  const navigation = useNavigation();
  const [selectedTab, setSetselectedTab] = useState(0);
  const onPageChange = (data) => {
    const pageNumber = data.nativeEvent.position;
    console.log(pageNumber);
    setSetselectedTab(pageNumber);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Direct",
      headerRight: () => (
        <View style={styles.row}>
          <TouchableOpacity>
            <AntDesign name="videocamera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="pencil-square-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, selectedTab === 0 && styles.active]}
        >
          <Text>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, selectedTab === 1 && styles.active]}
        >
          <Text>Rooms</Text>
        </TouchableOpacity>
      </View>
      <PagerView
        onPageSelected={onPageChange}
        style={styles.pagerView}
        initialPage={0}
      >
        <View key="1" style={styles.postcontainer}>
          {chats.map((chat) => (
            <Link href={"/chats/" + chat.id} asChild>
              <TouchableOpacity>
                <DmItem data={chat} />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        <View key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
    </View>
  );
};

export default Dm;

const styles = StyleSheet.create({
  postcontainer: {},
  row: {
    flexDirection: "row",
    gap: 10,
  },

  container: {
    flex: 1,
  },
  imgBtn: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  postContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 3,
    flexWrap: "wrap",
    padding: 10,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 14,
  },
  active: {
    borderBottomWidth: 2,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: { backgroundColor: "black" },

  pagerView: {
    flex: 1,
  },
});

// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigation } from "expo-router";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import PagerView from "react-native-pager-view";
// import { chats } from "../../data";
// import DmItem from "../../src/components/DmItem";

// // Chat screen
// const Dm = () => {
//   const navigation = useNavigation();

//   const [selectedTab, setSetselectedTab] = useState(0);
//   const onPageChange = (data) => {
//     const pageNumber = data.nativeEvent.position;
//     console.log(pageNumber);
//     setSetselectedTab(pageNumber);
//   };

//   // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerBackTitle: "Direct",
//       headerTitle: "",
//       headerRight: () => (
//         <View style={styles.row}>
//           <TouchableOpacity>
//             <AntDesign name="videocamera" size={24} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <FontAwesome name="pencil-square-o" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       ),
//     });
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       {/* Tab buttons */}
//       <View style={styles.btnContainer}>
//         <TouchableOpacity
//           style={[styles.btn, selectedTab === 0 && styles.active]}
//         >
//           <Text>Chats</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.btn, selectedTab === 1 && styles.active]}
//         >
//           <Text>Rooms</Text>
//         </TouchableOpacity>
//       </View>
//       {/* Tab content */}
//       <PagerView
//         onPageSelected={onPageChange}
//         style={styles.pagerView}
//         initialPage={0}
//       >
//         {/* Zuragtai huudas */}
//         <ScrollView key="1" contentContainerStyle={styles.postContainer}>
//           {chats.map((chat) => (
//             <Link href={"/chats/" + chat.id} asChild>
//               <DmItem data={chat} />
//             </Link>
//           ))}
//         </ScrollView>

//         <View key="2">
//           <Text>Second page</Text>
//         </View>
//       </PagerView>
//     </View>
//   );
// };

// export default Dm;

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     gap: 8,
//   },

//   container: {
//     flex: 1,
//   },
//   imgBtn: {
//     width: "32%",
//     aspectRatio: 1,
//     height: 1,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   img: { backgroundColor: "black" },

//   pagerView: {
//     flex: 1,
//   },
// });
