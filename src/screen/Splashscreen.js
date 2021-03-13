import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SplashScreen({navigation}) {
    useEffect(() => {
        return () => {
        }
    }, 5000 [navigation.navigate('Welcome')])

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'skyblue' }}>
        <Text style={{fontSize:40 }}>WOKE App</Text>
        <ActivityIndicator size="large"/> 
      </View>
    );
  }

export default SplashScreen