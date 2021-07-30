import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigationTab from "../components/BottomNavigationTab";

import Tab1InactiveIcon from '../assets/images/bottomnavigationicons/tab1inactive.svg';
import Tab1ActiveIcon from '../assets/images/bottomnavigationicons/tab1active.svg';

import Tab2InactiveIcon from '../assets/images/bottomnavigationicons/tab2inactive.svg';
import Tab2ActiveIcon from '../assets/images/bottomnavigationicons/tab2active.svg';

import Tab3InactiveIcon from '../assets/images/bottomnavigationicons/tab3inactive.svg';
import Tab3ActiveIcon from '../assets/images/bottomnavigationicons/tab3active.svg';

//import screens
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import SearchResults from "../screens/SearchResults";
import UserRecipes from "../screens/UserRecipes";
// import Test from "../screens/Test";
import RecipeScreen from "../screens/RecipeScreen";
import Search from "../screens/Search";

//add recipe screens
import AddRecipeStep1 from "../screens/AddRecipeScreens/AddRecipeStep1";
import AddRecipeStep2 from "../screens/AddRecipeScreens/AddRecipeStep2";
import AddRecipePreview from "../screens/AddRecipeScreens/AddRecipePreview";
import AddRecipeSuccess from "../screens/AddRecipeScreens/AddRecipeSuccess";

//user profile screens
import MyProfile from "../screens/Profile/MyProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Stack1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="UserRecipes" component={UserRecipes} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

const Stack2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="AddRecipeStep1" component={AddRecipeStep1} />
      <Stack.Screen name="AddRecipeStep2" component={AddRecipeStep2} />
      <Stack.Screen name="AddRecipePreview" component={AddRecipePreview} />
      <Stack.Screen name="AddRecipeSuccess" component={AddRecipeSuccess} />
    </Stack.Navigator>
  )
}

const Stack3 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MyProfile" component={MyProfile} />
    </Stack.Navigator>
  )
}


const BottomNavigationStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Stack1"
      tabBarOptions={{
        activeTintColor: '#ff0000',
        inactiveTintColor: '#4c4c4c',
        showLabel: false,
        style:{
          paddingLeft: 20,
          paddingRight:20
        }
      }}
    >
      <Tab.Screen
        name="Stack1"
        component={Stack1}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomNavigationTab focused={focused} inactiveIcon={<Tab1InactiveIcon/>} activeIcon={<Tab1ActiveIcon/>}/>
          ),
        }}
      />
      <Tab.Screen
        name="Stack2"
        component={Stack2}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomNavigationTab focused={focused} inactiveIcon={<Tab2InactiveIcon/>} activeIcon={<Tab2ActiveIcon/>}/>
          ),
        }}
      />
      <Tab.Screen
        name="Stack3"
        component={Stack3}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomNavigationTab focused={focused} inactiveIcon={<Tab3InactiveIcon/>} activeIcon={<Tab3ActiveIcon/>}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <BottomNavigationStack/> : <Stack1/>
}

export default Router;

