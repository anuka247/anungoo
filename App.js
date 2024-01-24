import { StyleSheet, View } from 'react-native'
import React from 'react'
import XOgame from './movie/XOgame'
import Movieapp from './movie/Movieapp'
import Movie from './component/Movie'

const App = () => {
  return (
    <View  style={styles.container}>
     <Movie/> 
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
  }
})


