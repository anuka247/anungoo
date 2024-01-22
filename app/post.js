import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PagerView from 'react-native-pager-view';

const postIcon = require('../home/img/postIcon.png')
const userIcon = require('../home/img/userIcon.png')

const Post = ({images}) => {

    const [selectedTab, setSetselectedTab] = useState(0)
    const onPageChange = (data) => {
        const pageNumber = data.nativeEvent.position
        console.log(pageNumber)
        setSetselectedTab(pageNumber)
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Tab buttons */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.btn, selectedTab === 0 && styles.active]}>
                    <Image source={postIcon} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selectedTab === 1 && styles.active]}>
                    <Image source={userIcon} style={styles.img} />
                </TouchableOpacity>
            </View>
            {/* Tab content */}
            <PagerView onPageSelected={onPageChange} style={styles.pagerView} initialPage={0}>
                <View key="1" style={styles.postcontainer} >
            
                   {images.map(img =>
                    <Image style={styles.postImg} source={{uri:img}} />)}
                       
                </View>
                
                <View key="2" >    
                    <Text>Second page</Text>
                </View>
            </PagerView>        
        </ScrollView>
       
        
    )
   
}

export default Post

const styles = StyleSheet.create({
    postcontainer:{
        gap:3,
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap', 
    },
    postImg:{
        width:'32.5%',
        aspectRatio:1,
        height:1, 
    },

    btn: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 16,
        paddingTop: 14
    },
    active: {
        borderBottomWidth: 2,

    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img: { backgroundColor: 'black' },
    container: {
        flex: 1
    },
    pagerView: {
        flex: 1,
    },
})