// import React from 'react'
// import { View, Text } from 'react-native'
// import Communication from './Communication'
// import Dashboard from './evaluasi'
// import Splashscreen from './splashscreen'



// export default function App() {
//   return (
//     // <Login/>
//     // <PropsDinamis />
//     // <EvaluasiHalamanDua />
//     // <Splashscreen />
//     <Dashboard />
//     // <Communication />
//   )
// }

// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/navigation/stack';
import MateriBelajar from './MateriBelajar';
import Dashboard from './dashboard';

function App () {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
    // <MateriBelajar />
    // <Dashboard />
  )
}

export default App;