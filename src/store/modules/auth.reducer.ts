import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthStateType = {
  isAuthenticated: boolean;
  token: string | null;
  user: any | null;
}

type AuthSuccessPayloadType = {
  user: any;
  token: string
}

let initialState: AuthStateType = {
  isAuthenticated: false,
  token: null,
  user: null,
}

const authSlice = createSlice({
  name: 'authStoreModule',
  initialState,
  reducers: {
    setAuthSuccess(state, action: PayloadAction<AuthSuccessPayloadType>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    updateUserData(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
    },

    logout(state){
      Object.assign(state, initialState);
    }
  }
})

export const {
  setAuthSuccess,
  updateUserData,
  logout
} = authSlice.actions

export default authSlice.reducer
