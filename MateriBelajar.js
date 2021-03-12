import React from 'react'
import { View, Text, Image } from 'react-native'

const MateriBelajar = () => {
  return (
    <View style={{padding:30}}>
    <View>
      <Text style={{
        fontSize:30,
        marginHorizontal:"25%",
        marginVertical:30,
        color:'purple'
      }}>Quran App</Text>
      <View style={{
        alignSelf:'center',
        marginVertical:25
      }}>
        <Text style={{alignSelf:'center'}}>Learn Quran &</Text>
        <Text style={{alignSelf:'center'}}>Recite Once Everyday</Text>
      </View>
    </View>
    <View style={{
      width:300,
      height:300,
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderRadius:30
    }}>
      <Image style={{width:175, height:175}}
      source={require('./src/assets/icon/quranOpening.png')}/>
      <Text style={{
        backgroundColor:'yellow',
        borderRadius:15,
        borderWidth:1,
        fontSize:20,
        position:'absolute',
        top:280
      }}>Get Started</Text>
    </View>
    </View>
  )
}

export default MateriBelajar
