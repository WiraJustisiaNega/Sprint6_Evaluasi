// import libraries
import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

function Login({navigation}){
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Akun</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login