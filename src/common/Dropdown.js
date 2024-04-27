import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TEXT_COLOR } from '../utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dropdown = ({title,placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
      <TouchableOpacity><View style={styles.inpbox}>
       <Text style={styles.ptxt}>{placeholder}</Text>
       <Image source={require('../images/icons8-expand-arrow-90.png')} style={styles.img}/>
      </View></TouchableOpacity> 
    </View>
  )
}

export default Dropdown
const styles = StyleSheet.create({
container:{
  flex:1
},
txt:{
  fontSize:18,
  fontWeight:'600',
  color:TEXT_COLOR,
  marginLeft:20,
  marginTop:15,
  marginBottom:5
},
  inpbox:{
    paddingVertical: 10,
    paddingHorizontal: 15,
    width:'90%',
    height:49,
    marginLeft:20,
    flexDirection:'row',
    // marginLeft:20,
    backgroundColor:'lightgrey',
    borderRadius:10,
    borderWidth:1,
    borderColor:'red',
    alignItems:'center',
    justifyContent:'space-between'
  },
  ptxt:{
    
  },
  img:{
    width:15,
    height:15,
  }
})