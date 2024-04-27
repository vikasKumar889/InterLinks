import {View, Text} from 'react-native';
import React from 'react';
import Splash from '../screens/onboarding/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SelectUser from '../screens/onboarding/SelectUser';
import JobPostingNavigator from './JobPostingNavigator';
import JobSearchingNavigator from './JobSearchingNavigator';
import CompanyDashboard from '../screens/jobposting/CompanyDashboard';
import AddJob from '../screens/jobposting/tabs/AddJob';
import MyJobs from '../screens/jobposting/tabs/MyJobs';

const STACK = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="SelectUser"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="AddJob"
          component={AddJob}
          options={{headerShown: false}}
        />
        {/* <STACK.Screen
          name="MyJobs"
          component={MyJobs}
          options={{headerShown: false}}
        /> */}
        <STACK.Screen
          name="JobPostingNavigator"
          component={JobPostingNavigator}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="JobSearchingNavigator"
          component={JobSearchingNavigator}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="CompanyDashboard"
          component={CompanyDashboard}
          options={{headerShown: false}}
        />
      </STACK.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
