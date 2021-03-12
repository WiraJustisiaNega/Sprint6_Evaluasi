// import libraries
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout( () => {
        navigation.replace('Home')
    }, 3000)
}, [navigation]);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#8A97FA',
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../Image/mosque.png')}
          style={{width: 70, height: 70, alignItems: 'flex-end', tintColor:'white'}}
        />
        </View>
        <View style={{position:'absolute',bottom:50}}>
        <Text style={{color: 'white', fontSize: 15}}>As-salamu alaykum</Text>
        <Text style={{color: 'white', fontSize: 15}}>Peace be upon you</Text>
      </View>
    </View>
  );
}

export default Splash;
