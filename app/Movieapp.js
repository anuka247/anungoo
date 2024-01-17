import { StyleSheet, Text, View , Image ,StatusBar} from 'react-native'
import React from 'react'


const Movieapp = ({ image, name, description }) => {
  return (
    <View style={styles.movieCard}>
            <View style={styles.deed} >
              <Image style={styles.img} source={image}/>
                <Text style={styles.Text}>{name}</Text>
                <Text style={styles.Texth2}>{description}</Text>
            </View>
            {/* <Stars /> */}
            {/* <Counter /> */}
        </View>
    
  )
}

export default Movieapp

const styles = StyleSheet.create({
  img:{
    width: 380,
    height: 350,
  },
  deed:{
    backgroundColor:'#343a40'

  },
      
      Text :{
        fontSize: 18,
        marginBottom: 10,
        color:'#ced4da'
      },
      
      movieList :{
        justifycontent:'center',
        margintTop: 20,
      },
      
      movieCard:{
        borderRadius: 8,
        padding: 10,
        margin: 10,
        width: 400,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#343a40',
      
      },
      
      Texth2: {
        fontSize: 16,
        marginBottom: 10,
        color:'#adb5bd'
      },
      
      rating :{
        justifyContent: 'center',
        fontsize: 24,
      },
      
      span: {
        cursor: 'pointer',
        margin: 3,
      },
      
      filled :{
        color: 'gold',
      },
      movieimage: {
        width: 100,
        height: 60,
        borderRadius: 8,
        objectFit: 'cover',

      },
      
      movieaCardh2: {
        fontSize: 16,
        margin: 5,
        
      },
      
    
})