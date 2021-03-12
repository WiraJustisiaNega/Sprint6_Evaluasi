// Import Libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image,ScrollView} from 'react-native';

function Home({navigation}){
    
    return(
        <View>
            <ScrollView>
        <View style={{backgroundColor:'#8A97FA', height:700}}>
            
            <Image source={require('../Image/settings.png')}
          style={{width: 20, height: 20, position:'absolute', left:320, tintColor:'white'}} />
             <Image
          source={require('../Image/mosque.png')}
          style={{width: 70, height: 70, marginHorizontal:'40%', marginVertical:20, tintColor:'white'}}/>
          <Text style={{alignSelf:"center", color:'white'}}>Tuesday 4th December 2019</Text>
          <Text style={{alignSelf:"center" , color:'white'}}>6 Rabi al-Akhir 1441</Text>
          
          <View style={{backgroundColor:'white', flexDirection:'row', width:290, height:240, alignSelf:'center',position:'absolute',top:180}}>
          <Image
          source={require('../Image/cloud.png')}
          style={{width: 40, height: 40, marginHorizontal:20, tintColor:'blue'}}/>
          <Text style={{color:'blue', padding:10,marginLeft:30}}>Fajr</Text>
          <Text style={{color:'blue', padding:10, marginLeft:60}}>05.45</Text>
          
          <View style={{position:'absolute',flexDirection:'row', bottom:160}}>
          <Image
          source={require('../Image/cloud.png')}
          style={{width: 40, height: 40,tintColor:'blue', marginHorizontal:20}}/>
          <Text style={{color:'blue', padding:10,marginLeft:20}}>Sunrise</Text>
          <Text style={{color:'blue', padding:10, marginLeft:46}}>05.45</Text>
          </View>

          <View style={{position:'absolute',flexDirection:'row', bottom:120, left:20}}>
          <Image
          source={require('../Image/cloud.png')}
          style={{width: 40, height: 40,tintColor:'blue'}}/>
          <Text style={{color:'blue', padding:10,marginLeft:50}}>Dhur</Text>
          <Text style={{color:'blue', padding:10, marginHorizontal:53}}>07.45</Text>
          </View>

          <View style={{position:'absolute',flexDirection:'row', top:120, left:20}}>
          <Image
          source={require('../Image/cloud.png')}
          style={{width: 40, height: 40,tintColor:'blue'}}/>
          <Text style={{color:'blue', padding:10,marginLeft:50}}>Asar</Text>
          <Text style={{color:'blue', padding:10, marginHorizontal:53}}>08.45</Text>
          </View>

          <View style={{position:'absolute',flexDirection:'row', top:160, left:20}}>
          <Image
          source={require('../Image/cloud.png')}
          style={{width: 40, height: 40,tintColor:'blue'}}/>
          <Text style={{color:'blue', padding:10,marginLeft:41}}>Maghrib</Text>
          <Text style={{color:'blue', padding:10, marginHorizontal:40}}>09.45</Text>
          </View>

          <View style={{position:'absolute',flexDirection:'row', top:195, left:20}}>
          <Image
          source={require('../Image/cloud.png')}
          style={{width: 40, height: 40,tintColor:'blue'}}/>
          <Text style={{color:'blue', padding:10,marginLeft:55}}>Isya</Text>
          <Text style={{color:'blue', padding:10, marginHorizontal:53}}>09.45</Text>
          </View>
          </View>

          <View style={{position:'absolute',marginVertical:430, left:100}}>
              <Text style={{color:'white',marginRight:20}}>Current prater time finishes in</Text>
              <Text style={{color:'white', fontSize:20, fontWeight:'bold', right:15}}>05 Hours and 44 Minute</Text>
          </View>

          <View style={{backgroundColor:'white', height:150, width:350, alignSelf:'center', position:'absolute', top:481}}>
                <Text style={{left:20, color:'grey'}}>Event</Text>
                <Text style={{left:20, fontWeight:'bold', fontSize:20}}>Ramadan</Text>
                <Text style={{left:20, fontWeight:'bold', fontSize:20}}>Kareem Taraweeh</Text>
                <Text style={{left:20, fontWeight:'bold', fontSize:20}}>Prayer : 20 : 30</Text>
                <Text style={{top: 20, left:20,color:'grey'}}>14.20 PM, Tuesday</Text>
                <Image
          source={require('../Image/islamic.jpeg')}
          style={{width: 110, height: 150,position:'absolute',left:240}}/>
          </View>

         
        </View>
        </ScrollView>
        </View>
    )
}

export default Home 