import React, {Component} from 'react';
import {View, Text, Image,ScrollView} from 'react-native';
import mobil from './src/assets/mobil.jpg'

const TampilanEcommerce = () => {
  return (
    <View>
      <ScrollView>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'red',
          }}>
          Bismillah
        </Text>
        <View
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 100,
            borderColor: 'black',
            borderWidth: 2,
            marginTop: 30,
          }}
        />
        <View
          style={{
            padding: 12,
            backgroundColor: '#F2F2F2',
            width: 212,
            marginTop: 50,
            borderRadius: 25,
          }}>
          <Image
            source={mobil}
            style={{
              width: 188,
              height: 107,
              borderRadius: 25,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 16,
            }}>
            All New Terios
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'orange',
              marginTop: 10,
            }}>
            Rp. 122.000.000
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 12,
            }}>
            Purwokerto
          </Text>
          <View
            style={{
              backgroundColor: '#6FCF97',
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 25,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>
              BELI
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TampilanEcommerce;
