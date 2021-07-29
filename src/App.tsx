import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import Router from './navigation/router';

enableScreens();

 const App = () => {
   
   return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
   );
 };

 export default App;
