import React from 'react';
import {View,Text} from 'react-native'

// Menggunakan Function Component
const Headers = ({title}) => {
    return (
        <View
            style={{
                height: 50,
                width : '100%',
                backgroundColor: 'skyblue',
                justifyContent :'center' 
}}>
    <Text>{title}</Text>
        </View>
    )
}

// // Menggunakan Class Component
// class Headers extends React.Component {
//     render () {
//       return (
//         <View
//           style={{
//             height: 50,
//             width: '100%',
//             backgroundColor: 'red',
//             justifyContent: 'center',
//           }}
//         >
//           <Text>{this.props.title}</Text>
//         </View>
//       );
//     }
//   }
export default Headers

