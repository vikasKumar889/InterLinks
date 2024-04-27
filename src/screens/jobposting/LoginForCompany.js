import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import * as Yup from "yup";
import { ErrorMessage, Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const LoginForCompany = () => {
  const navigation = useNavigation()
  const LoginForCompanySchema = Yup.object().shape({
    email: Yup.string().email().required('An email must be required'),
    password: Yup.string().required().min(8,"Your password has at least 8 characters"),
    
  })
  // const onLogin = (values)=>{
  //   console.log("values",values)
  // }
  return (
    <View style={styles.container}>
      <Image source={require('../../images/Logo.png')} style={styles.logo}></Image>
      <Text style={styles.txt}>Login</Text>
      <Formik 
      initialValues={{email: "", password: ""}}
      validationSchema={LoginForCompanySchema}
      onSubmit={(values)=>{
        navigation.navigate('CompanyDashboard')
        console.log(values)
      }}>
{({handleChange,handleBlur,handleSubmit,errors, values,isValid})=>(
  <>
  <View style={styles.email}>
    <TextInput
    placeholderTextColor="#444"
    backgroundColor="#FFF"
    placeholder="Phone number, username or email"
    autoCapitalize="none"
    keyboardType="email-address"
    autoFocus={true}
    onChangeText={handleChange("email")}
    onBlur={handleBlur("email")}
    value={values.email}
    style={styles.emailbox}>

    </TextInput>
    {errors.email && (<Text style={styles.errorTxt}>{errors.email}</Text>)
    }
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

    </TextInput>{errors.password && (<Text style={styles.errorTxt}>{errors.password}</Text>)
    }
  </View>
  <View style={{width:'90%',alignItems:'flex-end'}}>
    <Text style={{color:"#FFF"}}>Forgot password?</Text>
  </View>
  <Pressable
  titleSize={20}
  style={styles.loginbtn(isValid)}
  onPress={handleSubmit}
  backgroundColor="#FFF"
  disabled={!isValid}>
    <Text style={styles.btntxt}>Log IN</Text></Pressable>
    <Pressable style={styles.signupbtn}
    onPress={()=>{
      navigation.navigate('SignUpForCompany')
    }}
    ><Text style={styles.btntxt2}>Create Account</Text></Pressable>
  </>
)}
      </Formik>
    </View>
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
    marginTop:10,
  
  },
  password:{
   width:'90%',
   marginTop:20
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
    marginTop:25
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
    backgroundColor:'#FFF'
  },
  btntxt2:{
    color:TEXT_COLOR,
    fontWeight:'700',
    fontSize:18
  },
  errorTxt:{
    color:'red',
    
    fontSize:13,

  }
})