import { combineReducers,  } from '@reduxjs/toolkit'

import AuthReducer from './modules/auth.reducer';
import AddRecipeReducer from './modules/addRecipe.reducer';
import EditRecipeReducer from './modules/editRecipe.reducer';

const rootReducer = () =>
  combineReducers({
    authReducer: AuthReducer,
    addRecipeReducer: AddRecipeReducer,
    editRecipeReducer: EditRecipeReducer
  });

export default rootReducer
