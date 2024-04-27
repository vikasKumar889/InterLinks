import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import SignUpForCompany from '../screens/jobposting/SignUpForCompany';
import CompanyDashboard from '../screens/jobposting/CompanyDashboard';

const STACK = createStackNavigator()
const JobPostingNavigator = () => {
  return (
    <STACK.Navigator>
      <STACK.Screen
        name="LoginForCompany"
        component={LoginForCompany}
        options={{headerShown: false}}
      />
      <STACK.Screen
        name="SignUpForCompany"
        component={SignUpForCompany}
        options={{headerShown: false}}
      />
      <STACK.Screen
        name="CompanyDashboard"
        component={CompanyDashboard}
        options={{headerShown: false}}
      />
      
    </STACK.Navigator>
  );
};

export default JobPostingNavigator;
