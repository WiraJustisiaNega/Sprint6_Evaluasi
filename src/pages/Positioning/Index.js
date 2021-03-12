import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {styless} from './src/styles/_positioning';

export class Positioning extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styless.wrapper}>
          <Text>Materi Position</Text>
          <View style={styless.cartWrapper}>
            <Image
              style={styless.gambar}
              source={require('./src/assets/keranjang.png')}
            />
            <Text style={styless.notif}>10</Text>
          </View>
          <Text style={styless.teks}>Keranjang Belanja Anda</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Positioning;
