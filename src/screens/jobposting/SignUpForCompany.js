import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import { ErrorMessage, Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Loder from '../../common/Loder';

const LoginForCompany = () => {
  const navigation = useNavigation()
  const LoginForCompanySchema = Yup.object().shape({
    email: Yup.string().email().required('An email must be required'),
    password: Yup.string().required().min(8,"Your password has at least 8 characters"),
    name: Yup.string().required().min(4,"Your name has at least 4 characters").max(16,"Your name has not more than 16 characters"),
    company:Yup.string().required(),
    address: Yup.string().required(),
    number: Yup.string().required("Number must be 10 digit")
  })
  // const onLogin = (values)=>{
  //   console.log("values",values)
  // }

  const [loading , setLoading] = useState(false);
  return (
    <ScrollView><View style={styles.container}>
    <Image source={require('../../images/Logo.png')} style={styles.logo}></Image>
    <Text style={styles.txt}>Create Account</Text>
    <Formik 
    initialValues={{username:"",email: "",moblie:"", company:"",address:"",password: ""}}
    validationSchema={LoginForCompanySchema}
    onSubmit={(values)=>{
      
      console.log(values)
      
    }}>
{({handleChange,handleBlur,handleSubmit,errors, values,isValid})=>(
<>
 <View style={styles.email}>
  <TextInput
  placeholderTextColor="#444"
  backgroundColor="#FFF"
  placeholder="username"
  autoCapitalize="none"
  keyboardType="name-phone-pad"
  autoFocus={true}
  onChangeText={handleChange("name")}
  onBlur={handleBlur("name")}
  value={values.name}
  style={styles.emailbox}>

  </TextInput>
  {errors.name && (<Text style={{color:'red',fontSize:13}}>{errors.name}</Text>)}
</View>
<View style={styles.email}>
  <TextInput
  placeholderTextColor="#444"
  backgroundColor="#FFF"
  placeholder="email"
  autoCapitalize="none"
  keyboardType="email-address"
  autoFocus={false}
  onChangeText={handleChange("email")}
  onBlur={handleBlur("email")}
  value={values.email}
  style={styles.emailbox}>

  </TextInput>
  {errors.email && (<Text style={{color:'red',fontSize:13}}>{errors.email}</Text>)}
</View>
<View style={styles.email}>
  <TextInput
  placeholderTextColor="#444"
  backgroundColor="#FFF"
  placeholder="number"
  autoCapitalize="none"
  keyboardType="number-pad"
  // autoFocus={true}
  onChangeText={handleChange("number")}
  onBlur={handleBlur("number")}
  value={values.number}
  style={styles.emailbox}>

  </TextInput>
  {errors.number && (<Text style={{color:'red',fontSize:13}}>{errors.number}</Text>)}
</View>
<View style={styles.email}>
  <TextInput
  placeholderTextColor="#444"
  backgroundColor="#FFF"
  placeholder="company"
  autoCapitalize="none"
  keyboardType="default"
  // autoFocus={true}
  onChangeText={handleChange("company")}
  onBlur={handleBlur("company")}
  value={values.company}
  style={styles.emailbox}>

  </TextInput>
  {errors.company && (<Text style={{color:'red',fontSize:13}}>{errors.company}</Text>)}
</View>
<View style={styles.email}>
  <TextInput
  placeholderTextColor="#444"
  backgroundColor="#FFF"
  placeholder="address"
  autoCapitalize="none"
  keyboardType="email-address"
  // autoFocus={true}
  onChangeText={handleChange("address")}
  onBlur={handleBlur("address")}
  value={values.address}
  style={styles.emailbox}>

  </TextInput>
  {errors.address && (<Text style={{color:'red',fontSize:13}}>{errors.address}</Text>)}
</View>
<View style={styles.password}>
  <TextInput
  placeholderTextColor="#444"
  backgroundColor="#FFF"
  placeholder='Password'
  autoCapitalize='none'
  autoCorrect={false}
  secureTextEntry={true}
  textContentType='password'
  onChangeText={handleChange("password")}
  onBlur={handleBlur('password')}
  value={values.password}
  style={styles.passwordbox}>

  </TextInput>
  {errors.password && (<Text style={{color:'red',fontSize:13}}>{errors.password}</Text>)}
</View>
{/* <View style={{width:'90%',alignItems:'flex-end'}}>
  <Text style={{color:"#FFF"}}>Forgot password?</Text>
</View> */}
<Pressable
titleSize={20}
style={styles.loginbtn(isValid)}
onPress={handleSubmit}
backgroundColor="#FFF"
disabled={!isValid}>
  <Text style={styles.btntxt}>Sign Up</Text></Pressable>

<Pressable style={styles.signupbtn}
  onPress={()=>{
    navigation.goBack()
  }}
  ><Text style={styles.btntxt2}>Log in</Text></Pressable>
</>
)}
    </Formik>
  </View>
<Loder visible={ loading}/>
  </ScrollView>
    
  )
}

export default LoginForCompany

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:TEXT_COLOR
  },
  logo:{
    width:200,
    height:200,
    marginBottom:30
  },
  txt:{
    color:BG_COLOR,
    fontSize:30,
    fontWeight:'800',
    marginTop:-30,
    marginBottom:10,
  },
  email:{
    width:'90%',
    marginTop:30,
  
  },
  password:{
   width:'90%',
   marginTop:30
  },
  emailbox:{
    padding:10,
    borderRadius:10,
  },
  passwordbox:{
    padding:10,
    borderRadius:10
  },
  loginbtn:(isValid)=>({
    backgroundColor: isValid ? "#0096F6" : "#76ABAE",
    width:'90%',
    minHeight:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:40
  }),
  btntxt:{
    color:TEXT_COLOR,
    fontWeight:'800',
    fontSize:18
  },signupbtn:{
    width:'90%',
    minHeight:45,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:10,
    marginTop:20,
    marginBottom:20,
    backgroundColor:'#FFF'
  },
  btntxt2:{
    color:TEXT_COLOR,
    fontWeight:'700',
    fontSize:18
  }
})