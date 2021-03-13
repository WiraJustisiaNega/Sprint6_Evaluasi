import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomNavigation, createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

import Home from '../screen/Home'
import SplashScreen from '../screen/Splashscreen'
import Profile from '../screen/Profile';
import Welcome from '../screen/Welcome';
import Signup from '../screen/Signup';
import Detail from '../screen/detail';

const Bawah = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home}/>
      <Bottom.Screen name="Profile" component={Profile}/>
    </Bottom.Navigator>
  )
}
const Auth = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen}/>
      <Stack.Screen name="Selamat Datang" component={Welcome}/>
      <Stack.Screen name="Sign up" component={Signup}/>
      <Stack.Screen name="Home" component={Bottom}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
  )
}

export default Auth;