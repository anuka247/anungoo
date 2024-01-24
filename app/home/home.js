import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.garchig}>
            <Text style={styles.garchig} > Instagram </Text>
            
            </View>
         
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    garchig:{
        fontSize:20,
    }


})