import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { BG_COLOR } from '../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const Loder = () => {
  // const navigation = useNavigation()
  // useEffect( ()=>{
  //   setTimeout(() => {
  //     navigation.navigate('CompanyDashboard')
  //   }, 2000);
  // },[])
  return (
    <Modal transparent visible style={{flex:1}}>
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.5)'}}>
            <View style={{width:80,height:80,backgroundColor:BG_COLOR,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={'large'}/> 
            </View>
        </View>
    </Modal>
  )
}

export default Loder