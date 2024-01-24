import { StyleSheet, Text, View ,Image, TouchableOpacity,  TabView ,ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import Post from '../post';
import { FlatList } from 'react-native-gesture-handler';

const Profile = () => {
    
    const postimages=[
       'https://plus.unsplash.com/premium_photo-1692455906215-dff2237582d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1533536201350-93ebe24101f5?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1530510004231-720218d936da?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1609813744174-a0df83d477fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1704439735567-11af78b213e3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1678801868960-a0ab87e23f02?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
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
           <Post images={postimages}/>
            </ScrollView>
    )
}

export default Profile

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
    // tabicon:{
    //     flexDirection:'row',
    //     justifyContent:'space-around',
    //     backgroundColor:'gray',
    // },
    // tabbtn:{
    //     flex:1,
    //     alignItems:'center',
    //     paddingBottom:12,
        
    // },
    // activetab:{
    //     borderBottomColor:'white',
    //     borderBottomWidth:2,

    // },
    // tabcontainer:{
    //     flexDirection:'row',
    //     justifyContent:'space-around',
    //     backgroundColor:'gray',
    //     padding:12,
    //     paddingBottom:1,
    // },


    // btn: {
    //     flex: 1,
    //     alignItems: 'center',
    //     paddingBottom: 16,
    //     paddingTop: 14
    // },
    // active: {
    //     borderBottomWidth: 2,

    // },
    // btnContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around'
    // },
    // img: { backgroundColor: 'black' },
    // container: {
    //     flex: 1
    // },
    // pagerView: {
    //     flex: 1,
    // },

})