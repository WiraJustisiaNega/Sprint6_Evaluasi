import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  placeholder,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const Materi = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>Haii</Text>
      <Text>Horaii</Text>
      <TextInput
        style={{width: '100%', height: 50}}
        placeholder="Masukkan nama anda"
      />
      <Image
        style={{width: '70%', height: '50%'}}
        source={require('./src/assets/mioZ.png')}
      />
      <Button
        title="Klik saya"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <ActivityIndicator size="small" color="red" />
      <TouchableOpacity onPress={() => Alert.alert('bismillah')}>
        <Text>Wira Justisia</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Materi;
