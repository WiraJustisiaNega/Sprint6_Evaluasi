import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './src/styles/_menuLogin';
import Headers from './src/Component/Headers'


export default class index extends Component {
  
  render() {
    console.log('==> render');
    return (
      <View style={styles.container}>
        <Headers title='Welcome' />
        <Text style={styles.first}>Hey.</Text>
        <Text style={styles.first}>Login Now.</Text>
        <View style={styles.create}>
          <Text style={styles.new}>If you are new /</Text>
          <Text>Create New</Text>
        </View>
        
        <Text>
          {this.state.nama}
          {this.state.password}
        </Text>
        <View style={styles.inputan}>
          <TextInput placeholder="Email" style={styles.input} 
          onChangeText={(email) => this.setState ({nama:email}) }
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState ({password:password})}
          />
          <View style={styles.forgot}>
            <Text>Forgot Password/</Text>
            <Text>Reset</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.klik}
          onPress={() => Alert.alert('Login Succes')}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
