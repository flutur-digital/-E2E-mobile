import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RecipeStateType = {
  currentStep: number,
  step1: any;
  step2: any;
}


let initialState: RecipeStateType = {
  currentStep: 1,
  step1: null,
  step2: null
}

const addRecipeSlice = createSlice({
  name: 'addRecipeStoreModule',
  initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<any>) {
      state.currentStep = action.payload.step;
    },

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
  setCurrentStep,
  setRecipeStep1,
  setRecipeStep2,
  resetAddRecipeState
} = addRecipeSlice.actions

export default addRecipeSlice.reducer
