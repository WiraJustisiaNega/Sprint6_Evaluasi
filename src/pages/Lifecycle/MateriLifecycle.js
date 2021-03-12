import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Touchable} from 'react-native';
import {styles} from './src/styles/_app';
import header from './src/Component/Headers'

class App extends React.Component {
  // mounting
  constructor () {
    super ();
    this.state = {
      nama: '',
      password: '',
      ubah: false,
    };
    console.log ('ini dari construtor');
  }

  componentDidMount = () => {
    console.log ('ini dari componend did mount');
    setTimeout (() => {
      this.setState ({ubah: true});
    }, 5000);
  };

  componentDidUpdate = () => {
    console.log ('ini dari componend did UPdate');
  };

  componentWillUnmount = () => {
    console.log ('ini dari componend will umounting');
  };

  render () {
    console.log ('ini dari render');
    return (
      <View style={styles.container}>
        <Headers title="Wellcome" />
        <Headers title="Selamat Datang" />
        <Text style={styles.title}>Hey.</Text>
        <Text style={styles.title}>Login Now.</Text>
        {this.state.ubah && <Unmount />}
        <View style={styles.ifYou}>
          <Text style={styles.if}>If you are new / </Text>
          <Text>Create New</Text>
        </View>
        <Text>{this.state.nama}</Text>
        <Text>{this.state.password}</Text>
        <View style={styles.inputan}>
          <TextInput
            placeholder="Email"
            style={styles.kolomINput}
            onChangeText={email => this.setState ({nama: email})}
          />
          <TextInput
            placeholder="Password"
            style={styles.kolomINput}
            onChangeText={password => this.setState ({password: password})}
          />
          <View style={styles.forget}>
            <Text>Forget Password? /</Text>
            <Text>Reset</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.login} onPress={() => alert ()}>
          <Text style={styles.titleLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => this.setState ({ubah: true})}
        >
          <Text style={styles.titleLogin}>Ubah</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;