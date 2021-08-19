import { combineReducers,  } from '@reduxjs/toolkit'

import AuthReducer from './modules/auth.reducer';
import AddRecipeReducer from './modules/addRecipe.reducer';

const rootReducer = () =>
  combineReducers({
    authReducer: AuthReducer,
    addRecipeReducer: AddRecipeReducer
  });

export default rootReducer
