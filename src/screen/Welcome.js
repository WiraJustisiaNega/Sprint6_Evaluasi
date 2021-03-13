import React from 'react';
import {View,Text, TextInput,Button, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style/_Welcome';

function Welcome({navigation}) {
    return (
      <View style={styles.container}>
          <View>
        <Text style={{fontSize:30, color:'white', marginBottom:10}}>Selamat Datang</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
      </View>
        
      <Button title="Sign In" color="yellow" onPress={() => navigation.navigate('Home') }/> 
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp') }/> 
      </View>
    );
  }

export default Welcome

