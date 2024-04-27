import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { BG_COLOR, BTN_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import LoginForCompany from '../jobposting/LoginForCompany'

const SelectUser = () => {
const navigation=useNavigation()
  return (
    <View style={styles.container }>
      <Image source={require('../../images/Logo.png')} style={styles.logo}/>
      <Text style={styles.tex}>What you are looking for?</Text>
      <TouchableOpacity style={styles.wanttohire}onPress={()=>{
          navigation.navigate('JobPostingNavigator')
        }}>
        
        <Text style={styles.btntxt} >Want to Hire Candidate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wanttojob}>
        <Text style={styles.btntxt2}>Want to Get a Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectUser

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:TEXT_COLOR
    },
    tex:{
      color:BG_COLOR,
      fontSize:21,
      fontWeight:'500'
    },
    wanttohire:{
      backgroundColor:BG_COLOR,
      height:45,
      width: 300,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10,
      marginTop:20
    },
    btntxt:{
      fontSize:18,
      fontWeight:'600',
      color:TEXT_COLOR
    },
    wanttojob:{
      backgroundColor:BTN_COLOR,
      height:45,
      width: 300,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10,
      marginTop:20
    },
    btntxt2:{
      fontSize:18,
      fontWeight:'600',
      color:TEXT_COLOR
    },
    logo:{
      width:250,
      height:250
    }
})