import React from 'react';
import {Component} from 'react-native'
import {View,Text,Image,ScrollView,Button} from 'react-native'
import sty from '../style/_Home'

function Home({navigation}) {
    return (
      <View>
          <View>
              <Text style={sty.title}>Actions</Text>
              <Image source={require('../Image/man.png')}/>
          </View>

          <View style={{flexDirection:'row', backgroundColor:'green', width:50, height:50 }}>
              <ScrollView horizontal> 
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              <Text style={sty.atasan}>Toules</Text>
              </ScrollView>
          </View>

        <View>
            <ScrollView>
                <Button title="Test" onPress={() => navigation.navigate('Detail')}/>
                <Button title="Test" onPress={() => navigation.navigate('Detail')}/>
                <Button title="Test" onPress={() => navigation.navigate('Detail')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
                <Button title="Test" onPress={() => navigation.navigate('Profile')}/>
        </ScrollView>
        </View>
      </View>
)
}

export default Home