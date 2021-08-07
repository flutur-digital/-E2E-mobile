import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import Router from './navigation/router';
import {configureAxiosErrorHandler} from "./config";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from "./store/store";

enableScreens();
configureAxiosErrorHandler();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation/>
      </PersistGate>
    </Provider>
  );
};

 export default App;
