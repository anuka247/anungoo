import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router'
import { getPostById } from '../../data/index'

const Post = () => {
    const navigation = useNavigation()
    const params = useLocalSearchParams()
    const postData = getPostById(params.id)

    console.log('id', params.id);
    console.log('postData', postData);

    // Хуудас анхны дуудагдах үед доторхи код 1 удаа ажиллана
    useEffect(() => {
        // Пост хуудсан дээр толгой хэсгийг харуулах 
        navigation.setOptions({ headerShown: true, headerTitle: 'Post' })
    }, [])

    return (
        <View style={styles.container} >
{/*profile hayg */}
            <View  style={styles.profileHayg} >
            <Image style={styles.pro} source={require('../img/my-img.jpg')}/>
            <Text style={styles.text1} >B.Anungoo</Text>
                 </View>
{/* zurag */}
            <View style={styles.images}>
            <Image style={styles.img} source={{ uri: postData.img }}  />
            </View>
{/* like  */}
            <View style={styles.like} >

            </View>
{/* tailbar */}
            <View style={styles.desc} >
            <Text>{postData.desc}</Text>
            <Text> </Text>
            </View>

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    text1:{
        fontSize:18,
    },
    profiledesc:{

    },
    pro:{
        width:45,
        height:45,
        borderRadius:500,
   },
    like:{
        borderWidth:1,
        width:400,
        height:45,
    },
    profileHayg:{
        borderWidth:1,
        width:400,
        height:45,
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    desc:{
        justifyContent: 'flex-start',
        alignItems:'flex-start'
    },
    container:{
      flex:1,
      margin:5,
    },
    images:{
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:400,
        height:400,

    },
})