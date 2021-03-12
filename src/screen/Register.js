// Import Libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Register({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text onPress={() => navigation.navigate("Home")}> Shalat</Text>
        </View>
    )
}

export default Register 