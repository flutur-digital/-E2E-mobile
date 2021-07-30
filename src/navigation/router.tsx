import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();

//import screens
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import SearchResults from "../screens/SearchResults";
import UserRecipes from "../screens/UserRecipes";
import Test from "../screens/Test";
import RecipeScreen from "../screens/RecipeScreen";

const Router = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
          <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SearchResults" component={SearchResults} />
          <Stack.Screen name="UserRecipes" component={UserRecipes} />
          <Stack.Screen name="RecipeScreen" component={RecipeScreen} />

      </Stack.Navigator>
    );
}

export default Router;

