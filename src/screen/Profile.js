import React from 'react';
import {View,Text,Image, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Profile({navigation}) {
    return (
      <View>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../Image/adiwijaya.jpg')} style={{width:30, height:30,}}/>
          <Text style={{fontWeight:'bold',fontSize:20, left:10}}>Floyd Hayes</Text>
          <Text style={{fontSize:10,color:'grey', marginBottom:10}}>Photographer</Text>
          <Button title="Follow" color="blue"/>
      </View>
      
      <View style={{flexDirection:'row'}}>
      <View>
          <Text style={{fontWeight:'bold', fontSize:15}}>210</Text>
          <Text style={{fontSize:10}}>Photos</Text>
      </View>
      <View>
          <Text style={{fontWeight:'bold', fontSize: 15}}>15K</Text>
          <Text style={{fontSize:10}}>Followers</Text>
      </View>
      <View>
          <Text style={{fontWeight:'bold', fontSize: 15}}>605</Text>
          <Text style={{fontSize: 10}}>Following</Text>
      </View>
      </View>

        <View>
            <Image source={require('../Image/view.jpg')} style={{width:100, height:120}}/>
            <Image source={require('../Image/view2.jpg')} style={{width:70, height:80,left:15}}/>
            <Image source={require('../Image/view3.jpg')} style={{width:50, height:80}}/>
            <Image source={require('../Image/view4.jpg')} style={{width:70, height:80}}/>
        </View>

      </View>
    );
  }

export default Profile