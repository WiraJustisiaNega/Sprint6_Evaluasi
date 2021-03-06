// class LifeCycle extends Component {
//     constructor(props){
//         super(props)
//         console.log('==> lifeCycle Constructor')
//         this.state = {
//             iklan: 'SGM'
//         }
//     }

//     componentDidMount(){
//         console.log('==> lifeCycle Did Mount')
//         setTimeout(() => {
//             this.setState({
//                 iklan: 'Bendera'
//             });
//         }, 3000);
//     }

//     componentDidUpdate(){
//         console.log('==> lifeCycle Did Update')
//     }

//     componentWillUnmount(){
//         console.log('lifeCycle Will Unmount')
//     }

//     render(){
//         return(
//             <View>
//                 <Text style={{
//                     fontSize: 20,
//                     width: '100%',
//                     height: 25,
//                     textAlign: 'center',
//                     backgroundColor: '#feca57',
//                     }}>Susu {this.state.iklan}</Text>
//             </View>
//         )
//     }
// }


// export default LifeCycle;

// export default class LifeCycle extends Component {
// login = () => {
//         return(
//             <View style={{flex:1}}>
//                 <View style={{height:50, width: 300, backgroundColor:'red'}}>
//                     <View style={{flexDirection:'row'}}>
//                     <Text>Welcome</Text>
//                     <View>
//                         <Text>+</Text>
//                         <Text>Alamat</Text>
//                     </View>
//                     </View>
//                 </View>
//                 <Text>Icon</Text>
//             </View>
//         )
//     }

import React from 'react';
import {View, Text,ActivityIndicator,TextInput,Image, ScrollView} from 'react-native';

class App extends React.Component {
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
    
    constructor () {
        super ();
        this.state ={
            negara : 'Jepang'
        }
    }

    componentDidMount(){
        console.log('==> LifeCycle Did Mount')
        setTimeout(() => {
            this.setState({
                negara : 'Korea'
            })
        }, 5000)
    }

    componentDidUpdate(){
        console.log('==> LifeCycle Did Update');
    }
      render () {
        return (
            <View style={{
                flex:1,
                backgroundColor:'skyblue'
            }}>
                
            <View>
                <Text style={{
                    fontSize:20,
                    width:'100%',
                    height:25,
                    textAlign:'center',
                    backgroundColor:'yellow',
                }}>Indonesia{this.state.negara}</Text>
            </View>
                <View style={{
                    margin: 40,
                    flexDirection:'row',
                }}>
                    <ScrollView horizontal={true}>  
                    <Text style={{marginLeft:25}}>Beranda</Text>
                    <Text style={{marginLeft:25}}>Profil</Text>
                    <Text style={{marginLeft:25}}>Info</Text>
                    <Text style={{marginLeft:25}}>Pesan</Text>
                    <Text style={{marginLeft:25}}>About Us</Text>
                    <Text style={{marginLeft:25}}>About Us</Text>
                    <Text style={{marginLeft:25}}>About Us</Text> 
                    </ScrollView>
                </View>
                <View style={{
                    backgroundColor:'#F2F2F2',
                    width:200,
                    height:180,
                    marginLeft:80,
                    alignItems:'center'
                }}>
                   <Image source={require ('../../assets/mioZ.png')} style={{
                       height: 50,
                       width:50,
                   }}/>
                </View>
            </View>
            

        )
      }
    }
    export default App;
    
