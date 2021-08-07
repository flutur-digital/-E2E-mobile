import { configureStore, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';


const persistConfig = {
  key: 'easy2eatstorage',
  storage : AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk),
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, any, unknown, Action>

export const persistor = persistStore(store)

export default store
