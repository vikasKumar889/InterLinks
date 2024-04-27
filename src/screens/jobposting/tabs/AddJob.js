import { View, Text, StyleSheet, Image, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BG_COLOR, TEXT_COLOR } from '../../../utils/Colors';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Dropdown from '../../../common/Dropdown';
import { Profile } from '../../../utils/Profile';

const AddJob = () => {
  const navigation = useNavigation();
  const AddJobSchema = Yup.object().shape({
    job: Yup.string().required(),
  });

  const img = require('../../../images/icons8-expand-arrow-90.png');
  const [openCatageryModal, setCatageryModal] = useState(false);
  const [openSkillModal , setSkillModal] = useState(false);

  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
          <Image source={require('../../../images/icons8-multiply-100.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.txt}>Post Jobs</Text>
      </View>
      <Formik
        initialValues={{ job: '' }}
        validationSchema={AddJobSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleBlur, handleSubmit, handleChange, errors, values }) => (
          <>
          <View style={styles.content}>
            <Text style={styles.title}>Job Title</Text>
            <TextInput
              placeholder="ex. web development"
              onChangeText={handleChange('job')}
              onBlur={handleBlur('job')}
              value={values.job}
              style={styles.input}
            />
            {errors.job && <Text style={styles.error}>{errors.job}</Text>}
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Job Description</Text>
            <TextInput
              placeholder="ex. this is web development job"
              onChangeText={handleChange('job')}
              onBlur={handleBlur('job')}
              value={values.job}
              style={styles.input}
            />
            {errors.job && <Text style={styles.error}>{errors.job}</Text>}
          </View>
          <Dropdown 
          onPress={()=>{
          setCatageryModal(true)
          }}
          title={'Catagery'}
          placeholder={"Select Catagery"}/>
          <Dropdown
          onPress={()=>{
            setSkillModal(true)
          }}
          title={'Skills'}
          placeholder={"Select Skills"}/>
          <View style={styles.content}>
            <Text style={styles.title}>Experience</Text>
            <TextInput
              placeholder="ex. required experience 5 years"
              onChangeText={handleChange('job')}
              onBlur={handleBlur('job')}
              value={values.job}
              style={styles.input}
            />
            {errors.job && <Text style={styles.error}>{errors.job}</Text>}
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Package</Text>
            <TextInput
              placeholder="ex. 10LPA"
              onChangeText={handleChange('job')}
              onBlur={handleBlur('job')}
              value={values.job}
              style={styles.input}
            />
            {errors.job && <Text style={styles.error}>{errors.job}</Text>}
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Company</Text>
            <TextInput
              placeholder="ex. google"
              onChangeText={handleChange('job')}
              onBlur={handleBlur('job')}
              value={values.job}
              style={styles.input}
            />
            {errors.job && <Text style={styles.error}>{errors.job}</Text>}
          </View>
          <Pressable
titleSize={20}
style={styles.loginbtn}
backgroundColor="#000">
  <Text style={styles.btntxt}>Post Job</Text></Pressable>
          </>
        )}
      </Formik>
      <Modal visible={openCatageryModal} transparent style={{flex:1}}>
        <View style={styles.main}>
          <View style={styles.main1}>
          <Text style={[styles.title,{marginTop:10,marginLeft:25}]}>Select Skills</Text>
          <FlatList data={Profile} renderItem={({item , index})=>{
           return (
           <TouchableOpacity style={styles.mtxtcontainer}>
            <Text style={styles.mtxt}>{item.category}</Text>
           </TouchableOpacity>
           );
          }}/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
    </ScrollView>
    
  );
};

export default AddJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 10,
  },
  back: {
    width: 36,
    height: 36,
  },
  txt: {
    color: TEXT_COLOR,
    fontSize: 27,
    fontWeight: '600',
    marginLeft: 15,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: TEXT_COLOR,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  loginbtn:{
    
    width:'90%',
    height:50,
    marginLeft:20,
    borderRadius:10,
    marginTop:50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems:'center'
  },
  btntxt:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
  },
  main:{
    backgroundColor:'rgba(0,0,0,0.6)',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  main1:{
    width:'80%',
    height:'90%',
    backgroundColor:BG_COLOR
  },
  mtxtcontainer:{
    width:'90%',
    height:40,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignSelf:'center',
    
  },
  mtxt:{
    color:'black',
    borderBottomWidth:1
  }
});
