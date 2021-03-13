import React from 'react';
import {View,Text, TextInput,Button, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style/_Welcome';

function Detail({navigation}) {
    return (
      <View>
          <Text style={{fontSize:40}}>Detail</Text>
      </View>
    );
  }

export default Detail

