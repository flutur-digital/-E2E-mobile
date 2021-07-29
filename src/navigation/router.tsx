import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();

//import screens
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';

const Router = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
}

export default Router;

