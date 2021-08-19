import store from "./../store/store";

export const axiosAuthHeader = () => {
  const state = store.getState();
  if(state.authReducer.isAuthenticated && state.authReducer.token){
    return {
      headers: {Authorization: `Bearer ${state.authReducer.token}`}
    };
  } else {
    return {
      headers: {Authorization: `Bearer `}
    };
  }
}
