import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';
import Splash from '../screen/splash';

const Bottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Shalat" component={Register}/>  
      <Tab.Screen name="Akun" component={Login} />
    </Tab.Navigator>
  )
}

const Auth = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
      <Stack.Screen name="Home" component={Bottom} options={{ headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Auth;
