import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View  >
            <Text style={styles.garchig}>Миний тухай:</Text>

            <View style={styles.container} >
         
                <View style={styles.profile}>
                <Text style={styles.h2} >Profile</Text>
                <Text style={styles.text1} >B. Anungoo</Text>
                <Image style={styles.img} source={require('../img/my-img.jpg')}/>
                
                </View>

                <View style={styles.taniltsuulga}>
                <Text>Born:  October 27, 2008 (age 16) </Text>
                </View>

          

            {/* <View style={styles.container}>
            <Text>minii hoobi:</Text>
            </View> */}

        </View>
        </View>
      
    )
}

export default About

const styles = StyleSheet.create({
    container:{
        width:390,
        height:690,
        borderRadius:20,
        margin:10,
        backgroundColor:'#ffffff',
  
    },
    garchig:{
        fontSize:20,
    }, 
    profile:{
        backgroundColor:'#fb6f92',
        justifyContent: 'flex-start',
        alignItems:'center',
        borderRadius:20,
        borderBottomEndRadius:20,
        height:250,
    
    },
    text1:{
        fontSize:26, 
        top:72, 
        color:'white'
     
      },
      img:{
        margin:5,
        width:170,
        height:170,
        borderRadius:500,
        top:82,
     
      },
      h2:{
        fontSize:22,
        color:'white'
      },



})