// import React from 'react'
// import {View,ScrollView} from 'react-native';
// import LifeCycle from './src/pages/Lifecycle';
// import Splashscreen from './Splashscreen'
// import TampilanEcommerce from './TampilanEcommerce'
// import login from './src/pages/Lifecycle';

// const App = () => {
//     return (
//           // <login/>
//     );
//   }


// export default App;

import React from 'react'
import { View, Text } from 'react-native'
import EvaluasiHalamanDua from './Evaluasi /evaluasi'
import Evaluasi from './Evaluasi /Evaluasi'
import Login from './src/pages/Lifecycle'
import PropsDinamis from './src/pages/PropsDinamis/Index'

export default function App() {
  return (
    // <Login/>
    // <PropsDinamis />
    <Evaluasi />
    // <EvaluasiHalamanDua />
  )
}
