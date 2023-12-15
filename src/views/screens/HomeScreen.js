import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../const/color'
const {height} = Dimensions.get('window')

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, color: Colors.white}}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen