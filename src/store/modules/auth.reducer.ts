import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthStateType = {
  isAuthenticated: boolean;
  authenticationProcess: boolean;
  token: string | null;
  user: any | null;
  userCore: any | null;
  userRegisterStep: any | null;
}

type AuthSuccessPayloadType = {
  user: any;
  token: string
}

let initialState: AuthStateType = {
  isAuthenticated: false,
  authenticationProcess: false,
  token: null,
  user: null,
  userCore: null,
  userRegisterStep: null,
}

const authSlice = createSlice({
  name: 'authStoreModule',
  initialState,
  reducers: {
    setAuthSuccess(state, action: PayloadAction<AuthSuccessPayloadType>) {
      state.isAuthenticated = true;
      state.authenticationProcess = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setRegisterSuccess(state, action: PayloadAction<any>){
      state.user = action.payload.user;
      state.token = null;
    },

    setNewToken(state, action: PayloadAction<any>){
      state.token = action.payload.token;
    },

    updateUserData(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
    },

    updateUserCore(state, action: PayloadAction<any>) {
      state.userCore = action.payload.userCore;
    },

    updateUserRegisterStep(state, action: PayloadAction<any>) {
      state.userRegisterStep = action.payload.step;
    },

    logout(state){
      Object.assign(state, initialState);
    }
  }
})

export const {
  setAuthSuccess,
  setRegisterSuccess,
  updateUserData,
  updateUserCore,
  updateUserRegisterStep,
  setNewToken,
  logout
} = authSlice.actions

export default authSlice.reducer
