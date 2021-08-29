import React from 'react';
import {connect} from "react-redux";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigationTab from "../components/BottomNavigationTab";

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

//edit recipe screens
import EditRecipeStep1 from "../screens/EditRecipeScreens/EditRecipeStep1";
import EditRecipeStep2 from "../screens/EditRecipeScreens/EditRecipeStep2";
import EditRecipePreview from "../screens/EditRecipeScreens/EditRecipePreview";
import EditRecipeSuccess from "../screens/EditRecipeScreens/EditRecipeSuccess";

//user profile screens
import MyProfile from "../screens/Profile/MyProfile";
import ProfileSettings from "../screens/Profile/ProfileSettings";
import Settings from "../screens/Profile/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Stack1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="UserRecipes" component={UserRecipes} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />

      {/* edit screens */}
      <Stack.Screen name="EditRecipeStep1" component={EditRecipeStep1} />
      <Stack.Screen name="EditRecipeStep2" component={EditRecipeStep2} />
      <Stack.Screen name="EditRecipeSuccess" component={EditRecipeSuccess} />
      <Stack.Screen name="EditRecipePreview" component={EditRecipePreview} />
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
        style: {
          alignItems: 'center',
          paddingTop: 20,
          height: 78
        }
      }}
    >
      <Tab.Screen
        name="Stack1"
        component={Stack1}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomNavigationTab focused={focused} width={73} height={46} inactiveIcon={require("../assets/images/bottomnavigationicons/tab1inactive.png")} activeIcon={require("../assets/images/bottomnavigationicons/tab1active.png")}/>
          ),
        }}
      />
      <Tab.Screen
        name="Stack2"
        component={Stack2}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomNavigationTab focused={focused} width={48} height={48} inactiveIcon={require("../assets/images/bottomnavigationicons/tab2inactive.png")} activeIcon={require("../assets/images/bottomnavigationicons/tab2active.png")}/>
          ),
        }}
      />
      <Tab.Screen
        name="Stack3"
        component={Stack3}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomNavigationTab focused={focused} width={47} height={31} inactiveIcon={require("../assets/images/bottomnavigationicons/tab3inactive.png")} activeIcon={require("../assets/images/bottomnavigationicons/tab3active.png")}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

interface StateProps{
  isAuthenticated: boolean,
  token: string
}

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigationStack} />
    </Stack.Navigator>
  )
}

const Router = (state:StateProps) => {

  // console.log(state);
  return state.isAuthenticated ? <AuthStack/> : <Stack1/>
}

const mapStateToProps = (state : any) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token
});

export default connect<StateProps>(mapStateToProps)(Router)

