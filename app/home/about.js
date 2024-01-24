import { StyleSheet, Text, View ,Image, TouchableOpacity,  TabView ,ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import Post from '../../component/Post';
import { postData } from '../../data/index';

const About = () => {
    
  
    return (
        <ScrollView   contentContainerStyle={styles.container}>

            {/* zurag post follow heseg  */}
            <View style={styles.followerHeader} >
            <Image style={styles.img} source={require('../img/my-img.jpg')}/>
            
                <View style={styles.follower}>
                    <View style={styles.followerItem}>
                    <Text style={styles.followerText}>6 </Text>
                    <Text style={styles.followerText}> Posts</Text>
                    </View>
                </View>
                <View style={styles.follower}>
                    <View style={styles.followerItem}>
                    <Text style={styles.followerText}>0 </Text>
                    <Text style={styles.followerText}> Followers</Text>
                    </View>
                </View>
                <View style={styles.follower}>
                    <View style={styles.followerItem}>
                    <Text style={styles.followerText}>0 </Text>
                    <Text style={styles.followerText}> Following</Text>
                    </View>
                </View>
            </View>

            {/* bio hseg  */}
            <View  style={styles.bio }>
                <Text  style={styles.biotext1 } > B. Anungoo</Text>
                <Text  style={styles.biotext2 }>hellooo.</Text>
                <Text  style={styles.biotext2 }>byeeeeeee.</Text>

            </View>

           {/* edit */}
            <View  style={styles.edit }>
                <TouchableOpacity style={styles.editbtn } >
                    <Text style={styles.editText } >
                        Edit Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.editbtn } >
                    <Text style={styles.editText } >
                        Saved
                    </Text>
                </TouchableOpacity>
            </View> 

            {/* jijig heseg  */}
            <View style={styles.sug}  >
            <Text style={styles.Text }  >
                Suggested Highlights
                </Text>
               <Entypo name="chevron-down" size={24} color="black" /> 
               
           </View>
           <Post data={postData}/>
            </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
        backgroundColor:'blue'
      },
   
    viewPager: {
        flex: 1,
       
      },
      page: {
        justifyContent: 'center',
        alignItems: 'center',
        
      },

    container:{
        padding:8,
        flex:1,
    },
    img:{
        width:130,
        height:130,
        borderRadius:170/2,
        // top:97,
    },
      followerText:{
       fontSize:17,
       fontWeight:'bold',
    }, 

    follower:{
        flex:3,
        flexDirection:'row',
        justifyContent:'space-around',
    },

    followerItem:{
        justifyContent:'center',
        alignItems:'center',
    
    }, 
    followerHeader:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    bio:{
        marginBottom:8,
    },
    biotext1:{
        fontSize:20,
        fontWeight:'bold',
    },

    biotext2:{
        fontSize:20,
        color:'#C0B6B6'
    },
    edit:{
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    editbtn:{
        borderWidth:1,
        paddingVertical:8,
        borderRadius:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
   
    },
    editText:{
        fontSize:18,
        fontWeight:'400',
    },
    Text:{ 
        fontSize:20,
        fontWeight:'bold',

    },
    sug:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:8,
    },
    icon:{
      width:27,
      height:27,
    },

})