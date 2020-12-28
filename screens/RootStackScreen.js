import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './SignUpScreen'
import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'

const RootStack = createStackNavigator();

const RootStackScreen=()=>{
    return(
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        </RootStack.Navigator>
    )
}

export default RootStackScreen;