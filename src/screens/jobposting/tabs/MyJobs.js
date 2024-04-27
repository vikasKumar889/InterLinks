import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../../utils/Colors'

const MyJobs = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.txt}>MyJobs</Text>
    </View>
  )
}

export default MyJobs
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:BG_COLOR
    },
    txt:{
      fontSize:20,
      fontWeight:'600',
      marginLeft:10,
      color:TEXT_COLOR
    }

})