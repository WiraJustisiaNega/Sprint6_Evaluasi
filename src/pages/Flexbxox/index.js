import React, {Component} from 'react'
import {View,Text,Image,ScrollView} from 'react-native';

const Flexbox = () => {
    return (
      <ScrollView>
      <View>
        
<View style={{
  flexDirection:'row',
  backgroundColor:'#c8d6e5',
  alignItems: 'center',
  justifyContent:'space-between'}}>
      <View style={{backgroundColor:'red', width:50, height:50 }} />
        <View style={{backgroundColor:'blue', width:50, height:50}} />
        <View style={{backgroundColor:'green', width:50, height:50}} />
        <View style={{backgroundColor:'black', width:50, height:50}} />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text>Beranda</Text>
      <Text>Video</Text>
      <Text>Playlist</Text>
      <Text>Komunitas</Text>
      <Text>Channel</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <View>      
      <Text>Adi Wijaya</Text>
      <Text>10000 subscriber</Text>
      </View>
      </View>
      </View>
      </ScrollView>
)
    }

export default Flexbox
