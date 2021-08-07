import { combineReducers,  } from '@reduxjs/toolkit'

import AuthReducer from './modules/auth.reducer';

const rootReducer = () =>
  combineReducers({
    authReducer: AuthReducer,
  });

export default rootReducer
