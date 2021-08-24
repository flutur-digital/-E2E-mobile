import axios from "axios";
import {axiosAuthHeader} from "../../config/axiosConfig";

export const getUserProfileById = async (userId: number) => {
  return axios.get(`/user/${userId}`)
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}

export const likeRecipeById = async (recipeId: number) => {
  return axios.post(`/like-recipe/${recipeId}`,{},axiosAuthHeader())
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}

export const getIsRecipeIsLiked = async (recipeId: number) => {
  return axios.get(`/is-liked/${recipeId}`,axiosAuthHeader())
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}

export const followUserById = async (userId: number) => {
  return axios.post(`/follow/${userId}`,{},axiosAuthHeader())
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}

export const getUserIsFollowingUser = async (userId: number) => {
  return axios.get(`/is-following/${userId}`,axiosAuthHeader())
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}

export const updateUserProfile = async (formdata : any) => {
  const authheaders = axiosAuthHeader();
  return axios.post(`/save-settings`,formdata,{
    headers: {
      'Content-Type': 'multipart/form-data',
      ...authheaders.headers
    }
  }).then(res => {
    return res;
  }).catch(e =>{
    return e;
  })
}
