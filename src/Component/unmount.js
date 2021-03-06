//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Unmount extends React.Component{
    componentWillUnmount(){
        console.log (' Console Log Ini Dari componentWillMount');
      }
    render(){
        return(
            <View>
                <Text>unmount</Text>
            </View>
        )
    }
}

//make this component available to the app
export default Unmount;