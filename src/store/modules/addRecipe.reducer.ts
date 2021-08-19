import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RecipeStateType = {
  step1: any;
  step2: any;
}


let initialState: RecipeStateType = {
  step1: null,
  step2: null
}

const addRecipeSlice = createSlice({
  name: 'addRecipeStoreModule',
  initialState,
  reducers: {
    setRecipeStep1(state, action: PayloadAction<any>) {
      state.step1 = action.payload.step1;
    },

    setRecipeStep2(state, action: PayloadAction<any>) {
      state.step2 = action.payload.step2;
    },

    resetAddRecipeState(state){
      Object.assign(state, initialState);
    }
  }
})

export const {
  setRecipeStep1,
  setRecipeStep2,
  resetAddRecipeState
} = addRecipeSlice.actions

export default addRecipeSlice.reducer
