import { StyleSheet, Text, View, TextInput, ScrollView, StatusBar } from "react-native";
import React from "react";
import Movieapp from "./Movieapp";
import { useState } from "react";

const Movie = () => {
  const movies = [
    {
      image: require("../component/img/avengers.jpg"),
      name: "The Avengers",
      description: "Superheroes team up to save the world.",
    },
    {
      image: require("../component/img/spider-man.jpg"),
      name: "Spider-Man: Into the Spider-Verse",
      description: "An animated adventure with multiple Spider-People.",
    },
    {
      image: require("../component/img/ironman.jpg"),
      name: "Iron man 3",
      description:
        "Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man",
    },
    {
      image: require("../component/img/thor_love_and_thunder_dc.jpg"),
      name: "Thor: Love and Thunder",
      description:
        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    },
  ];
  const [text, setText] = useState("");
  const onSearch = (e) => {
    const text = e.target.value;
    setText(text);
  };
  const list = movies.filter((movie) =>
    movie.name.toLowerCase().includes(text.toLocaleLowerCase())
  );

  return (
    <View style={[styles.App , styles.shadowapp]}>
      <Text style={styles.Texth1}>Таньд санал болгох киноны жагсаалт</Text>
      <Text style={styles.Texth3}>Адал явдалт, тулаант</Text>
      <TextInput style={[styles.hailt , styles.shadow]} type="text" onChange={onSearch} placeholder="Хайлт" />

      <ScrollView horizontal={true}   style={styles.movieList}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          {list.map((movie) => (
            <Movieapp
              image={movie.image}
              name={movie.name}
              description={movie.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
    App: {
        paddingTop: StatusBar.currentHeight,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0d1b2a'
  
    }, 
    shadowapp:{
        shadowColor: "#e9ecef",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,
    },
    Texth1:{
        fontSize:20,
        color:'whte'
    },
    Texth3:{
        fontSize:15,
        color:'white'

    },
    hailt:{
        fontSize:15,
        backgroundColor:'white',
        width:150,
        borderRadius:5,
        margin:5,
      
    }, shadow:{
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
    }
 
    }
);
