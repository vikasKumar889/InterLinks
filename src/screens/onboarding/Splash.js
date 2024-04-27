import {View, Text, StyleSheet, Image} from 'react-native';
import React, { useEffect } from 'react';
import {BG_COLOR, TEXT_COLOR} from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
const navigation = useNavigation()
useEffect(()=>{
  console.log('Hello')
  setTimeout(()=>{
    console.log('World')
    navigation.navigate('SelectUser')
  }, 3000)
},[])

  return (
    <View style={styles.container}>
      <Image source={require('../../images/Logo.png')} style={styles.logo} />
      <Text style={styles.name}>OuterLinks</Text>
      <Text style={styles.description}>Proffesional Community</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the container expands to fill the available space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TEXT_COLOR,
    
  },
  name: {
    fontSize: 35,
    fontWeight: '600',
    color: BG_COLOR,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: -55,
  },
  description:{
    fontSize:18,
    fontWeight:'400',
  
  }
});
