import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BG_COLOR } from '../../utils/Colors'
import MyJobs from './tabs/MyJobs'
import Search from './tabs/Search'
import Chat from './tabs/Chat'
import Profile1 from './tabs/Profile1'
import { useNavigation } from '@react-navigation/native'

const CompanyDashboard = () => {
  const [selected , setSelected] = useState(0);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {selected==0?<MyJobs/>:selected==1?<Search/>:selected==2?<Chat/>:<Profile1/>}
      <View style={styles.bottomicon}>
        <TouchableOpacity style={[styles.icons_container,{borderTopWidth:selected==0?3:0, borderColor:'black'}]}
        onPress={()=>{setSelected(0)}}>
       <Image source={require('../../images/icons8-home-96.png')} style={[styles.icontab,{tintColor: selected==0?'black':'#503C3C'}]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icons_container,{borderTopWidth:selected==1?3:0, borderColor:'black'}]} 
        onPress={()=>{setSelected(1)}}>
       <Image source={require('../../images/icons8-search-100.png')} style={[styles.icontab,{tintColor:selected==1?'black':'#503C3C'}]}/> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons_container}
        onPress={()=>{navigation.navigate('AddJob')}}>
        <Image source={require('../../images/icons8-add-new-100.png')} style={styles.icontab}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icons_container,{borderTopWidth: selected==2?3:0, borderColor:'black'}]}
        onPress={()=>{setSelected(2)}}>
        <Image source={require('../../images/icons8-speech-bubble-96.png')} style={[styles.icontab,{tintColor: selected==2?'black':'#503C3C'}]}/> 
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icons_container,{borderTopWidth: selected==3?3:0, borderColor:'black'}]}
        onPress={()=>{setSelected(3)}}>
       <Image source={require('../../images/icons8-user-96.png')} style={[styles.icontab,{tintColor: selected==3?'black':'#503C3C'}]}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CompanyDashboard

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
   bottomicon:{
      width:'100%',
      height:70,
      bottom:0,
      shadowColor: 'rgba(0,0,0,.5)',
      shadowOpacity:.6,
      shadowOffset:{x:0, y:1},
      position:'absolute',
      backgroundColor:BG_COLOR,
      alignItems:'center',
      justifyContent:'space-evenly',
      flexDirection:'row'

   },
   icons_container:{
    width:45,
    
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
   },
   icontab:{
    width:30,
    height:30,
   }
})
