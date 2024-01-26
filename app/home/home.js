import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Text style={styles.garchig} >Instagram </Text>
            <Feather name="send" size={24} color="black" style={styles.icon} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    icon:{},
    garchig:{
        fontSize:20,
    },  row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },


})