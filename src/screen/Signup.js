import React from 'react';
import {View,Text, TextInput,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Signup({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:'skyblue'}}>
      <View>
        <Text style={{color:'white', fontSize:25}}>Silahkan Register</Text>
        <TextInput placeholder="Nama Lengkap"/>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password" secureTextEntry="True"/>
        <TextInput placeholder="Phone"/>
        <Button title="Sign Up" />
      </View>
      </View>
    );
  }

export default Signup