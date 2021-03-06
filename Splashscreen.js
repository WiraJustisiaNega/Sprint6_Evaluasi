// import React from 'react';
// import {View, Text, TextInput, TouchableOpacity, Touchable} from 'react-native';
// import {styles} from './src/styles/_app';
// import Headers from './src/components/Headers';
// import Unmount from './src/components/unmount';

// class App extends React.Component {
//   // mounting
//   constructor () {
//     super ();
//     this.state = {
//       nama: '',
//       password: '',
//       ubah: false,
//     };
//     console.log ('ini dari construtor');
//   }

//   componentDidMount = () => {
//     console.log ('ini dari componend did mount');
//     setTimeout (() => {
//       this.setState ({ubah: true});
//     }, 5000);
//   };

//   componentDidUpdate = () => {
//     console.log ('ini dari componend did UPdate');
//   };

//   componentWillUnmount = () => {
//     console.log ('ini dari componend will umounting');
//   };

//   render () {
//     console.log ('ini dari render');
//     return (
//       <View style={styles.container}>
//         <Headers title="Wellcome" />
//         <Headers title="Selamat Datang" />
//         <Text style={styles.title}>Hey.</Text>
//         <Text style={styles.title}>Login Now.</Text>
//         {this.state.ubah && <Unmount />}
//         <View style={styles.ifYou}>
//           <Text style={styles.if}>If you are new / </Text>
//           <Text>Create New</Text>
//         </View>
//         <Text>{this.state.nama}</Text>
//         <Text>{this.state.password}</Text>
//         <View style={styles.inputan}>
//           <TextInput
//             placeholder="Email"
//             style={styles.kolomINput}
//             onChangeText={email => this.setState ({nama: email})}
//           />
//           <TextInput
//             placeholder="Password"
//             style={styles.kolomINput}
//             onChangeText={password => this.setState ({password: password})}
//           />
//           <View style={styles.forget}>
//             <Text>Forget Password? /</Text>
//             <Text>Reset</Text>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.login} onPress={() => alert ()}>
//           <Text style={styles.titleLogin}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.login}
//           onPress={() => this.setState ({ubah: true})}
//         >
//           <Text style={styles.titleLogin}>Ubah</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default App;

import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      loading: true,
    };
  }

  componentDidMount () {
    setTimeout (() => {
      this.setState ({loading: false});
    }, 1000);
  }

  splashscreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
        <ActivityIndicator color="red" size="large" />
        <Text>Chat App</Text>
      </View>
    );
  };

  // login = () => {
  //   return (
  //     <View style={{flex: 1}}>
  //       <View style={{height: 50, width: 300, backgroundColor: 'red'}}>
  //         <View style={{flexDirection: 'row'}}>
  //           <View>
  //             <Text>Welcome</Text>
  //             <View>
  //               <Text>+</Text>
  //               <Text>Alamat</Text>
  //             </View>
  //           </View>
  //           <View>
  //             <Text>Icon</Text>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  render () {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="red" size='large' />
          <Text>Chat App</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Halaman Login</Text>
        </View>
      );
    }
    // return (
    //   <View style={{flex: 1}}>
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <View style={{marginRight: 10, height: 60}}>
    //         <View style={{backgroundColor: 'red'}}>
    //           <Text>Wellcome</Text>
    //           <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //             <Text style={{marginRight: 10}}>+</Text>
    //             <Text>Alamat</Text>
    //           </View>
    //         </View>
    //       </View>
    //       <View>
    //         <Text style={{fontSize: 25}}>tes</Text>
    //       </View>
    //     </View>
    //     <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>
          

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>


    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>


    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>
    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //       <View style={{marginLeft: 10, marginRight: 10}}> 
    //         <Text>ffsdfsd</Text>
    //       </View>

    //     </View>
    //   </View>
    // );
  }
}
export default App;