import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { Settings } from 'react-native-fbsdk-next';
import Router from './navigation/router';
import { configureAxiosErrorHandler } from "./config";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./store/store";

enableScreens();
configureAxiosErrorHandler();
Settings.initializeSDK();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle={"dark-content"}/>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
